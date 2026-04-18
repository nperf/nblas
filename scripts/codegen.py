#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
import re
import shlex
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path


AUTO_GENERATED_BY = "scripts/codegen.py"
CBLAS_LEVEL_MARKERS = [
    ("Prototypes for level 1 BLAS functions", "level1"),
    ("Prototypes for level 1 BLAS routines", "level1"),
    ("Prototypes for level 2 BLAS", "level2"),
    ("Prototypes for level 3 BLAS", "level3"),
]


@dataclass(frozen=True)
class Parameter:
    type: str
    name: str


@dataclass(frozen=True)
class Prototype:
    level: str
    return_type: str
    native_name: str
    wrapper_name: str
    params: list[Parameter]


@dataclass(frozen=True)
class ConvenienceSpec:
    name: str
    type_signature: str
    impl_signature: str
    body: str


@dataclass(frozen=True)
class ParseConfig:
    symbol_prefix: str
    level_markers: tuple[tuple[str, str], ...] = ()
    default_level: str = "default"


@dataclass(frozen=True)
class RenderConfig:
    header_include: str
    module_name: str
    strip_param_type: str | None = None
    strip_param_value: str | None = None
    native_types_path: str = "./generated-native-types"
    native_module_path: str = "./generated-native"
    convenience_types_path: str = "./generated-convenience-types"
    emit_convenience: bool = False


@dataclass(frozen=True)
class OutputConfig:
    root_dir: Path
    routines_dir: Path
    binding_gyp: Path
    index_cc: Path
    routines_header: Path
    generated_native_types: Path
    generated_native_ts: Path
    generated_convenience_types: Path | None
    generated_convenience_ts: Path | None


@dataclass(frozen=True)
class BlasSelection:
    name: str
    libraries: tuple[str, ...]
    include_dirs: tuple[str, ...] = ()
    cflags: tuple[str, ...] = ()
    header_path: str | None = None


