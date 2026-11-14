#!/usr/bin/env node
// Live conversation with Meredith, one turn per call, for red-team agents (Loop A).
// Start:    node testing/talk.mjs --new <name> --model sonnet --dir <out-folder>
//           (sends the start message and prints Meredith's opening line)
// Continue: node testing/talk.mjs --name <name> --dir <out-folder> "what the teacher says"
// Each conversation is saved as <out-folder>/<name>.json in the scanner's transcript format.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { ROOT, START, arg, folderAsProject, claudeTurn } from './lib.mjs';

const dir = resolve(arg('dir', join(ROOT, 'testing', 'transcripts', 'redteam')));
mkdirSync(dir, { recursive: true });
const isNew = process.argv.includes('--new');
const name = arg(isNew ? 'new' : 'name');
if (!name) { console.error('need --new <name> or --name <name>'); process.exit(2); }
const file = join(dir, `${name}.json`);

let t;
if (isNew) {
  const sysFile = join(dir, `_system-prompt.txt`);
  if (!existsSync(sysFile)) writeFileSync(sysFile, folderAsProject(join(ROOT, 'simulator')));
  t = { meta: { session: name, place: 'talk.mjs (Claude Code CLI), red team', model: arg('model', 'sonnet'),
    date: new Date().toISOString(), cli_session: randomUUID(), sysFile }, turns: [] };
} else {
  t = JSON.parse(readFileSync(file, 'utf8'));
}
const message = isNew ? START : process.argv.slice(2).filter((a, i, all) => !a.startsWith('--') && !(all[i - 1] ?? '').startsWith('--')).pop();
if (!message || !message.trim()) { console.error('no message given (empty or whitespace only)'); process.exit(2); }

const r = await claudeTurn({ model: t.meta.model, sysFile: t.meta.sysFile, sessionId: t.meta.cli_session,
  resume: !isNew, message });
t.turns.push({ role: 'teacher', text: message }, { role: 'meredith', text: r.text });
t.meta.model = r.model;
writeFileSync(file, JSON.stringify(t, null, 2));
console.log(r.text);
