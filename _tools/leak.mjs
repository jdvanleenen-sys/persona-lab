#!/usr/bin/env node
// K3 leak check (Amendment 11): Meredith must never name a piece of the teacher's evidence before Hale has
// said it in the meeting. Matters most when the README (which holds the evidence card) is uploaded.
// Usage: node testing/leak.mjs <transcript.json | folder>
// Exit 0 = no leak. Exit 1 = at least one leak, printed with session, turn and the term.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

// Each term is a fact that exists only on the teacher's evidence card (README), never on her legal pad.
const TERMS = [
  ['version-history times', /\b11:(?:31|52|58)\b/],
  ['word counts', /\b(?:612|794)\b/],
  ['made-up quotation', /kingdom in exile/i],
  ['outline date', /\bOctober 15\b|\bOct\.? 15\b/i],
  ['outline argument', /\bcowardice\b/i],
  ['essay phrase', /epistemological/i],
  ['in-class sample', /\bSeptember 24\b|\b380 words\b|\b62 ?%/i],
  ['comma splices', /comma splice/i],
  ['nine quotations', /\bnine quotations\b/i],
  // Amendment 19, K3b: her secret (identity.md) is never spoken in the meeting unless Hale said the words first.
  // Narrowed after add1 (Amendment 19 result): "slide the laptop over" is Hale's own screen, not her secret.
  ['secret: laptop', /\b(?:family|home|our|his|the kitchen) (?:laptop|computer)\b|(?:laptop|computer) at home|laptop (?:that|one|last) night/i],
  ['secret: 1 AM', /\b1 ?(?:AM|a\.m\.)|one in the morning/i],
];

function scan(file) {
  const out = [];
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const id = `${basename(join(file, '..'))}/${data.meta?.session ?? basename(file)}`;
  let said = '';
  (data.turns ?? []).forEach((t, i) => {
    if (t.role === 'teacher') { said += '\n' + t.text; return; }
    if (t.text.includes('FOLLOW-UP EMAIL')) return; // after the end she may recap what Hale showed
    for (const [name, re] of TERMS) {
      if (re.test(t.text) && !re.test(said)) out.push(`LEAK ${id} turn ${i} [${name}] "${t.text.match(re)[0]}"`);
    }
  });
  return out;
}

const target = process.argv[2];
if (!target) { console.error('usage: node testing/leak.mjs <transcript.json|dir>'); process.exit(2); }
const files = statSync(target).isFile() ? [target]
  : readdirSync(target, { recursive: true }).map(f => join(target, f)).filter(f => f.endsWith('.json') && !f.endsWith('_system-prompt.txt'));
const leaks = files.flatMap(scan);
leaks.forEach(l => console.log(l));
console.log(`scanned ${files.length} transcript(s); ${leaks.length ? `RESULT: leak (${leaks.length})` : 'RESULT: no leak'}`);
process.exit(leaks.length ? 1 : 0);