def normalize_whitespace(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def parse_parameter(raw_param: str) -> Parameter | None:
    param = normalize_whitespace(raw_param)
    if param == "void":
        return None

    match = re.match(r"^(.*?)([A-Za-z_]\w*)$", param)
    if match is None:
        raise ValueError(f"Failed to parse parameter: {raw_param}")

    return Parameter(
        type=normalize_whitespace(re.sub(r"\s+\*$", " *", match.group(1)).strip()),
        name=match.group(2),
    )


def parse_prototype(statement: str, config: ParseConfig, level: str) -> Prototype | None:
    symbol_pattern = re.escape(config.symbol_prefix) + r"[A-Za-z0-9_]+"
    match = re.match(rf"^(.*?)\s+({symbol_pattern})\s*\((.*)\)\s*;$", statement)
    if match is None:
        return None

    params_source = normalize_whitespace(match.group(3))
    if "..." in params_source:
        return None

    params = [
        parsed
        for raw_param in params_source.split(",")
        if (parsed := parse_parameter(raw_param)) is not None
    ]
    native_name = match.group(2)

    return Prototype(
        level=level,
        return_type=normalize_whitespace(match.group(1)),
        native_name=native_name,
        wrapper_name=native_name[len(config.symbol_prefix) :],
        params=params,
    )


def normalize_header_source(source: str) -> str:
    normalized_lines: list[str] = []
    for raw_line in source.splitlines():
        stripped = raw_line.strip()
        if re.match(r"^API_[A-Z_]+\(", stripped):
            normalized_lines.append(";")
            continue

        line = raw_line
        # Vendor BLAS headers sometimes prefix declarations with export macros
        # (for example BLIS_EXPORT_BLAS). Strip those so the parser sees the
        # underlying C type instead of a storage/export annotation.
        line = re.sub(r"\b[A-Z][A-Z0-9_]*EXPORT[A-Z0-9_]*\b", "", line)
        line = re.sub(r"\bBLIS_EXPORT_BLAS\b", "", line)
        line = re.sub(r"\s{2,}", " ", line)
        normalized_lines.append(line)
    return "\n".join(normalized_lines)


def parse_header(source: str, config: ParseConfig) -> list[Prototype]:
    statements: list[Prototype] = []
    current_level = config.default_level
    prototype_buffer = ""

    for raw_line in normalize_header_source(source).splitlines():
        line = raw_line.strip()

        for marker, level in config.level_markers:
            if marker in line:
                current_level = level
                break

        if (
            not line
            or line.startswith("#")
            or line.startswith("/*")
            or line.startswith("*")
            or line.startswith("//")
            or line in {"extern \"C\" {", "}"}
        ):
            continue

        if not prototype_buffer and re.match(r"^[-A-Za-z_]", line) is None:
            continue

        prototype_buffer = normalize_whitespace(f"{prototype_buffer} {line}")
        if not line.endswith(";"):
            continue

        prototype = parse_prototype(prototype_buffer, config, current_level)
        if prototype is not None:
            statements.append(prototype)

        prototype_buffer = ""

    return statements


def uses_float64_void_arrays(prototype: Prototype) -> bool:
    return (
        prototype.wrapper_name.startswith("z")
        or prototype.wrapper_name.startswith("dz")
        or prototype.wrapper_name == "izamax"
    )


def pointer_array_type(prototype: Prototype, param: Parameter) -> str:
    param_type = param.type
    if any(token in param_type for token in ("double", "lapack_complex_double")):
        return "Napi::Float64Array"
    if any(token in param_type for token in ("float", "lapack_complex_float")):
        return "Napi::Float32Array"
    if any(token in param_type for token in ("lapack_int", "lapack_logical", "int")):
        return "Napi::Int32Array"
    if "void *" in param_type:
        return "Napi::Float64Array" if uses_float64_void_arrays(prototype) else "Napi::Float32Array"
    raise ValueError(f'Unsupported pointer parameter type "{param.type}" in {prototype.native_name}')


def cast_type(param: Parameter) -> str:
    if "*" not in param.type:
        raise ValueError(f'Unsupported cast type "{param.type}"')

    is_const = "const" in param.type
    for source, target in (
        ("lapack_complex_double", "lapack_complex_double"),
        ("lapack_complex_float", "lapack_complex_float"),
        ("void", "void"),
        ("double", "double"),
        ("float", "float"),
        ("lapack_int", "lapack_int"),
        ("int", "int"),
    ):
        if source in param.type:
            return f"{'const ' if is_const else ''}{target} *"

    raise ValueError(f'Unsupported cast type "{param.type}"')


def render_number_extractor(js_index: int, param: Parameter) -> str:
    if "enum " in param.type:
        enum_type = re.sub(r"^const\s+", "", param.type)
        return f"static_cast<{enum_type}>(info[{js_index}].As<Napi::Number>().Int32Value())"
    if any(token in param.type for token in ("size_t", "CBLAS_INDEX")):
        return f"static_cast<size_t>(info[{js_index}].As<Napi::Number>().Int64Value())"
    if any(token in param.type for token in ("lapack_int", "lapack_logical", "int")):
        target_type = "int" if "int" in param.type and "lapack_" not in param.type else param.type.replace("const ", "")
        return f"static_cast<{target_type}>(info[{js_index}].As<Napi::Number>().Int32Value())"
    if "float" in param.type:
        return f"static_cast<float>(info[{js_index}].As<Napi::Number>().FloatValue())"
    if "double" in param.type:
        return f"info[{js_index}].As<Napi::Number>().DoubleValue()"
    raise ValueError(f'Unsupported numeric parameter type "{param.type}"')


def render_char_extractor(js_index: int) -> str:
    return (
        f"({{ std::string value = info[{js_index}].As<Napi::String>().Utf8Value(); "
        "value.empty() ? '\\0' : value[0]; }})()"
    )


def render_param_declaration(prototype: Prototype, param: Parameter, js_index: int) -> str:
    if "*" in param.type:
        array_type = pointer_array_type(prototype, param)
        cast = cast_type(param)
        return (
            f"  auto {param.name}Array = info[{js_index}].As<{array_type}>();\n"
            f"  {cast} {param.name} = reinterpret_cast<{cast}>({param.name}Array.Data());"
        )

    if re.fullmatch(r"const\s+char|char", param.type):
        return f"  const char {param.name} = {render_char_extractor(js_index)};"

    return (
        f"  const {re.sub(r'^const\\s+', '', param.type)} {param.name} = "
        f"{render_number_extractor(js_index, param)};"
    )


def render_return_statement(prototype: Prototype, call_expression: str) -> str:
    if prototype.return_type == "void":
        return f"  {call_expression};\n  return env.Undefined();"
    if prototype.return_type in {"float", "double", "CBLAS_INDEX", "lapack_int", "lapack_logical", "int"}:
        return f"  return Napi::Number::New(env, {call_expression});"
    raise ValueError(f'Unsupported return type "{prototype.return_type}" for {prototype.native_name}')


def should_strip_param(param: Parameter, config: RenderConfig) -> bool:
    return config.strip_param_type is not None and config.strip_param_type in param.type


def render_call_arg(param: Parameter, config: RenderConfig) -> str:
    if should_strip_param(param, config):
        if config.strip_param_value is None:
            raise ValueError(f"Missing strip value for parameter type {config.strip_param_type}")
        return config.strip_param_value
    return param.name


def render_routine(prototype: Prototype, config: RenderConfig) -> str:
    js_params = [param for param in prototype.params if not should_strip_param(param, config)]
    declarations = [render_param_declaration(prototype, param, index) for index, param in enumerate(js_params)]
    call_args = [render_call_arg(param, config) for param in prototype.params]
    body_lines = declarations + [render_return_statement(prototype, f"{prototype.native_name}({', '.join(call_args)})")]

    return f"""#include <napi.h>
#include "{config.header_include}"

Napi::Value {prototype.wrapper_name}(const Napi::CallbackInfo& info) {{
  Napi::Env env = info.Env();
{chr(10).join(body_lines)}
}}
"""


def render_index_cc(routines: list[Prototype], config: RenderConfig) -> str:
    methods = [
        f'  exports.Set(Napi::String::New(env, "{routine.wrapper_name}"), '
        f"Napi::Function::New(env, {routine.wrapper_name}));"
        for routine in routines
    ]
    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

#include <napi.h>
#include "routines.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {{
{chr(10).join(methods)}
  return exports;
}}

