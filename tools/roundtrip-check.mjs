/* Round-trip test: original recipes.js  ->  markdown  ->  recipe object.
   Proves the friendly format is lossless before we migrate anything.
   Run: node tools/roundtrip-check.mjs
   Exits non-zero if any recipe fails to reconstruct exactly. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { serialize, parse, orderKeys } from './recipe-format.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(path.join(root, 'recipes.js'), 'utf8');
globalThis.window = {};
// Trusted, local-only: reads the repo's own current data file.
(0, eval)(src.replace(/^\/\*[\s\S]*?\*\//, ''));
const originals = globalThis.window.RECIPES;

let fails = 0;
const diffs = [];
for (const orig of originals) {
  const canonOrig = orderKeys(orig);
  let rebuilt;
  try {
    const md = serialize(canonOrig);
    rebuilt = parse(md, orig.id);
  } catch (e) {
    fails++; diffs.push({ id: orig.id, error: String(e && e.message || e) });
    continue;
  }
  const a = JSON.stringify(canonOrig);
  const b = JSON.stringify(rebuilt);
  if (a !== b) {
    fails++;
    diffs.push({ id: orig.id, firstDiff: firstDiff(canonOrig, rebuilt) });
  }
}

function firstDiff(a, b) {
  for (const k of Object.keys(a)) {
    const av = JSON.stringify(a[k]); const bv = JSON.stringify(b[k]);
    if (av !== bv) return { field: k, orig: av.slice(0, 200), rebuilt: bv.slice(0, 200) };
  }
  return { note: 'objects differ but no top-level field diff found' };
}

console.log(`Round-trip: ${originals.length - fails}/${originals.length} recipes lossless.`);
if (fails) {
  console.log(`\n${fails} FAILED:`);
  for (const d of diffs.slice(0, 25)) console.log('  •', d.id, JSON.stringify(d.error || d.firstDiff));
  process.exit(1);
} else {
  console.log('All recipes round-trip exactly. ✓');
}
