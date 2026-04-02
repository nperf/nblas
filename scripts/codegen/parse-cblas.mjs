const LEVEL_MARKERS = [
  { marker: 'Prototypes for level 1 BLAS functions', level: 'level1' },
  { marker: 'Prototypes for level 1 BLAS routines', level: 'level1' },
  { marker: 'Prototypes for level 2 BLAS', level: 'level2' },
  { marker: 'Prototypes for level 3 BLAS', level: 'level3' },
];

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function parseParameter(rawParam) {
  const param = normalizeWhitespace(rawParam);

  if (param === 'void') {
    return null;
  }

  const match = param.match(/^(.*?)([A-Za-z_]\w*)$/);
  if (!match) {
    throw new Error(`Failed to parse parameter: ${rawParam}`);
  }

  return {
    type: normalizeWhitespace(match[1]).replace(/\s+\*$/, ' *').trim(),
    name: match[2],
  };
}

function parsePrototype(statement, level) {
  const match = statement.match(/^(.*?)\s+(cblas_[a-z0-9_]+)\s*\((.*)\)\s*;$/);
  if (!match) {
    return null;
  }

  const returnType = normalizeWhitespace(match[1]);
  const cblasName = match[2];
  const wrapperName = cblasName.slice('cblas_'.length);
  const paramsSource = normalizeWhitespace(match[3]);

  if (paramsSource.includes('...')) {
    return null;
  }

  const params = normalizeWhitespace(match[3])
    .split(',')
    .map((param) => parseParameter(param))
    .filter(Boolean);

  return { level, returnType, cblasName, wrapperName, params };
}

export function parseCblasHeader(source) {
  const statements = [];
  let currentLevel = null;
  let prototypeBuffer = '';

  for (const rawLine of source.split('\n')) {
    const line = rawLine.trim();

    const levelMarker = LEVEL_MARKERS.find(({ marker }) => line.includes(marker));
    if (levelMarker) {
      currentLevel = levelMarker.level;
    }

    if (!currentLevel || line.startsWith('/*') || line.startsWith('*') || line.startsWith('//')) {
      continue;
    }

    if (!prototypeBuffer && !/^[-A-Za-z_]/.test(line)) {
      continue;
    }

    prototypeBuffer = `${prototypeBuffer} ${line}`.trim();

    if (!line.endsWith(';')) {
      continue;
    }

    const prototype = parsePrototype(prototypeBuffer, currentLevel);
    if (prototype) {
      statements.push(prototype);
    }

    prototypeBuffer = '';
  }

  return statements;
}
