function convenienceFamily(wrapperName) {
  const patterns = [
    [/^i[sdcz]amax$/, 'iamax'],
    [/^(?:[sd]|sc|dz)(asum|nrm2)$/, '$1'],
    [/^(?:[sd])(dot|rot|rotg|rotm|rotmg|ger|sbmv|spmv|spr|spr2|symv|syr|syr2)$/, '$1'],
    [/^(?:[sdcz])(axpy|copy|swap|scal|gbmv|gemv|tbmv|tbsv|tpmv|tpsv|trmv|trsv|gemm|symm|syrk|syr2k|trmm|trsm)$/, '$1'],
  ];

  for (const [pattern, replacement] of patterns) {
    if (pattern.test(wrapperName)) {
      return wrapperName.replace(pattern, replacement);
    }
  }

  return null;
}

function chooseRepresentativeRoutine(routines) {
  const priority = [/^d/, /^s/, /^dz/, /^sc/, /^z/, /^c/];
  return [...routines].sort((left, right) => {
    const leftIndex = priority.findIndex((pattern) => pattern.test(left.wrapperName));
    const rightIndex = priority.findIndex((pattern) => pattern.test(right.wrapperName));
    return (leftIndex === -1 ? priority.length : leftIndex) - (rightIndex === -1 ? priority.length : rightIndex);
  })[0];
}

function defaultForConvenience(name, typeName) {
  if ((name === 'alpha' || name === 'a') && typeName === 'number') {
    return '1';
  }
  if (name === 'beta' && typeName === 'number') {
    return '0';
  }
  if ((name === 'k' || name === 'kl' || name === 'ku') && typeName === 'number') {
    return '0';
  }
  if (typeName === 'MatrixTrans') {
    return 'NoTrans';
  }
  if (typeName === 'MatrixUpperLower') {
    return 'Upper';
  }
  if (typeName === 'MatrixUnit') {
    return 'NonUnit';
  }
  if (typeName === 'MatrixLeftRight') {
    return 'Left';
  }
  return null;
}

function formatConvenienceParams(params, withDefaults) {
  return params
    .map(({ name, type }) => {
      const defaultValue = defaultForConvenience(name, type);
      if (withDefaults && defaultValue !== null) {
        return `${name}: ${type} = ${defaultValue}`;
      }
      if (!withDefaults && defaultValue !== null) {
        return `${name}?: ${type}`;
      }
      return `${name}: ${type}`;
    })
    .join(', ');
}

function convenienceParam(name, type) {
  return { name, type };
}

function vectorParam(name) {
  return convenienceParam(name, 'FloatArray');
}

function scalarParam(name) {
  return convenienceParam(name, 'number');
}

function enumParam(name, type) {
  return convenienceParam(name, type);
}

function convenienceDefinition(params, returnType, body) {
  return { params, returnType, body };
}

function unaryVectorDefinition(family) {
  return convenienceDefinition([vectorParam('x')], 'number', `call<number>('${family}', x, x.length, x, 1)`);
}

function binaryVectorDefinition(family, { returnType = 'void', withAlpha = false } = {}) {
  const params = [vectorParam('x'), vectorParam('y')];
  if (withAlpha) {
    params.push(scalarParam('a'));
  }

  if (returnType === 'number') {
    return convenienceDefinition(params, returnType, `call<number>('${family}', x, x.length, x, 1, y, 1)`);
  }

  const body = withAlpha
    ? `call<void>('${family}', x, x.length, a, x, 1, y, 1)`
    : `call<void>('${family}', x, x.length, x, 1, y, 1)`;
  return convenienceDefinition(params, returnType, body);
}

function convenienceParams(...params) {
  return params;
}