NODE_API_MODULE({config.module_name}, Init)
"""


def render_routines_header(routines: list[Prototype]) -> str:
    declarations = [f"Napi::Value {routine.wrapper_name}(const Napi::CallbackInfo& info);" for routine in routines]
    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

#ifndef ROUTINES_H
#define ROUTINES_H

#include <napi.h>

{chr(10).join(declarations)}

#endif
"""


def render_string_list(values: list[str], indent: str = "        ") -> str:
    return ",\n".join(f"{indent}{json.dumps(value)}" for value in values)


def render_binding_gyp(
    source_files: list[str],
    module_name: str,
    include_dirs: list[str],
    blas: BlasSelection,
) -> str:
    sources = ["src/index.cc", *source_files]
    include_dirs = list(dict.fromkeys([
        "<!@(node -p \"require('node-addon-api').include\")",
        *include_dirs,
        *blas.include_dirs,
    ]))
    libraries = list(blas.libraries)
    return f"""{{
  "targets": [
    {{
      "target_name": "{module_name}",
      "sources": [
{render_string_list(sources)}
      ],
      "include_dirs": [
{render_string_list(include_dirs)}
      ],
      "dependencies": [
        "<!(node -p \\"require('node-addon-api').gyp\\")"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS"
      ],
      "cflags": [
{render_string_list(list(blas.cflags))}
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc": [
{render_string_list(list(blas.cflags))}
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ],
      "libraries": [
{render_string_list(libraries)}
      ],
    }}
  ]
}}
"""


def split_pkg_config_flags(value: str) -> list[str]:
    return shlex.split(value.strip()) if value.strip() else []


