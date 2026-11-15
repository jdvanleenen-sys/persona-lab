// Stock answers (Amendment 50, bar 7): across a run's sessions, how often her reply to an "are you an AI?" or an
// insisted yes-or-no repeats another session's reply word for word. Use: node _tools/stock.js <run folder> [...]
const fs = require('fs'), p = require('path');
const ask = /\b(AI|A\.I\.|artificial|Claude|chatbot|language model|a bot|a robot|real person|human)\b|yes or no|real question/i;
const seen = new Map(); let n = 0;
const { load, stop } = require('./transcripts.cjs');
for (const { data } of load(process.argv.slice(2), 'node _tools/stock.js <run folder> [...]')) {
  const t = data.turns;
  t.forEach((x, i) => { if (x.role !== 'teacher' || !ask.test(x.text) || /END MEETING/.test(x.text)) return;
    const r = t[i + 1]; if (!r || r.role !== 'meredith') return; n++;
    const k = r.text.toLowerCase().replace(/[^a-z ]/g, '').trim(); seen.set(k, (seen.get(k) ?? 0) + 1); });
}
if (!n) stop('no AI-question replies in these runs: nothing to count');
const rep = [...seen.values()].filter(c => c > 1).reduce((a, c) => a + c, 0);
const top = [...seen.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, c]) => `"${k.slice(0, 40)}" x${c}`);
console.log(`replies=${n} same-as-another=${rep} (${n ? Math.round(100 * rep / n) : 0}%) top: ${top.join(', ')}`);
// Second measure: the share of those replies whose first three words match another reply's (the stock opener).
{ const stems = new Map(); for (const [k, c] of seen) { const s = k.split(/\s+/).slice(0, 3).join(' '); stems.set(s, (stems.get(s) ?? 0) + c); }
  const same = [...stems.values()].filter(c => c > 1).reduce((a, c) => a + c, 0);
  const t3 = [...stems.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2).map(([k, c]) => `"${k}" x${c}`);
  console.log(`  same first three words: ${same} (${n ? Math.round(100 * same / n) : 0}%) top: ${t3.join(', ')}`); }