function buildConvenienceDefinition(family, routine) {
  switch (family) {
    case 'asum':
    case 'nrm2':
      return unaryVectorDefinition(family);
    case 'iamax':
      return convenienceDefinition([vectorParam('x')], 'number', 'callIndex<number>(x, x.length, x, 1)');
    case 'axpy':
      return binaryVectorDefinition(family, { withAlpha: true });
    case 'copy':
    case 'swap':
      return binaryVectorDefinition(family);
    case 'dot':
      return binaryVectorDefinition(family, { returnType: 'number' });
    case 'scal':
      return convenienceDefinition(
        convenienceParams(vectorParam('x'), scalarParam('a')),
        'void',
        `call<void>('${family}', x, x.length, a, x, 1)`,
      );
    case 'rot':
      return convenienceDefinition(
        convenienceParams(vectorParam('x'), vectorParam('y'), scalarParam('c'), scalarParam('s')),
        'void',
        `call<void>('${family}', x, x.length, x, 1, y, 1, c, s)`,
      );
    case 'rotg':
      return convenienceDefinition(
        convenienceParams(vectorParam('a'), vectorParam('b'), vectorParam('c'), vectorParam('s')),
        'void',
        `call<void>('${family}', a, a, b, c, s)`,
      );
    case 'rotm':
      return convenienceDefinition(
        convenienceParams(vectorParam('x'), vectorParam('y'), vectorParam('param')),
        'void',
        `call<void>('${family}', x, x.length, x, 1, y, 1, param)`,
      );
    case 'rotmg':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('d1'),
          vectorParam('d2'),
          vectorParam('x1'),
          vectorParam('y1'),
          vectorParam('param'),
        ),
        'void',
        `call<void>('${family}', d1, d1, d2, x1, y1, param)`,
      );
    case 'gbmv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          vectorParam('y'),
          scalarParam('kl'),
          scalarParam('ku'),
          scalarParam('alpha'),
          scalarParam('beta'),
          enumParam('trans', 'MatrixTrans'),
        ),
        'void',
        `call<void>('${family}', x, trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1)`,
      );
    case 'gemv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          vectorParam('y'),
          scalarParam('alpha'),
          scalarParam('beta'),
          enumParam('trans', 'MatrixTrans'),
        ),
        'void',
        `call<void>('${family}', x, trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1)`,
      );
    case 'ger':
      return convenienceDefinition(
        convenienceParams(vectorParam('a'), vectorParam('x'), vectorParam('y'), scalarParam('alpha')),
        'void',
        `call<void>('${family}', x, x.length, y.length, alpha, x, 1, y, 1, a, x.length)`,
      );
    case 'sbmv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          vectorParam('y'),
          scalarParam('k'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1)`,
      );
    case 'spmv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('ap'),
          vectorParam('x'),
          vectorParam('y'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, ap, x, 1, beta, y, 1)`,
      );
    case 'spr':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('ap'),
          vectorParam('x'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, x, 1, ap)`,
      );
    case 'spr2':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('ap'),
          vectorParam('x'),
          vectorParam('y'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, x, 1, y, 1, ap)`,
      );
    case 'symv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          vectorParam('y'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1)`,
      );
    case 'syr':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, x, 1, a, x.length)`,
      );
    case 'syr2':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          vectorParam('y'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
        ),
        'void',
        `call<void>('${family}', x, uplo, x.length, alpha, x, 1, y, 1, a, x.length)`,
      );
    case 'tbmv':
    case 'tbsv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('trans', 'MatrixTrans'),
          enumParam('diag', 'MatrixUnit'),
        ),
        'void',
        `call<void>('${family}', x, uplo, trans, diag, x.length, 0, a, x.length, x, 1)`,
      );
    case 'tpmv':
    case 'tpsv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('ap'),
          vectorParam('x'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('trans', 'MatrixTrans'),
          enumParam('diag', 'MatrixUnit'),
        ),
        'void',
        `call<void>('${family}', x, uplo, trans, diag, x.length, ap, x, 1)`,
      );
    case 'trmv':
    case 'trsv':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('x'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('trans', 'MatrixTrans'),
          enumParam('diag', 'MatrixUnit'),
        ),
        'void',
        `call<void>('${family}', x, uplo, trans, diag, x.length, a, x.length, x, 1)`,
      );
    case 'gemm':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('b'),
          vectorParam('c'),
          scalarParam('m'),
          scalarParam('n'),
          scalarParam('k'),
          enumParam('transa', 'MatrixTrans'),
          enumParam('transb', 'MatrixTrans'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', a, transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n)`,
      );
    case 'symm':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('b'),
          vectorParam('c'),
          scalarParam('m'),
          scalarParam('n'),
          enumParam('side', 'MatrixLeftRight'),
          enumParam('uplo', 'MatrixUpperLower'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', a, side, uplo, m, n, alpha, a, m, b, n, beta, c, m)`,
      );
    case 'syrk':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('c'),
          scalarParam('n'),
          scalarParam('k'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('trans', 'MatrixTrans'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', a, uplo, trans, n, k, alpha, a, n, beta, c, n)`,
      );
    case 'syr2k':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('b'),
          vectorParam('c'),
          scalarParam('n'),
          scalarParam('k'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('trans', 'MatrixTrans'),
          scalarParam('alpha'),
          scalarParam('beta'),
        ),
        'void',
        `call<void>('${family}', a, uplo, trans, n, k, alpha, a, n, b, n, beta, c, n)`,
      );
    case 'trmm':
    case 'trsm':
      return convenienceDefinition(
        convenienceParams(
          vectorParam('a'),
          vectorParam('b'),
          scalarParam('m'),
          scalarParam('n'),
          enumParam('side', 'MatrixLeftRight'),
          enumParam('uplo', 'MatrixUpperLower'),
          enumParam('transa', 'MatrixTrans'),
          enumParam('diag', 'MatrixUnit'),
          scalarParam('alpha'),
        ),
        'void',
        `call<void>('${family}', a, side, uplo, transa, diag, m, n, alpha, a, m, b, m)`,
      );
    default:
      throw new Error(`No convenience generator available for family "${family}" from ${routine.cblasName}`);
  }
}

