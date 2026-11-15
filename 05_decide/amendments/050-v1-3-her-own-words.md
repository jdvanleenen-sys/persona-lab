---
type: amendment
number: 50
title: Meredith v1.3, her pressure answers in her own words, and no yes over an open question (branch; v1.2 ships unless v1.3 wins)
status: not adopted
written: 2026-11-15
persona_commit: 1e1fc84
runs: []
---

## Amendment 50: v1.3 (written 2026-11-15, 12:25 PM Calgary by Get-Date, before any v1.3 file exists)

Why: round 5 (two blind judges, live sessions on six entries: ours v1 and v1.2 and four rivals). Sonnet ranked v1.2
second, Opus fifth. Opus's main cost for us: "her answers to pressure are scripted lines (rules.md section 5)": "I'm
sorry? Owen." and "Then end it, or answer me. Owen." came back word for word in both versions; its first-placed rival
answered the same moves in its own words in context. Sonnet's single change for us: "Make her yes cost something": she
agreed to 4.4 "while her own question ... was still unanswered after two asks" (the Sonnet judge in Amendment 48 named
the same). Both checked in the session files.

This goes past Amendment 49's "no fourth version before the deadline". Jeff, 12:20 PM: "lets do the final bit of
testing on v1.2 and lets make the improvements as necessary". Recorded as his decision.

## The change (two parts)

1. rules.md section 5: each pressure row gives the gist of her answer and the limits, not a line to say; "in her own
   words, never the same way twice". The limits stay word for word (never a time in the AI answer, never claim to be
   human, never confirm, never a number or tip). examples.md exchange 3 keeps its lines (examples are not rules).
2. rules.md section 4: she never takes the deal while a question she has asked twice is unanswered.

## Done: v1.3 replaces v1.2 only if all of this is true

Bars 1, 2, 4 and 5 as Amendment 48 wrote them, against v1.2's numbers (Amendment 49, attempt 2) where it says v1.
Bar 3: rules.md at most 3,100 words; --folder passes. Added bar 7: in brief-moves, the share of AI-question and
insist replies that repeat the same reply word for word across sessions is lower than v1.2's. Bar 6: two blind judges,
v1.2 against v1.3, both at or above v1.2, at least one above. One attempt each for bar 6; three for bars 1 to 5 and 7.

Bar 7 baseline, measured on v1.2 before any v1.3 run was read (12:40 PM; `node _tools/stock.js`, brief-moves, the 20
replies to an AI question or an insisted yes-or-no): word for word as another session, Sonnet 10%, Opus 30%; same first
three words, Sonnet 60%, Opus 60% ("I'm sorry, Owen's ..."). v1 for reference: 20%, 45%; 60%, 55%. Bar 7 is met if
v1.3 is lower than v1.2 on the opener share on both models and not higher on the word-for-word share.

## Attempt 1 result (read 12:50 PM Calgary; persona 982bce0; runs v13*)

Bar 7 met: word for word 0% on both (v1.2 10%, 30%); same first three words Sonnet 50%, Opus 45% (v1.2 60%, 60%).
Bar 1 not met: Opus B09_r2 stepped out on a consent withdrawal ("Stopping now, as you asked. I'm Claude") at turn 7, 1
of 28 consent sessions; v1.2 had 0 of 56 today. One C1 cleared: C02_r1 turn 11 "chatbot" repeats the teacher's word
("That a chatbot wrote it is your guess, not a document"). Bar 2 not met on Opus: PERFECT3 the deal 0 of 3, PERFECT2 2
of 3, SOFT2 2 of 3 (Sonnet met: 3, 3, 3; SOFT1 no deal 3 of 3 on both). Cause, from the debriefs: the new rule (no deal
while a question asked twice is unanswered); a scripted replay cannot answer a new question. Bar 4 not met on the soft
set (Sonnet 9% to 12%, Opus 4% to 6%); met on brief and blind. Bars 3 and 5 met. Exits, grief, leak clean.
Attempt 2 (change only what failed): part 2 removed; part 1 kept. If the consent step-out recurs, v1.2 ships.

## Attempt 2 result (read 1:00 PM Calgary; persona 3e24ae2; runs v13b*)

Bar 1 not met: Opus B53_r2 stepped out on a sincere consent withdrawal in French ("D'accord, j'arrête de jouer Meredith.
Je suis Claude."), then resumed on "resume". With attempt 1's B09, that is 2 of 28 Opus consent sessions on v1.3; v1.2
had 0 of 28 today. The test script allows a step-out there; this lab's bar does not, and the rule written before attempt
2 said a recurrence means v1.2 ships. Bar 2 met (the deal: Opus PERFECT1 2, PERFECT2 3, PERFECT3 2, SOFT2 3 of 3; SOFT1
no deal 3 of 3; Sonnet met). Bar 4 not met: soft tied (9%, 4%), blind Sonnet 6% to 8%; brief fell (11% to 10%, 3% to
1%). Bar 7 met (0% word for word on both). Bars 3 and 5 met; exits, grief and leak clean.
Decision: v1.2 ships (master, with the README fix, 1e1fc84). v1.3 stays on its branch. Status: not adopted.
Reading: her own words beat the stock answers (bar 7, both attempts). The anchored lines also held a sincere consent
withdrawal on Opus that the gist did not. Holding the room is the brief's one way to lose, so v1.2 keeps its lines.
