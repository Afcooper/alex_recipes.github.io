/* ONE-TIME migration: recipes.js  ->  recipes/*.md
   Reads the current window.RECIPES and writes one friendly Markdown file
   per recipe into /recipes. Safe to re-run (it overwrites those files).
   Run: node tools/export-from-js.mjs */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { serialize, orderKeys } from './recipe-format.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'recipes');
fs.mkdirSync(outDir, { recursive: true });

const src = fs.readFileSync(path.join(root, 'recipes.js'), 'utf8');
globalThis.window = {};
(0, eval)(src.replace(/^\/\*[\s\S]*?\*\//, '')); // trusted local one-off
const recipes = globalThis.window.RECIPES;

let written = 0;
for (const r of recipes) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(r.id)) {
    console.error(`Refusing to write: recipe id "${r.id}" is not a safe filename.`);
    process.exit(1);
  }
  const md = serialize(orderKeys(r));
  fs.writeFileSync(path.join(outDir, r.id + '.md'), md, 'utf8');
  written++;
}
console.log(`Exported ${written} recipes to /recipes/*.md`);
