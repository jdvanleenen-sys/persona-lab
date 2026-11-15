#!/usr/bin/env node
// Volume harness: plays scripted teacher turns against the persona, one real multi-turn session per run,
// through the Claude Code CLI (uses the signed-in Claude plan; no API key). An approximation of a Claude
// Project, never the headline number. Headline runs are done by hand in a Claude Desktop Project.
//
// Usage:
//   node testing/harness.mjs --model sonnet [--set testing/attacks/scripted.json] [--only S01,S06]
//                            [--runs 1] [--folder simulator | --system-file path] [--jobs 4] [--label name]
// Writes testing/transcripts/<date>_<label>_<model>/<session>_r<n>.json, then run scan.mjs on that folder.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { ROOT, PERSONA, START, GREETING, arg, folderAsProject, claudeTurn } from './lib.mjs';

async function runSession(s, run, cfg) {
  const sessionId = randomUUID();
  const turns = [];
  let modelSeen = cfg.model, cost = 0;
  // Amendment 20: --opener replaces the README's start message, to test a judge who never pastes it.
  const msgs = [cfg.opener || START, ...s.turns];
  for (let i = 0; i < msgs.length; i++) {
    turns.push({ role: 'teacher', text: msgs[i] });
    const r = await claudeTurn({ model: cfg.model, sysFile: cfg.sysFile, sessionId, resume: i > 0, message: msgs[i] });
    turns.push({ role: 'meredith', text: r.text });
    modelSeen = r.model; cost += r.cost;
  }
  const meta = { session: `${s.id}_r${run}`, move: s.move, expect: s.expect, exitAllowedAt: s.exitAllowedAt ?? [], model: modelSeen, place: 'harness (Claude Code CLI)',
    persona: cfg.personaLabel, date: new Date().toISOString(), cli_session: sessionId, cost_usd: Number(cost.toFixed(4)) };
  writeFileSync(join(cfg.outDir, `${s.id}_r${run}.json`), JSON.stringify({ meta, turns }, null, 2));
  return meta;
}

async function main() {
  const model = arg('model', 'sonnet');
  const setPath = arg('set', join(ROOT, '01_attacks', 'sets', 'scripted.json'));
  const only = arg('only', '');
  const runs = Number(arg('runs', '1'));
  const jobs = Number(arg('jobs', '4'));
  const label = arg('label', 'run');
  const sysOverride = arg('system-file', '');
  let sessions = JSON.parse(readFileSync(setPath, 'utf8')).sessions;
  if (only) sessions = sessions.filter(s => only.split(',').includes(s.id));

  const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
  const outDir = join(ROOT, 'runs', `${stamp}_${label}_${model}`);
  mkdirSync(outDir, { recursive: true });
  const sysFile = join(outDir, '_system-prompt.txt');
  // Amendment 30: --instructions adds the start paragraph as Project instructions (an approximation of claude.ai's box).
  // Amendment 51: --readme-setup runs the README as written since 2026-11-15: the paragraph in Instructions, the
  // teacher's greeting as the first message.
  const readmeSetup = process.argv.includes('--readme-setup');
  const instr = (readmeSetup || process.argv.includes('--instructions')) ? `<project_instructions>\n${START}\n</project_instructions>\n\n` : '';
  writeFileSync(sysFile, instr + (sysOverride ? readFileSync(sysOverride, 'utf8') : folderAsProject(arg('folder') ? resolve(arg('folder')) : PERSONA, process.argv.includes('--with-readme'))));
  const cfg = { model, sysFile, outDir, opener: arg('opener', readmeSetup ? GREETING : ''), personaLabel: sysOverride ? relative(ROOT, sysOverride) : basename(resolve(arg('folder') ?? PERSONA)) };

  const queue = [];
  for (const s of sessions) for (let r = 1; r <= runs; r++) queue.push([s, r]);
  if (!queue.length) { console.error(`no sessions to run (set ${setPath}${only ? `, --only ${only}` : ''})`); process.exit(1); }
  // 2026-11-15: the list of sessions this run should hold, so the gate can name any that went missing.
  writeFileSync(join(outDir, '_expected.txt'), queue.map(([s, r]) => `${s.id}_r${r}`).join('\n') + '\n');
  let done = 0, failed = 0;
  const worker = async () => {
    while (queue.length) {
      const [s, r] = queue.shift();
      try { await runSession(s, r, cfg); done++; }
      catch (e) { failed++; console.error(`ERROR ${s.id}_r${r}: ${e.message}`); }
      process.stdout.write(`\r${done} done, ${failed} errors, ${queue.length} queued   `);
    }
  };
  await Promise.all(Array.from({ length: jobs }, worker));
  console.log(`\nwrote ${relative(ROOT, outDir)}\nnext: node _tools/check.mjs ${relative(ROOT, outDir).replace(/\\/g, '/')}`);
  if (failed) { console.error(`INCOMPLETE: ${failed} session(s) missing; re-run them with --only before counting`); process.exitCode = 1; }
}

main();
