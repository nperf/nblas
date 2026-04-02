import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deriveConvenienceSpecs, renderGeneratedConvenienceTs, renderGeneratedConvenienceTypes } from './codegen/render-convenience.mjs';
import { parseCblasHeader } from './codegen/parse-cblas.mjs';
import {
  renderBindingGyp,
  renderGeneratedNativeTs,
  renderGeneratedNativeTypes,
  renderIndexCc,
  renderRoutine,
  renderRoutinesHeader,
} from './codegen/render-native.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const cblasHeaderPath = path.join(rootDir, 'lib', 'cblas.h');
const routinesDir = path.join(rootDir, 'routines');

async function removeGeneratedRoutineSources(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await removeGeneratedRoutineSources(fullPath);
        return;
      }

      if (entry.isFile() && entry.name.endsWith('.cc')) {
        await rm(fullPath);
      }
    })
  );
}

async function main() {
  const cblasHeader = await readFile(cblasHeaderPath, 'utf8');
  const routines = parseCblasHeader(cblasHeader);
  const convenienceSpecs = deriveConvenienceSpecs(routines);
  const sourceFiles = [];

  await removeGeneratedRoutineSources(routinesDir);

  for (const routine of routines) {
    const outputDir = path.join(routinesDir, routine.level);
    const outputPath = path.join(outputDir, `${routine.wrapperName}.cc`);
    const projectPath = path.relative(rootDir, outputPath).split(path.sep).join('/');

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, renderRoutine(routine));
    sourceFiles.push(projectPath);
  }

  sourceFiles.sort();

  await writeFile(path.join(rootDir, 'src', 'index.cc'), renderIndexCc(routines));
  await writeFile(path.join(rootDir, 'lib', 'routines.h'), renderRoutinesHeader(routines));
  await writeFile(path.join(rootDir, 'binding.gyp'), renderBindingGyp(sourceFiles));
  await writeFile(
    path.join(rootDir, 'src', 'generated-native-types.ts'),
    renderGeneratedNativeTypes(routines)
  );
  await writeFile(path.join(rootDir, 'src', 'generated-native.ts'), renderGeneratedNativeTs(routines));
  await writeFile(
    path.join(rootDir, 'src', 'generated-convenience-types.ts'),
    renderGeneratedConvenienceTypes(convenienceSpecs)
  );
  await writeFile(
    path.join(rootDir, 'src', 'generated-convenience.ts'),
    renderGeneratedConvenienceTs(convenienceSpecs)
  );
}

await main();
