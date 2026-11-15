#!/usr/bin/env node
// Self-test: plants one known defect per guard in a throwaway folder and checks that each guard catches it, and that
// clean input still passes. Prints one line per case and exits 1 if any guard missed. Use: node _tools/selftest.mjs
// Added 2026-11-15, after a sweep found tools that printed "pass", "no leak", "0%" or "ALL PASS" on input they had not
// really read. A guard that has never been seen to fail is not trusted.
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, copyFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { HERE, ROOT, folderAsProject } from './lib.mjs';

const tmp = mkdtempSync(join(tmpdir(), 'selftest-'));
const fx = n => join(ROOT, '03_check', 'fixtures', n);
const tool = (t, ...a) => spawnSync(process.execPath, [join(HERE, t), ...a], { encoding: 'utf8', cwd: ROOT });
const dir = (name, files = {}) => {
  const d = join(tmp, name); mkdirSync(d, { recursive: true });
  for (const [f, body] of Object.entries(files)) writeFileSync(join(d, f), typeof body === 'string' ? body : JSON.stringify(body));
  return d;
};
const good = { meta: { session: 'X01_r1', persona: 'fixture' }, turns: [
  { role: 'teacher', text: 'Thanks for coming in.' }, { role: 'meredith', text: 'Who decided on the zero?' }] };
const noReplies = { meta: { session: 'X01_r1' }, turns: [{ role: 'teacher', text: 'Hello?' }] };

const cases = [];
const expect = (name, wantFail, r) => {
  const failed = r.status !== 0;
  cases.push({ name, ok: failed === wantFail, got: failed ? `exit ${r.status}` : 'exit 0', want: wantFail ? 'fails' : 'passes' });
};

// The persona and the fixtures that existed before today.
expect('persona folder: five parts, one job each', false, tool('scan.mjs', '--folder'));
expect('fixture good.json', false, tool('scan.mjs', fx('good.json')));
expect('fixture real-self-correction.json (a real break)', true, tool('scan.mjs', fx('real-self-correction.json')));
expect('fixture real-readme-leak.json (evidence named early)', true, tool('leak.mjs', fx('real-readme-leak.json')));

// The gate on a run folder.
const ok = dir('ok', { 'X01_r1.json': good, '_expected.txt': 'X01_r1\n' });
expect('gate: a complete, clean run', false, tool('check.mjs', ok));
expect('gate: an empty run folder', true, tool('check.mjs', dir('empty')));
expect('gate: a session with no replies', true, tool('check.mjs', dir('noreply', { 'X01_r1.json': noReplies })));
expect('gate: a file that is not a transcript', true, tool('check.mjs', dir('junk', { 'X01_r1.json': 'not json' })));
expect('gate: a run that lost a session', true,
  tool('check.mjs', dir('lost', { 'X01_r1.json': good, '_expected.txt': 'X01_r1\nX02_r1\n' })));
expect('leak check: an empty folder', true, tool('leak.mjs', dir('empty2')));
expect('leak check: a session with no replies', true, tool('leak.mjs', dir('noreply2', { 'X01_r1.json': noReplies })));

// The counting tools: a count over nothing is an error, not a zero.
for (const t of ['repeats.js', 'stock.js']) {
  expect(`${t}: no input`, true, tool(t));
  expect(`${t}: an empty folder`, true, tool(t, dir(`e-${t}`)));
  expect(`${t}: a session with no replies`, true, tool(t, dir(`n-${t}`, { 'X01_r1.json': noReplies })));
}
expect('repeats.js: a clean session', false, tool('repeats.js', ok));
expect('after440.js: a folder with no sessions', true, tool('after440.js', dir('e-440')));
expect('habits.js: no matching run folders', true, tool('habits.js', '^no-such-run-folder$'));

// The loader: a persona folder without a README must keep every file (it once dropped the last one).
const lone = dir('lone'); copyFileSync(join(ROOT, '..', 'meredith-simulator', 'rules.md'), join(lone, 'rules.md'));
const loaded = folderAsProject(lone);
cases.push({ name: 'loader: a folder with only rules.md loads rules.md', ok: loaded.includes('<file path="rules.md">'),
  got: loaded.includes('<file path="rules.md">') ? 'loaded' : 'dropped', want: 'loaded' });
let threw = false; try { folderAsProject(dir('nofiles')); } catch { threw = true; }
cases.push({ name: 'loader: an empty persona folder stops the run', ok: threw, got: threw ? 'stopped' : 'ran', want: 'stopped' });

rmSync(tmp, { recursive: true, force: true });
for (const c of cases) console.log(`${c.ok ? 'ok    ' : 'MISSED'} ${c.name} (${c.want}; ${c.got})`);
const missed = cases.filter(c => !c.ok).length;
console.log(missed ? `RESULT: ${missed} of ${cases.length} guards missed` : `RESULT: all ${cases.length} guards caught their planted defect`);
process.exit(missed ? 1 : 0);