def pkg_config_exists(name: str) -> bool:
    result = subprocess.run(
        ["pkg-config", "--exists", name],
        check=False,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    return result.returncode == 0


def pkg_config_query(name: str, option: str) -> list[str]:
    result = subprocess.run(
        ["pkg-config", option, name],
        check=True,
        capture_output=True,
        text=True,
    )
    return split_pkg_config_flags(result.stdout)


def pkg_config_names_for_backend(name: str) -> list[str]:
    if name == "mkl":
        return [
            "mkl-sdl",
            "mkl-dynamic-lp64-seq",
            "mkl-dynamic-ilp64-seq",
        ]
    return [name]


def resolve_pkg_config_backend(name: str) -> BlasSelection | None:
    for pkg_name in pkg_config_names_for_backend(name):
        if not pkg_config_exists(pkg_name):
            continue

        include_dirs: list[str] = []
        cflags: list[str] = []
        for flag in pkg_config_query(pkg_name, "--cflags"):
            if flag.startswith("-I"):
                include_dirs.append(flag[2:])
            else:
                cflags.append(flag)

        return BlasSelection(
            name=name,
            libraries=tuple(pkg_config_query(pkg_name, "--libs")),
            include_dirs=tuple(include_dirs),
            cflags=tuple(cflags),
            header_path=find_cblas_header(name, include_dirs),
        )

    return None


def resolve_accelerate_backend() -> BlasSelection:
    header_path = find_cblas_header("accelerate", ())
    include_dirs = (str(Path(header_path).parent),) if header_path is not None else ()
    return BlasSelection(
        name="accelerate",
        libraries=("-framework Accelerate",),
        include_dirs=include_dirs,
        header_path=header_path,
    )


def sdk_search_roots() -> list[Path]:
    if sys.platform != "darwin":
        return []

    roots: list[Path] = []
    for command in (["xcrun", "--show-sdk-path"],):
        try:
            result = subprocess.run(command, check=True, capture_output=True, text=True)
        except (FileNotFoundError, subprocess.CalledProcessError):
            continue
        sdk_path = result.stdout.strip()
        if sdk_path:
            roots.append(Path(sdk_path))
    return roots


def candidate_header_paths(backend_name: str, include_dirs: tuple[str, ...]) -> list[Path]:
    candidates: list[Path] = []
    seen: set[Path] = set()

    def add(path: Path) -> None:
        resolved = path.expanduser()
        if resolved in seen:
            return
        seen.add(resolved)
        candidates.append(resolved)

    for include_dir in include_dirs:
        add(Path(include_dir) / "cblas.h")

    env_header = os.environ.get("NBLAS_CBLAS_HEADER")
    if env_header:
        add(Path(env_header))

    if backend_name == "accelerate":
        for sdk_root in sdk_search_roots():
            add(
                sdk_root
                / "System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/Headers/cblas.h"
            )
            add(sdk_root / "System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/cblas.h")

    for search_root in (
        Path("/opt/homebrew/include"),
        Path("/usr/local/include"),
        Path("/usr/include"),
        Path("/opt/local/include"),
    ):
        add(search_root / "cblas.h")

    add(Path(__file__).resolve().parent.parent / "lib" / "cblas.h")
    return candidates


def find_cblas_header(backend_name: str, include_dirs: tuple[str, ...]) -> str | None:
    for candidate in candidate_header_paths(backend_name, include_dirs):
        if candidate.exists():
            return str(candidate)
    return None


def resolve_header_path(args: argparse.Namespace, blas: BlasSelection) -> Path:
    if args.header:
        return Path(args.header)
    if blas.header_path:
        return Path(blas.header_path)
    raise RuntimeError(
        f"Failed to find cblas.h for backend '{blas.name}'. "
        "Set NBLAS_CBLAS_HEADER or pass --header with the path to cblas.h."
    )


def candidate_backend_names(platform: str, requested_order: str | None) -> list[str]:
    if requested_order:
        return [name.strip().lower() for name in requested_order.split(",") if name.strip()]
    if platform == "darwin":
        return ["accelerate", "openblas", "blis", "blas"]
    return ["mkl", "openblas", "blis", "blas"]


def select_blas_backend(args: argparse.Namespace) -> BlasSelection:
    requested_backend = (
        os.environ.get("NBLAS_BACKEND")
        or os.environ.get("NBLAS_BLAS_BACKEND")
        or args.blas_backend
    ).strip().lower()
    requested_order = os.environ.get("NBLAS_BLAS_ORDER") or args.blas_order
    platform = sys.platform

    candidates = [requested_backend] if requested_backend != "auto" else candidate_backend_names(platform, requested_order)

    for candidate in candidates:
        if candidate == "accelerate":
            if platform == "darwin":
                return resolve_accelerate_backend()
            continue

        backend = resolve_pkg_config_backend(candidate)
        if backend is not None:
            return backend

    if requested_backend != "auto":
        raise RuntimeError(
            f"Requested BLAS backend '{requested_backend}' was not found. "
            "Set NBLAS_BACKEND to a detected pkg-config package name or use NBLAS_BACKEND=auto."
        )

    raise RuntimeError(
        "Failed to detect a BLAS backend. "
        "Install a BLAS library with pkg-config metadata or set NBLAS_BACKEND explicitly."
    )


def render_ts_param_type(prototype: Prototype, param: Parameter) -> str:
    if "*" in param.type:
        if any(token in param.type for token in ("double", "lapack_complex_double")):
            return "Float64Array"
        if any(token in param.type for token in ("float", "lapack_complex_float")):
            return "Float32Array"
        if "void *" in param.type:
            return "Float64Array" if uses_float64_void_arrays(prototype) else "Float32Array"
        if any(token in param.type for token in ("lapack_int", "int")):
            return "Int32Array"

    if "enum CBLAS_TRANSPOSE" in param.type:
        return "111 | 112 | 113"
    if "enum CBLAS_UPLO" in param.type:
        return "121 | 122"
    if "enum CBLAS_DIAG" in param.type:
        return "131 | 132"
    if "enum CBLAS_SIDE" in param.type:
        return "141 | 142"
    if re.fullmatch(r"const\s+char|char", param.type):
        return "string"
    if any(token in param.type for token in ("int", "float", "double", "size_t", "CBLAS_INDEX", "lapack_int", "lapack_logical")):
        return "number"

    raise ValueError(f'Unsupported TS parameter type "{param.type}" in {prototype.native_name}')


def render_ts_return_type(prototype: Prototype) -> str:
    if prototype.return_type == "void":
        return "void"
    if prototype.return_type in {"float", "double", "CBLAS_INDEX", "lapack_int", "lapack_logical", "int"}:
        return "number"
    raise ValueError(f'Unsupported TS return type "{prototype.return_type}" in {prototype.native_name}')


def render_generated_native_types(routines: list[Prototype], config: RenderConfig) -> str:
    lines = []
    for routine in routines:
        params = ", ".join(
            f"{param.name}: {render_ts_param_type(routine, param)}"
            for param in routine.params
            if not should_strip_param(param, config)
        )
        lines.append(f"  {routine.wrapper_name}({params}): {render_ts_return_type(routine)};")

    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

export interface INativeBlas {{
{chr(10).join(lines)}
}}
"""


def render_generated_native_ts(routines: list[Prototype], config: RenderConfig) -> str:
    exports = [
        f"export const {routine.wrapper_name}: INativeBlas['{routine.wrapper_name}'] = nativeAddon.{routine.wrapper_name};"
        for routine in routines
    ]

    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

import {{ INativeBlas }} from '{config.native_types_path}';

function loadNativeAddon(): INativeBlas {{
  try {{
    return require('../build/Release/{config.module_name}');
  }} catch (releaseError) {{
    try {{
      return require('../build/Debug/{config.module_name}');
    }} catch {{
      const error = new Error('Failed to load the {config.module_name} native addon. Run `npm run build` first.');
      (error as Error & {{ cause?: unknown }}).cause = releaseError;
      throw error;
    }}
  }}
}}

const nativeAddon = loadNativeAddon();

export default nativeAddon;
{chr(10).join(exports)}
"""


def convenience_family(wrapper_name: str) -> str | None:
    for pattern, replacement in (
        (r"^i[sdcz]amax$", "iamax"),
        (r"^(?:[sd]|sc|dz)(asum|nrm2)$", r"\1"),
        (r"^(?:[sd])(dot|rot|rotg|rotm|rotmg|ger|sbmv|spmv|spr|spr2|symv|syr|syr2)$", r"\1"),
        (r"^(?:[sdcz])(axpy|copy|swap|scal|gbmv|gemv|tbmv|tbsv|tpmv|tpsv|trmv|trsv|gemm|symm|syrk|syr2k|trmm|trsm)$", r"\1"),
    ):
        if re.match(pattern, wrapper_name):
            return re.sub(pattern, replacement, wrapper_name)
    return None


def choose_representative_routine(routines: list[Prototype]) -> Prototype:
    priority = [r"^d", r"^s", r"^dz", r"^sc", r"^z", r"^c"]

    def rank(routine: Prototype) -> int:
        for index, pattern in enumerate(priority):
            if re.match(pattern, routine.wrapper_name):
                return index
        return len(priority)

    return sorted(routines, key=rank)[0]


def default_for_convenience(name: str, type_name: str) -> str | None:
    if name in {"alpha", "a"} and type_name == "number":
        return "1"
    if name == "beta" and type_name == "number":
        return "0"
    if name in {"k", "kl", "ku"} and type_name == "number":
        return "0"
    if type_name == "MatrixTrans":
        return "NoTrans"
    if type_name == "MatrixUpperLower":
        return "Upper"
    if type_name == "MatrixUnit":
        return "NonUnit"
    if type_name == "MatrixLeftRight":
        return "Left"
    return None


def format_convenience_params(params: list[tuple[str, str]], with_defaults: bool) -> str:
    formatted = []
    for name, type_name in params:
        default_value = default_for_convenience(name, type_name)
        if with_defaults and default_value is not None:
            formatted.append(f"{name}: {type_name} = {default_value}")
        elif not with_defaults and default_value is not None:
            formatted.append(f"{name}?: {type_name}")
        else:
            formatted.append(f"{name}: {type_name}")
    return ", ".join(formatted)


def vector_param(name: str) -> tuple[str, str]:
    return (name, "FloatArray")


def scalar_param(name: str) -> tuple[str, str]:
    return (name, "number")


def enum_param(name: str, type_name: str) -> tuple[str, str]:
    return (name, type_name)


def convenience_definition(params: list[tuple[str, str]], return_type: str, body: str) -> tuple[list[tuple[str, str]], str, str]:
    return (params, return_type, body)


def unary_vector_definition(family: str) -> tuple[list[tuple[str, str]], str, str]:
    return convenience_definition([vector_param("x")], "number", f"call<number>('{family}', x, x.length, x, 1)")


def binary_vector_definition(
    family: str, *, return_type: str = "void", with_alpha: bool = False
) -> tuple[list[tuple[str, str]], str, str]:
    params = [vector_param("x"), vector_param("y")]
    if with_alpha:
        params.append(scalar_param("a"))

    if return_type == "number":
        return convenience_definition(params, return_type, f"call<number>('{family}', x, x.length, x, 1, y, 1)")

    body = (
        f"call<void>('{family}', x, x.length, a, x, 1, y, 1)"
        if with_alpha
        else f"call<void>('{family}', x, x.length, x, 1, y, 1)"
    )
    return convenience_definition(params, return_type, body)


def build_convenience_definition(family: str, routine: Prototype) -> tuple[list[tuple[str, str]], str, str]:
    if family in {"asum", "nrm2"}:
        return unary_vector_definition(family)
    if family == "iamax":
        return convenience_definition([vector_param("x")], "number", "callIndex<number>(x, x.length, x, 1)")
    if family == "axpy":
        return binary_vector_definition(family, with_alpha=True)
    if family in {"copy", "swap"}:
        return binary_vector_definition(family)
    if family == "dot":
        return binary_vector_definition(family, return_type="number")
    if family == "scal":
        return convenience_definition([vector_param("x"), scalar_param("a")], "void", "call<void>('scal', x, x.length, a, x, 1)")
    if family == "rot":
        return convenience_definition(
            [vector_param("x"), vector_param("y"), scalar_param("c"), scalar_param("s")],
            "void",
            "call<void>('rot', x, x.length, x, 1, y, 1, c, s)",
        )
    if family == "rotg":
        return convenience_definition(
            [vector_param("a"), vector_param("b"), vector_param("c"), vector_param("s")],
            "void",
            "call<void>('rotg', a, a, b, c, s)",
        )
    if family == "rotm":
        return convenience_definition(
            [vector_param("x"), vector_param("y"), vector_param("param")],
            "void",
            "call<void>('rotm', x, x.length, x, 1, y, 1, param)",
        )
    if family == "rotmg":
        return convenience_definition(
            [vector_param("d1"), vector_param("d2"), vector_param("x1"), vector_param("y1"), vector_param("param")],
            "void",
            "call<void>('rotmg', d1, d1, d2, x1, y1, param)",
        )
    if family == "gbmv":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), scalar_param("kl"), scalar_param("ku"), scalar_param("alpha"), scalar_param("beta"), enum_param("trans", "MatrixTrans")],
            "void",
            "call<void>('gbmv', x, trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1)",
        )
    if family == "gemv":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), scalar_param("alpha"), scalar_param("beta"), enum_param("trans", "MatrixTrans")],
            "void",
            "call<void>('gemv', x, trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1)",
        )
    if family == "ger":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), scalar_param("alpha")],
            "void",
            "call<void>('ger', x, x.length, y.length, alpha, x, 1, y, 1, a, x.length)",
        )
    if family == "sbmv":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), scalar_param("k"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('sbmv', x, uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1)",
        )
    if family == "spmv":
        return convenience_definition(
            [vector_param("ap"), vector_param("x"), vector_param("y"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('spmv', x, uplo, x.length, alpha, ap, x, 1, beta, y, 1)",
        )
    if family == "spr":
        return convenience_definition(
            [vector_param("ap"), vector_param("x"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha")],
            "void",
            "call<void>('spr', x, uplo, x.length, alpha, x, 1, ap)",
        )
    if family == "spr2":
        return convenience_definition(
            [vector_param("ap"), vector_param("x"), vector_param("y"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha")],
            "void",
            "call<void>('spr2', x, uplo, x.length, alpha, x, 1, y, 1, ap)",
        )
    if family == "symv":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('symv', x, uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1)",
        )
    if family == "syr":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha")],
            "void",
            "call<void>('syr', x, uplo, x.length, alpha, x, 1, a, x.length)",
        )
    if family == "syr2":
        return convenience_definition(
            [vector_param("a"), vector_param("x"), vector_param("y"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha")],
            "void",
            "call<void>('syr2', x, uplo, x.length, alpha, x, 1, y, 1, a, x.length)",
        )
    if family in {"tbmv", "tbsv"}:
        return convenience_definition(
            [vector_param("a"), vector_param("x"), enum_param("uplo", "MatrixUpperLower"), enum_param("trans", "MatrixTrans"), enum_param("diag", "MatrixUnit")],
            "void",
            f"call<void>('{family}', x, uplo, trans, diag, x.length, 0, a, x.length, x, 1)",
        )
    if family in {"tpmv", "tpsv"}:
        return convenience_definition(
            [vector_param("ap"), vector_param("x"), enum_param("uplo", "MatrixUpperLower"), enum_param("trans", "MatrixTrans"), enum_param("diag", "MatrixUnit")],
            "void",
            f"call<void>('{family}', x, uplo, trans, diag, x.length, ap, x, 1)",
        )
    if family in {"trmv", "trsv"}:
        return convenience_definition(
            [vector_param("a"), vector_param("x"), enum_param("uplo", "MatrixUpperLower"), enum_param("trans", "MatrixTrans"), enum_param("diag", "MatrixUnit")],
            "void",
            f"call<void>('{family}', x, uplo, trans, diag, x.length, a, x.length, x, 1)",
        )
    if family == "gemm":
        return convenience_definition(
            [vector_param("a"), vector_param("b"), vector_param("c"), scalar_param("m"), scalar_param("n"), scalar_param("k"), enum_param("transa", "MatrixTrans"), enum_param("transb", "MatrixTrans"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('gemm', a, transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n)",
        )
    if family == "symm":
        return convenience_definition(
            [vector_param("a"), vector_param("b"), vector_param("c"), scalar_param("m"), scalar_param("n"), enum_param("side", "MatrixLeftRight"), enum_param("uplo", "MatrixUpperLower"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('symm', a, side, uplo, m, n, alpha, a, m, b, n, beta, c, m)",
        )
    if family == "syrk":
        return convenience_definition(
            [vector_param("a"), vector_param("c"), scalar_param("n"), scalar_param("k"), enum_param("uplo", "MatrixUpperLower"), enum_param("trans", "MatrixTrans"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('syrk', a, uplo, trans, n, k, alpha, a, n, beta, c, n)",
        )
    if family == "syr2k":
        return convenience_definition(
            [vector_param("a"), vector_param("b"), vector_param("c"), scalar_param("n"), scalar_param("k"), enum_param("uplo", "MatrixUpperLower"), enum_param("trans", "MatrixTrans"), scalar_param("alpha"), scalar_param("beta")],
            "void",
            "call<void>('syr2k', a, uplo, trans, n, k, alpha, a, n, b, n, beta, c, n)",
        )
    if family in {"trmm", "trsm"}:
        return convenience_definition(
            [vector_param("a"), vector_param("b"), scalar_param("m"), scalar_param("n"), enum_param("side", "MatrixLeftRight"), enum_param("uplo", "MatrixUpperLower"), enum_param("transa", "MatrixTrans"), enum_param("diag", "MatrixUnit"), scalar_param("alpha")],
            "void",
            f"call<void>('{family}', a, side, uplo, transa, diag, m, n, alpha, a, m, b, m)",
        )
    raise ValueError(f'No convenience generator available for family "{family}" from {routine.native_name}')


def derive_convenience_specs(routines: list[Prototype]) -> list[ConvenienceSpec]:
    by_family: dict[str, list[Prototype]] = {}
    for routine in routines:
        family = convenience_family(routine.wrapper_name)
        if family is not None:
            by_family.setdefault(family, []).append(routine)

    specs: list[ConvenienceSpec] = []
    for family in sorted(by_family):
        routine = choose_representative_routine(by_family[family])
        params, return_type, body = build_convenience_definition(family, routine)
        specs.append(
            ConvenienceSpec(
                name=family,
                type_signature=f"({format_convenience_params(params, False)}): {return_type}",
                impl_signature=f"({format_convenience_params(params, True)}): {return_type}",
                body=body,
            )
        )
    return specs


def render_generated_convenience_types(specs: list[ConvenienceSpec]) -> str:
    lines = [f"  {spec.name}{spec.type_signature};" for spec in specs]
    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

import type {{
  FloatArray,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
}} from './types';

export interface IConvenienceBlas {{
{chr(10).join(lines)}
}}
"""


def render_generated_convenience_ts(specs: list[ConvenienceSpec], config: RenderConfig) -> str:
    exports = [
        f"export const {spec.name}: IConvenienceBlas['{spec.name}'] = {spec.impl_signature} => {spec.body};"
        for spec in specs
    ]
    return f"""// This file is auto-generated by {AUTO_GENERATED_BY}.
// Do not edit it manually.

import nativeAddon from '{config.native_module_path}';
import {{ Left, NoTrans, NonUnit, Upper }} from './constants';
import type {{
  FloatArray,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
}} from './types';
import type {{ IConvenienceBlas }} from '{config.convenience_types_path}';
import {{ prefix }} from './util';

type NativeDispatch = Record<string, (...args: any[]) => any>;

const native = nativeAddon as unknown as NativeDispatch;

const call = <T>(name: string, key: FloatArray, ...args: any[]): T =>
  native[`${{prefix(key)}}${{name}}`](...args) as T;

const callIndex = <T>(key: FloatArray, ...args: any[]): T =>
  native[`i${{prefix(key)}}amax`](...args) as T;

{chr(10).join(exports)}
"""


def clear_generated_routine_sources(directory: Path) -> None:
    if not directory.exists():
        return

    for path in directory.rglob("*.cc"):
        path.unlink()

    for path in sorted(directory.rglob("*"), reverse=True):
        if path.is_dir():
            try:
                path.rmdir()
            except OSError:
                pass


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)


def posix_relpath(path: Path, start: Path) -> str:
    return Path(os.path.relpath(path, start)).as_posix()


def default_output_config(root_dir: Path) -> OutputConfig:
    return OutputConfig(
        root_dir=root_dir,
        routines_dir=root_dir / "routines",
        binding_gyp=root_dir / "binding.gyp",
        index_cc=root_dir / "src" / "index.cc",
        routines_header=root_dir / "lib" / "routines.h",
        generated_native_types=root_dir / "src" / "generated-native-types.ts",
        generated_native_ts=root_dir / "src" / "generated-native.ts",
        generated_convenience_types=root_dir / "src" / "generated-convenience-types.ts",
        generated_convenience_ts=root_dir / "src" / "generated-convenience.ts",
    )


def parse_args() -> argparse.Namespace:
    root_dir = Path(__file__).resolve().parent.parent
    defaults = default_output_config(root_dir)

    parser = argparse.ArgumentParser(description="Generate Node-API wrappers from a C header.")
    parser.add_argument("--header", default=None)
    parser.add_argument("--symbol-prefix", default="cblas_")
    parser.add_argument("--header-include", default=None)
    parser.add_argument("--module-name", default="nblas")
    parser.add_argument("--default-level", default="default")
    parser.add_argument("--level-marker", action="append", default=[])
    parser.add_argument("--strip-param-type", default="enum CBLAS_ORDER")
    parser.add_argument("--strip-param-value", default="CblasRowMajor")
    parser.add_argument("--blas-backend", default="auto")
    parser.add_argument("--blas-order", default=None)
    parser.add_argument("--emit-convenience", action="store_true", default=True)
    parser.add_argument("--no-convenience", action="store_false", dest="emit_convenience")
    parser.add_argument("--routines-dir", default=str(defaults.routines_dir))
    parser.add_argument("--binding-gyp", default=str(defaults.binding_gyp))
    parser.add_argument("--index-cc", default=str(defaults.index_cc))
    parser.add_argument("--routines-header", default=str(defaults.routines_header))
    parser.add_argument("--generated-native-types", default=str(defaults.generated_native_types))
    parser.add_argument("--generated-native-ts", default=str(defaults.generated_native_ts))
    parser.add_argument("--generated-convenience-types", default=str(defaults.generated_convenience_types))
    parser.add_argument("--generated-convenience-ts", default=str(defaults.generated_convenience_ts))
    return parser.parse_args()


def build_parse_config(args: argparse.Namespace) -> ParseConfig:
    level_markers = list(CBLAS_LEVEL_MARKERS) if args.symbol_prefix == "cblas_" and not args.level_marker else []
    for value in args.level_marker:
        marker, level = value.split("=", 1)
        level_markers.append((marker, level))
    return ParseConfig(
        symbol_prefix=args.symbol_prefix,
        level_markers=tuple(level_markers),
        default_level=args.default_level,
    )


def build_render_config(args: argparse.Namespace) -> RenderConfig:
    return RenderConfig(
        header_include=args.header_include or "cblas.h",
        module_name=args.module_name,
        strip_param_type=args.strip_param_type or None,
        strip_param_value=args.strip_param_value or None,
        emit_convenience=args.emit_convenience,
    )


def build_output_config(args: argparse.Namespace) -> OutputConfig:
    generated_convenience_types = Path(args.generated_convenience_types) if args.emit_convenience else None
    generated_convenience_ts = Path(args.generated_convenience_ts) if args.emit_convenience else None

    return OutputConfig(
        root_dir=Path(__file__).resolve().parent.parent,
        routines_dir=Path(args.routines_dir),
        binding_gyp=Path(args.binding_gyp),
        index_cc=Path(args.index_cc),
        routines_header=Path(args.routines_header),
        generated_native_types=Path(args.generated_native_types),
        generated_native_ts=Path(args.generated_native_ts),
        generated_convenience_types=generated_convenience_types,
        generated_convenience_ts=generated_convenience_ts,
    )


def main() -> None:
    args = parse_args()
    parse_config = build_parse_config(args)
    render_config = build_render_config(args)
    output_config = build_output_config(args)
    blas = select_blas_backend(args)
    header_path = resolve_header_path(args, blas)
    include_dirs = [
        header_path.parent.as_posix(),
        posix_relpath(output_config.routines_header.parent, output_config.binding_gyp.parent),
    ]
    header_include = args.header_include or header_path.name
    render_config = RenderConfig(
        header_include=header_include,
        module_name=render_config.module_name,
        strip_param_type=render_config.strip_param_type,
        strip_param_value=render_config.strip_param_value,
        native_types_path=render_config.native_types_path,
        native_module_path=render_config.native_module_path,
        convenience_types_path=render_config.convenience_types_path,
        emit_convenience=render_config.emit_convenience,
    )
    print(f"[nblas] Selected BLAS backend: {blas.name}")
    print(f"[nblas] Using cblas header: {header_path}")

    routines = parse_header(header_path.read_text(), parse_config)
    clear_generated_routine_sources(output_config.routines_dir)

    source_files: list[str] = []
    for routine in routines:
        output_dir = output_config.routines_dir / routine.level
        output_path = output_dir / f"{routine.wrapper_name}.cc"
        write_text(output_path, render_routine(routine, render_config))
        source_files.append(posix_relpath(output_path, output_config.binding_gyp.parent))

    source_files.sort()

    write_text(output_config.index_cc, render_index_cc(routines, render_config))
    write_text(output_config.routines_header, render_routines_header(routines))
    write_text(output_config.binding_gyp, render_binding_gyp(source_files, render_config.module_name, include_dirs, blas))
    write_text(output_config.generated_native_types, render_generated_native_types(routines, render_config))
    write_text(output_config.generated_native_ts, render_generated_native_ts(routines, render_config))

    if render_config.emit_convenience:
        convenience_specs = derive_convenience_specs(routines)
        if output_config.generated_convenience_types is None or output_config.generated_convenience_ts is None:
            raise ValueError("Convenience outputs must be configured when convenience generation is enabled.")
        write_text(output_config.generated_convenience_types, render_generated_convenience_types(convenience_specs))
        write_text(output_config.generated_convenience_ts, render_generated_convenience_ts(convenience_specs, render_config))


if __name__ == "__main__":
    main()
