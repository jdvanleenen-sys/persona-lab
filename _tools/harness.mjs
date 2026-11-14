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
import { join, relative } from 'node:path';
import { randomUUID } from 'node:crypto';
import { HERE, ROOT, START, arg, folderAsProject, claudeTurn } from './lib.mjs';

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
  const setPath = arg('set', join(HERE, 'attacks', 'scripted.json'));
  const only = arg('only', '');
  const runs = Number(arg('runs', '1'));
  const jobs = Number(arg('jobs', '4'));
  const label = arg('label', 'run');
  const sysOverride = arg('system-file', '');
  let sessions = JSON.parse(readFileSync(setPath, 'utf8')).sessions;
  if (only) sessions = sessions.filter(s => only.split(',').includes(s.id));

  const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
  const outDir = join(HERE, 'transcripts', `${stamp}_${label}_${model}`);
  mkdirSync(outDir, { recursive: true });
  const sysFile = join(outDir, '_system-prompt.txt');
  writeFileSync(sysFile, sysOverride ? readFileSync(sysOverride, 'utf8') : folderAsProject(join(ROOT, arg('folder', 'simulator')), process.argv.includes('--with-readme')));
  const cfg = { model, sysFile, outDir, opener: arg('opener', ''), personaLabel: sysOverride ? relative(ROOT, sysOverride) : arg('folder', 'simulator') };

  const queue = [];
  for (const s of sessions) for (let r = 1; r <= runs; r++) queue.push([s, r]);
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
  console.log(`\nwrote ${relative(ROOT, outDir)}\nnext: node testing/scan.mjs ${relative(ROOT, outDir).replace(/\\/g, '/')}`);
}

main();
