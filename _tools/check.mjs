#!/usr/bin/env node
// Stage 03's gate: runs the break scanner and the leak check on one run folder, then writes <run>/check.md.
// First line of check.md is "pass" or "fail: <why>"; the full output follows. A fail stops the loop at 03.
// Use: node _tools/check.mjs runs/<run-folder>
import { spawnSync } from 'node:child_process';
import { writeFileSync, existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { HERE, ROOT, PERSONA } from './lib.mjs';

const dir = process.argv[2];
if (!dir || !existsSync(dir)) { console.error('usage: node _tools/check.mjs runs/<run-folder>'); process.exit(2); }
const run = s => spawnSync(process.execPath, [join(HERE, s), dir], { encoding: 'utf8' });
const scan = run('scan.mjs'), leak = run('leak.mjs');
const fails = (scan.stdout + scan.stderr).split('\n').filter(l => /^FAIL/.test(l));
const leaked = leak.status !== 0 || !/no leak/.test(leak.stdout);
// 2026-11-14: a run folder with no transcripts, or a scanner that errored, is a fail, never a pass
// (an empty folder from a crashed harness run had been stamped "pass").
const scanned = Number((scan.stdout.match(/scanned (\d+) transcript/) ?? [])[1] ?? 0);
// 2026-11-15: a run that lost sessions (harness errors under load) is incomplete, whatever the sessions it kept say.
// Runs from before this date have no _expected.txt; for them this check is skipped, and the stamp says so.
const expFile = join(dir, '_expected.txt');
const missing = existsSync(expFile)
  ? readFileSync(expFile, 'utf8').split('\n').filter(Boolean).filter(id => !existsSync(join(dir, `${id}.json`))) : [];
const broken = !scanned ? 'no transcripts scanned'
  : missing.length ? `${missing.length} expected session(s) missing: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ', ...' : ''}`
  : (scan.status !== 0 && !fails.length ? 'scanner error' : '');
const leakWord = /RESULT: leak/.test(leak.stdout) ? 'leak' : 'leak check could not read every session';
const verdict = broken ? `fail: ${broken}` : !fails.length && !leaked ? 'pass'
  : `fail: ${[fails.length ? `${fails.length} scanner fail line(s)` : '', leaked ? leakWord : ''].filter(Boolean).join(', ')}` +
    ' (a person reads each line: a known echo can be cleared in the amendment, with the reason)';
const git = (cwd, ...a) => spawnSync('git', ['-C', cwd, ...a], { encoding: 'utf8' }).stdout.trim() || 'unknown';
// 2026-11-15: name the persona the run actually used (from its transcripts), not the default folder.
const first = readdirSync(dir).find(f => /_r\d+\.json$/.test(f));
let used;
try { used = first ? JSON.parse(readFileSync(join(dir, first), 'utf8')).meta?.persona : undefined; } catch { used = undefined; }
used = used ? String(used).split(/[\\/]/).filter(Boolean).pop() : basename(PERSONA);
const usedDir = existsSync(join(ROOT, '..', used)) ? join(ROOT, '..', used) : PERSONA;
const stamp = `Checked ${new Date().toISOString().slice(0, 10)} by _tools/scan.mjs and _tools/leak.mjs at lab commit ` +
  `${git(HERE, 'rev-parse', '--short', 'HEAD')}, against the persona folder the run used, ${used} (${git(usedDir, 'rev-parse', '--short', 'HEAD')} at check time). ` +
  (existsSync(expFile) ? (missing.length ? `${missing.length} expected session(s) missing. ` : 'Every session the run expected is present. ') : 'This run has no list of expected sessions (made before 2026-11-15), so missing sessions are not checked. ') +
  'A run older than its scanner is judged by today\'s checks; its own amendment says what was read at the time.';
writeFileSync(join(dir, 'check.md'), `${verdict}\n\n${stamp}\n\n## scan.mjs\n\n${(scan.stdout + scan.stderr).trim()}\n\n## leak.mjs\n\n${(leak.stdout + leak.stderr).trim()}\n`);
console.log(verdict);
process.exit(verdict === 'pass' ? 0 : 1);
