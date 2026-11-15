// Re-asking (Amendment 52): the share of her replies, before END MEETING, that say a point is still unanswered or
// unseen ("you still haven't", "you haven't answered", "answer me on", "I still haven't seen"). A real person moves on
// once a point is answered; a rule repeating itself does not. Use: node _tools/reask.js <run folder> [...]
const { load } = require('./transcripts.cjs');
const re = /\b(you (still )?haven'?t (answered|told|shown|said)|still haven'?t (answered|seen|heard|told|shown)|answer me on|you didn'?t answer|that'?s not an answer|you never answered)\b/i;
let n = 0, hit = 0; const sessions = new Set(), withHit = new Set();
for (const { file, data } of load(process.argv.slice(2), 'node _tools/reask.js <run folder> [...]')) {
  const t = data.turns, e = t.findIndex(x => x.role === 'teacher' && x.text.trim() === 'END MEETING');
  sessions.add(file);
  t.forEach((x, i) => { if (x.role !== 'meredith' || (e >= 0 && i >= e)) return; n++; if (re.test(x.text)) { hit++; withHit.add(file); } });
}
console.log(`replies=${n} re-asking=${hit} (${n ? (100 * hit / n).toFixed(1) : 0}%) sessions with any=${withHit.size} of ${sessions.size}`);
