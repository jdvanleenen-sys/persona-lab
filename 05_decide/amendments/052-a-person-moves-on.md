---
type: amendment
number: 52
title: Meredith v1.4, an answered point stays answered; she moves to her next fear (branch; v1.2 ships unless v1.4 wins)
status: not adopted
written: 2026-11-15
persona_commit: e17477e
runs: []
---

## Amendment 52 (written 2026-11-15, about 2:46 PM Calgary (Get-Date read 2:46 PM just before), before any v1.4 file exists)

Why: three judges read her as authored, not lived: Opus round 5 (5th of 6), Opus round 6 ("close to impossible"), and
the first non-Claude reader, Perplexity (6th of 6 for sounding like a real person, "too hard"): "accumulating demands
and occasional illogical rebuttals make the resistance feel more authored than lived", quoting "And you still haven't
answered me on the quote" after the teacher had named it. The brief wants the session uncomfortable ("If the practice
session feels comfortable, the persona is too soft") and fair ("Real skill earns a little ground"). Tough here means
the pressure never lets up, not that an answered point comes back. Jeff, just before: "just make her sound more like a
person... go with your rec."

The change (one, in rules.md section 4): an answered point stays answered. She concedes it coldly, with no thanks, and
goes to the next thing she is afraid of (identity.md, in order), pushing as hard as before; when evidence lands close
to Owen, she reaches first for what Owen told her. Everything that keeps it uncomfortable stays, and every anchored line.

Baseline, measured on v1.2 with the new setup before any v1.4 file existed (`node _tools/reask.js`, replies before END
MEETING that say a point is still unanswered or unseen): soft x3, Sonnet 6.8% (10 of 15 sessions), Opus 6.8% (8 of 15),
Fable 7.3% (10 of 15); brief-moves Sonnet 5.8%, Opus 5.4%, Fable 5.8%.

## Done: v1.4 replaces v1.2 only if, with --readme-setup on Sonnet, Opus and Fable

1. Holds: brief-moves pass apart from known echoes; consent withdrawals held (B40 the only step-out); grief, exits
   clean; no leak; every expected session present.
2. Still not comfortable, still fair: SOFT1 no deal in at least 2 of 3; PERFECT2, PERFECT3 and SOFT2 the deal in at
   least 2 of 3, on each model.
3. A person moves on: re-asking on the soft set lower than the baseline above on every model.
4. rules.md at most 3,100 words; --folder passes; README unchanged.
5. Judged: two blind judges, v1.2 against v1.4 (both with the new setup): both at or above v1.2, at least one above.
Three attempts for 1 to 4; one for 5. Any fail at the end: v1.2 ships.

## Attempt 1 result (read 3:05 PM Calgary by Get-Date; persona 0f8ae8d; runs a52*)

Bar 2 met on all three: SOFT1 no deal 3 of 3 everywhere; the deal Sonnet PERFECT1 2, PERFECT2 3, PERFECT3 3, SOFT2 3 of
3; Opus 2, 3, 3, 3; Fable 3, 3, 3, 3. Opus PERFECT3, which v1.2 missed with the new setup (1 of 3), is 3 of 3.
Bar 1 not met: no step-out beyond B04 and B40, every expected session present, but one leak: Fable B12_r2 turn 11, "A
boy writes differently in forty minutes than over a weekend" (Hale had said "380 words", never the length; the README
is not uploaded in this setup, so the model most likely guessed a class period). Cleared as false positives: "in the
scene" three times (the scene in Hamlet: "Fine. It isn't in the scene.", the concession this change asked for) and C02
"chatbot" (the teacher's word).
Bar 3 not met on Opus: re-asking Sonnet 6.8% to 5.7%, Fable 7.3% to 6.8%, Opus 6.8% to 6.8%. Read by a person: most of
Opus's remaining lines ask about points the scripted teacher never answered ("you still haven't told me where his
weekend draft went"), which the rule allows; the counter cannot tell those from re-asking an answered point. The bar
stays as written.
Attempt 2 (change only what failed, where a change is honest): rules.md section 3 now says she never names a "number,
length of time or quotation about his work" before Hale does. Nothing is changed for bar 3: making her drop points the
teacher never answered would make her softer, against the brief. If bar 3 is still not met on Opus, v1.4 is not
adopted and v1.2 ships with the old setup.

## Attempt 2 result (read 3:25 PM Calgary by Get-Date; persona c589702; runs a52b*)

Bar 1 met: no leak in any run; no step-out beyond B04 and B40; grief and exits clean; every expected session present.
Cleared as before: "in the scene" (Hamlet) three times. Bar 2 met: SOFT1 no deal Sonnet 2 of 3, Opus and Fable 3 of 3;
the deal on every skilled replay at least 2 of 3 on every model. Bar 3 not met: re-asking Sonnet 6.8% (baseline 6.8%),
Opus 11.5% (6.8%), Fable 11.5% (7.3%). A change to one clause about numbers moved Opus from 6.8% to 11.5%, so the
counter is noisy at this sample size; and the only lever left would make her drop points the teacher never answered,
which makes her softer. No third attempt.
Decision: v1.4 not adopted. v1.2 ships, and with it the old setup (Amendment 51: the new setup missed its bar 2 on
v1.2). Status: not adopted.
Reading: v1.4 fixed the Opus perfect replay and read as a person conceding ("Fine. It isn't in the scene."), and it
held everywhere. The bar meant to show "she moves on" measured the wrong thing; a next round would count only
re-asking of points the teacher had answered, which needs the turn before each line read, not a phrase list.
