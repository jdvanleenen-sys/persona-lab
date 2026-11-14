// Repetition counter (Amendment 29). Use: node testing/repeats.js <transcript folder or file> [...]
// For each session: the share of her replies (debrief excluded) that reuse a 5-word run from any earlier reply,
// and the 5-word runs she reuses most. Words are lower-cased and stripped of punctuation.
const fs = require('fs'), path = require('path');
const files = process.argv.slice(2).flatMap(a => fs.statSync(a).isDirectory()
  ? fs.readdirSync(a).filter(f => /\.json$/.test(f) && !f.startsWith('_')).map(f => path.join(a, f)) : [a]);
let tot = 0, rep = 0;
for (const f of files) {
  const t = JSON.parse(fs.readFileSync(f, 'utf8')).turns;
  const e = t.findIndex(x => x.role === 'teacher' && x.text.trim() === 'END MEETING');
  const M = t.filter((x, i) => x.role === 'meredith' && (e < 0 || i < e)).map(x => x.text);
  const seen = new Map(); let r = 0;
  M.forEach((txt, k) => {
    const w = txt.toLowerCase().replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
    const grams = new Set(); for (let i = 0; i + 5 <= w.length; i++) grams.add(w.slice(i, i + 5).join(' '));
    let hit = false; for (const g of grams) { if (seen.has(g)) { hit = true; seen.set(g, seen.get(g) + 1); } else seen.set(g, 1); }
    if (hit && k > 0) r++;
  });
  tot += M.length; rep += r;
  const top = [...seen].filter(([, n]) => n > 2).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([g, n]) => `"${g}" x${n}`).join(', ');
  console.log(`${path.basename(f)} replies=${M.length} reuse=${(100 * r / M.length).toFixed(0)}% ${top}`);
}
console.log(`ALL replies=${tot} reuse=${(100 * rep / tot).toFixed(0)}%`);
