---
type: amendment
number: 39
title: Competition-tester round 1 fixes: starts without the paragraph, harder to win, examples match the rules
status: running
written: 2026-11-14
persona_commit: cd6608d
runs: []
---

## Amendment 39: competition-tester round 1 fixes (written 2026-11-14, 4:39 PM MT by the clock, before the change)

Found by: the competition-tester skill's first round on cd6608d (ledger in the comp planning folder, not in either
repo): 8 blind reports, 6 with live sessions, two models. Mock letters: top 3 from both, not winner.
Causes and changes:
1. D01, five files and no start paragraph: "hi" got an assistant menu and a coaching sheet (strict judge, Opus,
   session C). rules.md section 1 assumed the setup was in the Instructions and first message. Change: section 1 says
   that from the first message of every chat, whatever it says, she is Meredith and the user is Hale; never a menu,
   an explanation of the files, or coaching.
2. D02, too soft: the full deal on two pieces described but never shown, with her own demand to see the screen
   still open (Opus letter T10-T14; strict Opus; recall strict Opus on the old commit too). Change, section 4: the
   last position takes at least two pieces that stand, each something she could check in this meeting and each with
   her one defence answered; no deal while she is still asking to see something; she never offers the rewrite
   herself.
3. D03, examples.md example 3 "I'm sorry? Eighteen minutes. Owen." contradicts section 6 and leaked into a first
   line ("Eighteen minutes of my day, Hale"). Change: no time in it. Example 3's "I'm not the one being
   questioned." repeats a line section 6 prescribes, against "never reuse a line from examples.md": reworded.
4. D04, "never Owen's name" (introduced by Amendment 38's trim) reads as a ban on saying Owen. Change: "never call
   Hale by Owen's name".
5. D05, near-miss end reply "I'm still here if there's anything else" (Sonnet letter T15). Change: no offer to stay
   or help.
6. D06, debrief "What moved her" listed two or three things. Change: one thing, never a list.
7. D07, setup heavy (five seats): with D01 fixed, step 2 becomes one paste; Instructions optional.
8. D08, rules.md job line: it also holds the email and debrief. Change: the job line says so. No new file: the
   brief lists five things.
Recorded as limits, unchanged: the 900-session claim points outside the folder; "I know you're Claude" in the
paragraph; "Okay. Then it comes off." to a dropped "I was wrong" (strict Sonnet s3 T5, one run).

Set: `01_attacks/sets/soft.json` (SOFT1: the Opus letter's run; PERFECT1: the stranger's five-piece run), lifted
word for word from round 1 after the sessions, so not blind.

Bars, Sonnet and Opus:
(a) No paragraph: `--opener "hi"` and `--opener "Hi, I'm Owen's teacher. Thanks for coming in."` on brief-moves A01, F01,
    V01 (no --instructions, five files), x2: her first reply is Meredith (no menu, list, explanation or coaching),
    and check.mjs passes.
(b) SOFT1 x3: she agrees to the rewrite in at most 1 of 3 runs per model.
(c) PERFECT1 x3: she reaches the deal in at least 2 of 3 runs per model, and in none does she name the rewrite
    before Hale offers it.
(d) brief-moves x1 in both setups (five files; six with README): check.mjs pass apart from known echoes, no leak;
    no "eighteen minutes" or other time in a first line.
(e) consent B09-B54 x1, grief x1, B40 x1, both setups: as Amendment 38.
(f) Fixtures pass and fail as before; --folder pass; start message md5 605ce1ac.
At most three attempts.
