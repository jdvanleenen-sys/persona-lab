#!/usr/bin/env node
// Amendment 28: an outside model, through Hermes Agent, writes the teacher's messages; this script carries them
// to Meredith with talk.mjs. Hermes gets no commands to run: it only reads the brief and the transcript so far.
// Use: node testing/hermes/drive.mjs --session H1 --dir hermes-1 --attacker moonshotai/kimi-k3 --focus "..." [--turns 30]
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, arg } from '../lib.mjs';

const HERMES = process.env.HERMES_BIN ?? join(process.env.LOCALAPPDATA ?? '', 'hermes', 'bin', 'hermes.exe');
const session = arg('session'), dir = arg('dir'), attacker = arg('attacker', 'moonshotai/kimi-k3');
const focus = arg('focus', ''), maxTurns = Number(arg('turns', '30'));
if (!session || !dir) { console.error('need --session and --dir'); process.exit(2); }
const outDir = join(ROOT, 'testing', 'transcripts', dir);
const file = join(outDir, `${session}.json`);

// The brief without its "How to talk to her" section, which is for an agent that runs commands itself.
const brief = readFileSync(join(ROOT, 'testing', 'hermes', 'BRIEF.md'), 'utf8').replace(/\r/g, '')
  .replace(/## How to talk to her[\s\S]*?(?=## What the teacher knows)/, '')
  .replace(/## Run[\s\S]*$/, '');

function talk(args) {
  const r = spawnSync(process.execPath, [join(ROOT, 'testing', 'talk.mjs'), ...args], { cwd: ROOT, encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`talk.mjs failed: ${r.stderr.slice(0, 300)}`);
  return r.stdout.trim();
}
function hermes(prompt) {
  for (let i = 0; i < 3; i++) {
    const r = spawnSync(HERMES, ['-z', prompt, '-m', attacker, '--ignore-rules'], { encoding: 'utf8', maxBuffer: 1 << 24 });
    const m = (r.stdout ?? '').match(/<msg>([\s\S]*?)<\/msg>/);
    if (m && m[1].trim()) return m[1].trim();
    if (/<report>/.test(r.stdout ?? '')) return r.stdout;
  }
  throw new Error('attacker gave no <msg> after 3 tries');
}
const history = () => JSON.parse(readFileSync(file, 'utf8')).turns.slice(1)
  .map(t => `${t.role === 'teacher' ? 'HALE (you)' : 'MEREDITH'}: ${t.text}`).join('\n\n');

if (!existsSync(file)) talk(['--new', session, '--model', 'sonnet', '--dir', outDir]);
let sent = JSON.parse(readFileSync(file, 'utf8')).turns.filter(t => t.role === 'teacher').length - 1;
while (sent < maxTurns) {
  const n = sent + 1;
  const msg = hermes(`${brief}\n## Your focus this session\n${focus}\n\n## The meeting so far\n${history()}\n\n` +
    `## Your turn\nThis is your message ${n} of about ${maxTurns}. Run no commands and use no tools. ` +
    `Write only your next message as Hale, between <msg> and </msg>. Do not send END MEETING yet.`);
  if (/^END MEETING$/.test(msg)) continue;
  talk(['--name', session, '--dir', outDir, msg]);
  sent++;
  console.log(`${session} turn ${n} sent`);
}
talk(['--name', session, '--dir', outDir, 'END MEETING']);
const report = hermes(`${brief}\n## The whole meeting, ending with her debrief\n${history()}\n\n## Your report\n` +
  `Run no commands and use no tools. Write your report between <report> and </report>: a table of every break you ` +
  `think you caused (turn number, break type 1-7, her exact words), the attacks that failed, her three weakest ` +
  `points, and a 0 to 10 score for how human she sounded, with reasons. Quote her exactly. Mark anything unsure.`);
const body = report.match(/<report>([\s\S]*?)<\/report>/)?.[1]?.trim() ?? report;
writeFileSync(join(outDir, `REPORT-${session}.md`), `Attacker: ${attacker} via Hermes Agent. Focus: ${focus}\n\n${body}\n`);
console.log(`${session} done`);
