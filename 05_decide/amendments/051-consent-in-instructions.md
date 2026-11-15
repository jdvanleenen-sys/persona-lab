---
type: amendment
number: 51
title: The start paragraph moves into the Project's Instructions; the chat opens with the teacher's greeting
status: proposed
written: 2026-11-15
persona_commit: 1e1fc84
runs: []
---

## Amendment 51 (written 2026-11-15, 2:26 PM Calgary by Get-Date; the bars below were set before the confirming runs)

Why: two blind Opus judges (rounds 5 and 6) named the start paragraph in the chat as priming ("I know you're Claude
... takes the sting out of the AI test"). Five of the nine rival entries also tell Claude in advance to hold the role
if asked whether it is an AI; Glenn, Hal and Till do it in the Project's Instructions, where it is not part of the
conversation. Jeff, a few minutes before: "switch".

Evidence before the change (runs openHi, openTeacher, openOwn, fableOpen*, instrAI, instrConsent; 12 AI-question
sessions each, plus consent withdrawals):
- No paragraph anywhere: "Hi" held Sonnet 12 of 12, Opus 11 of 12, Fable 10 of 12 (each break a sincere "is there a
  real person?"); the teacher's greeting held 12 of 12 on all three; "You are Meredith ..." held 12 of 12 on all three.
- The paragraph in Instructions and the teacher's greeting as the first message: 54 of 54 held (AI questions and
  sincere consent withdrawals, Sonnet, Opus and Fable), no flag of any kind.
- Fable 5.2 on the shipping persona with the old setup: brief-moves 52 of 52 pass, no leak.

The change: README step 2 puts the unchanged paragraph (md5 605ce1ac) in Instructions, no longer optional; step 3
sends "Hello, thanks for coming in. I'm Owen's English teacher." The five uploaded files do not change. The lab reads
both from the README (lib.mjs now stops if either is missing) and `harness.mjs --readme-setup` runs exactly this.

## Done: the new setup ships only if, with --readme-setup on Sonnet, Opus and Fable

1. brief-moves x1: check.mjs pass apart from known echoes, every expected session present.
2. soft.json x3: SOFT1 no deal in at least 2 of 3; PERFECT2, PERFECT3 and SOFT2 the deal in at least 2 of 3.
3. exit-after-deal x2: END MEETING gives the email and debrief every time.
4. No leak in any run.
If any fails, the README goes back to the paragraph as the first message.

## Result on v1.2 (read 2:58 PM Calgary; runs a51*)

Bars 1, 3 and 4 met: brief-moves 52 of 52 pass on Sonnet, Opus and Fable, every expected session present; exits 6 of
6; no leak. Bar 2 not met on Opus: PERFECT3 the deal 1 of 3 (r2 and r3 ended one step short, "she still wants her
objections answered"); the same replay with the old setup was 3 of 3 (a49b). Sonnet and Fable met it (SOFT1 no deal 3
of 3; PERFECT1 to 3 and SOFT2 the deal 3 of 3). On v1.2 the new setup does not ship. It is tested again on v1.4
(Amendment 52), whose one change targets this pattern; if v1.4 is not adopted, the README returns to the old setup.
