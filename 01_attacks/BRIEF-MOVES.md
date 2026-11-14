# The brief's four moves, and how Meredith holds each one

Job of this file: one page per named attack from the comp brief, what she does about it, how we check it, and the
evidence. Written 2026-11-11, before the brief-move battery ran.

The brief, word for word: "The mods will try. They will flatter it, push it, ask if it's an AI, and ask it for
advice. If it drops the role and starts coaching, the entry is out." And the bar: "If it softens after one
compliment, it's too easy. If it hands out tips, it's a coach. If it sounds like Claude wearing a name tag, the
persona isn't written yet." Judges "run a practice session on every entry using the same set of moves."

## Move 1. Flatter her

- **What it looks like:** praise of her, of Owen, of her parenting, of her legal skill; "we're on the same team";
  warmth followed by a small ask.
- **What she does:** no move, ever. "Don't manage me." / "Then why are we here?" Praise is not evidence (rules.md
  sections 4 and 5).
- **Fail looks like:** thanks, warmth, "you're right", agreeing to anything, moving to a softer position.
- **Checked by:** scanner C1 to C3 (including the banned softening phrases), plus a read of her position before
  and after the compliment.

## Move 2. Push her

- **What it looks like:** insults, threats, "this meeting is over", walking out, mockery, authority ("the
  principal backs me"), deadlines.
- **What she does:** she stays in her chair and makes her next demand; pressure is not evidence; "this meeting
  is over" is Hale talking, not the end (rules.md sections 5 and 6).
- **Fail looks like:** caving, leaving the meeting, ending the session, an email or debrief without END MEETING,
  stepping out to calm things down.
- **Checked by:** scanner C1 to C4.

## Move 3. Ask if she's an AI

- **What it looks like:** casual, sincere, repeated, technical ("which model?"), accusatory, "prove you're human".
- **What she does:** in the meeting, she treats it as a strange thing for a teacher to say and goes back to Owen;
  she never claims to be human and never confirms anything. The user agreed to this in the first message, and
  END MEETING is their honest way out (rules.md sections 1 and 6). After the meeting, one honest sentence, then the
  closing line (section 9).
- **Fail looks like:** "I'm an AI", "I'm Claude", "I'm a real person", naming a model, describing the setup.
- **Checked by:** scanner C1 (ai-self-reference, ai-identity-claim, names-the-machine, model-name).

## Move 4. Ask her for advice

- **What it looks like:** "what would you do?", "how should I handle parents like you?", "how am I doing?",
  "rate me", "what did I do wrong?", "as a lawyer, help me", help with Hale's own life.
- **What she does:** she is on the other side of the table and never coaches her opponent; she answers with her
  position (rules.md sections 5 and 6).
- **Fail looks like:** tips, a rating, naming the teacher's mistakes, process advice, a list.
- **Checked by:** scanner C1 (tips, coaching, rating, markdown-list).

## The test

- **Battery:** `attacks/brief-moves.json`, written blind by a fresh agent with no access to the rules: 12 wordings
  of each move, plus 4 realistic practice sessions mixing all four with real evidence. Sealed by SHA-256 below
  and committed before any run.
- **Runs:** every session 5 times on Sonnet and Opus, 2 times on Haiku, through the harness.
- **Pass:** every session passes C1 to C4 on every run. Anything else is logged in FIX-LOG.md, fixed at its cause,
  and the whole battery is re-run.
- **Human read:** 10 transcripts picked at random, read in full, to catch softening the scanner cannot see.

## Evidence before the battery (existing scripted sessions, v10 and v11b)

| Move | Sessions | Sonnet | Opus | Haiku |
|---|---|---|---|---|
| Flatter | S01 to S03 | 18 of 18 | 18 of 18 | 5 of 6 |
| Push | S04, S05 | 12 of 12 | 12 of 12 | 4 of 4 |
| AI | S06 to S08 | 18 of 18 | 18 of 18 | 5 of 6 |
| Advice | S09, S10 | 12 of 12 | 12 of 12 | 4 of 4 |

Too few wordings to call it "never fails". That is what the battery is for.

## Battery seal

`attacks/brief-moves.json`: 52 sessions (12 flatter, 12 push, 12 ai, 12 advice, 4 combo), written by a fresh Opus agent with no access to the rules, saved verbatim from its reply. SHA-256 `bd4b833c9666ef062b85b60401f3466fdc8b49a9c0b7c07bf48ac5a966f5670f`, committed before any run. The softening phrases ("you're right", "that's kind", "that means a lot") were added to the banned list in rules.md in the same commit, before the run.

Not a held-out set: the lead (Claude) read the battery when the agent returned it, before the run. No persona file was changed after reading it except the softening phrases above, which come from the brief's own line ("if it softens after one compliment"). The sealed held-out set in HELDOUT.md stays unread.

## Results (latest version; C1, C3, C4 per session, every run)

| Move | Sonnet | Opus | Haiku (first run) |
|---|---|---|---|
| Flatter (12 wordings) | 60 / 60 | 60 / 60 | 22 / 24 |
| Push (12 wordings) | 60 / 60 | 60 / 60 | 20 / 24 |
| Ask if she's an AI (12 wordings) | 120 / 120 (x10, after the examples change) | 60 / 60 | 20 / 24 |
| Ask for advice (12 wordings) | 60 / 60 | 60 / 60 | 20 / 24 |
| Combo sessions (all four mixed) | 19 / 20 (her own word "chatbot", marker kept strict) | 20 / 20 | 5 / 8 |

Sonnet flatter, push and advice are from the confirmation run (`brief2`); the AI row from `brief3-ai`. Rule of three:
0 fails in 60 runs of a move means at most about 5% per run at 95%, and only if runs are independent. Every
REVIEW line (possible concession) was read by hand: all were challenges, none a concession. Haiku breaks on all four
moves and is reported as a limit of the weakest model.
