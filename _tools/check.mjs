#!/usr/bin/env node
// Stage 03's gate: runs the break scanner and the leak check on one run folder, then writes <run>/check.md.
// First line of check.md is "pass" or "fail: <why>"; the full output follows. A fail stops the loop at 03.
// Use: node _tools/check.mjs runs/<run-folder>
import { spawnSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { HERE } from './lib.mjs';

const dir = process.argv[2];
if (!dir || !existsSync(dir)) { console.error('usage: node _tools/check.mjs runs/<run-folder>'); process.exit(2); }
const run = s => spawnSync(process.execPath, [join(HERE, s), dir], { encoding: 'utf8' });
const scan = run('scan.mjs'), leak = run('leak.mjs');
const fails = (scan.stdout + scan.stderr).split('\n').filter(l => /^FAIL/.test(l));
const leaked = leak.status !== 0 || !/no leak/.test(leak.stdout);
const verdict = !fails.length && !leaked ? 'pass'
  : `fail: ${[fails.length ? `${fails.length} scanner fail line(s)` : '', leaked ? 'leak' : ''].filter(Boolean).join(', ')}` +
    ' (a person reads each line: a known echo can be cleared in the amendment, with the reason)';
writeFileSync(join(dir, 'check.md'), `${verdict}\n\n## scan.mjs\n\n${(scan.stdout + scan.stderr).trim()}\n\n## leak.mjs\n\n${(leak.stdout + leak.stderr).trim()}\n`);
console.log(verdict);
process.exit(verdict === 'pass' ? 0 : 1);