export function deriveConvenienceSpecs(routines) {
  const byFamily = new Map();

  for (const routine of routines) {
    const family = convenienceFamily(routine.wrapperName);
    if (!family) {
      continue;
    }

    const familyRoutines = byFamily.get(family) ?? [];
    familyRoutines.push(routine);
    byFamily.set(family, familyRoutines);
  }

  return [...byFamily.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([family, familyRoutines]) => {
      const routine = chooseRepresentativeRoutine(familyRoutines);
      const definition = buildConvenienceDefinition(family, routine);

      return {
        name: family,
        typeSignature: `(${formatConvenienceParams(definition.params, false)}): ${definition.returnType}`,
        implSignature: `(${formatConvenienceParams(definition.params, true)}): ${definition.returnType}`,
        body: definition.body,
      };
    });
}

export function renderGeneratedConvenienceTypes(specs) {
  const lines = specs.map((spec) => `  ${spec.name}${spec.typeSignature};`);

  return `// This file is auto-generated by scripts/generate-native-glue.mjs.
// Do not edit it manually.

import type {
  FloatArray,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
} from './types';

export interface IConvenienceBlas {
${lines.join('\n')}
}
`;
}

export function renderGeneratedConvenienceTs(specs) {
  const exports = specs.map(
    (spec) =>
      `export const ${spec.name}: IConvenienceBlas['${spec.name}'] = ${spec.implSignature} => ${spec.body};`
  );

  return `// This file is auto-generated by scripts/generate-native-glue.mjs.
// Do not edit it manually.

import nblas from './generated-native';
import { Left, NoTrans, NonUnit, Upper } from './constants';
import type {
  FloatArray,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
} from './types';
import type { IConvenienceBlas } from './generated-convenience-types';
import { prefix } from './util';

type NativeDispatch = Record<string, (...args: any[]) => any>;

const native = nblas as unknown as NativeDispatch;

const call = <T>(name: string, key: FloatArray, ...args: any[]): T =>
  native[\`\${prefix(key)}\${name}\`](...args) as T;

const callIndex = <T>(key: FloatArray, ...args: any[]): T =>
  native[\`i\${prefix(key)}amax\`](...args) as T;

${exports.join('\n')}
`;
}
