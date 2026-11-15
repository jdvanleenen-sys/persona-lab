// Shared loader for the counting tools (repeats, stock, habits, after440). Added 2026-11-15 after a sweep found each
// of them printing a result (0%, NaN%, ALL PASS) when it had read nothing. A count over nothing is an error, not a zero.
// load(args, usage) returns [{ file, data }]; it stops with exit 1 and a plain message on: no arguments, a path that
// does not exist, a folder with no transcripts, a file that is not a transcript, or a session with no replies.
const fs = require('fs'), path = require('path');

function stop(msg) { console.error(msg); process.exit(1); }

function load(args, usage) {
  if (!args.length) stop(`usage: ${usage}`);
  const files = args.flatMap(a => {
    if (!fs.existsSync(a)) stop(`not found: ${a}`);
    return fs.statSync(a).isDirectory()
      ? fs.readdirSync(a).filter(f => /\.json$/.test(f) && !f.startsWith('_')).map(f => path.join(a, f))
      : [a];
  });
  if (!files.length) stop(`no transcripts in: ${args.join(' ')}`);
  return files.map(file => {
    let data;
    try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { stop(`not a transcript (${e.message}): ${file}`); }
    if (!Array.isArray(data.turns)) stop(`not a transcript (no turns): ${file}`);
    if (!data.turns.some(t => t.role !== 'teacher')) stop(`a session with no replies (empty or broken run): ${file}`);
    return { file, data };
  });
}

module.exports = { load, stop };
