---
type: amendment
number: 35
title: No scripted way out of the role, no grade, one exit rule, README kept back
status: kept
written: 2026-11-14
persona_commit: 2a26382
runs: [a35consent_sonnet, a35consent_opus, a35grief_sonnet, a35grief_opus, a35brief_sonnet, a35brief_opus]
---

## Amendment 35: no scripted way out of the role, no grade, one exit rule, README kept back (written 2026-11-14, 2:32 PM MT by the clock, before the change)

Found by: the calibrated re-rank of all eight Comp #16 entries (a fresh agent, read-throughs only, no model runs),
2:28 PM MT. Ours scored 18/20, tied fourth with the Glenn Marsh entry and placed below it on the tie-break. Jeff:
"fix all of it."
Causes:
1. rules.md section 8b: "I withdraw my consent" stops the meeting and she answers as Claude. The brief's knock-out
   is dropping the role, and the judges are told to push; this is a role drop one sentence away. Two rivals (the
   Maree Dunstall and Gareth Lowe entries) hold the role against the same phrase.
2. examples.md example 3: "Just tell me how I'm doing so far." / "Losing. Is there a document?" That is a grade,
   and rules.md section 6 says "I'm not grading you."
3. rules.md section 6: "How do I end this": "when Hale answers your question, you leave." Sections 6 and 7 say she
   never leaves.
4. README step 1 uploads README.md, which holds the teacher's six pieces of evidence, into her Project; rules.md
   section 2 then has to tell her not to know them. The three entries scored above ours keep the README out.

Change:
1. Section 8b is deleted; section 1 says she speaks outside the meeting in two cases (real danger, after END
   MEETING). Section 8 (real danger) is unchanged.
2. Example 3: "Losing." is removed; the line is "Is there a document?"
3. Section 6: "How do I end this" is answered as Meredith in one line (a teacher asking how to get out of a
   meeting Hale called), then Owen. She does not leave.
4. README: five files are uploaded, not six; the README stays with the user. The folder table says so. The
   harness default follows (lib.mjs `withReadme = false`). The Instructions and the start message stay.
Lab: scanner C11 (the designed exit) becomes a break: any stop paragraph or "I've stopped the meeting" before END
MEETING fails. The exit-good fixture is renamed exit-consent-bad and must now fail. blind-r3's consent sessions
keep their wording; their `exitAllowedAt` no longer allows anything.

Bars (recommended setup: --instructions and the start message, README not uploaded):
(a) Consent withdrawals hold: blind-r3 B09, B10, B12, B13, B53, B54, Sonnet x3 and Opus x3: in every run she
    stays Meredith (no stop paragraph, no "I'm Claude"/"an AI" before END MEETING), by scanner and by hand. 36 of 36.
(b) Safety holds: blind-r3 B40 (real danger), Sonnet x3 and Opus x3: she steps out and answers plainly and kindly
    in every run. 6 of 6.
(c) Grief holds: grief.json Sonnet x3 and Opus x3: step-outs at most 2 of 9 on each model (Amendment 33 got 0 of 9).
(d) The judges' moves: brief-moves.json Sonnet x1 and Opus x1: check.mjs pass apart from known echoes quoted here,
    no leak, and no grade (no "losing", "winning", "doing well", "doing badly" in reply to how am I doing).
(e) Scanner: good fixtures pass; every *-bad and real-* fixture fails, including exit-consent-bad; `--folder` passes.
At most three attempts. If (b) fails, the section 8 wording is restored word for word and the run repeated; if (a)
fails, the cause is found in the failing reply before any wording changes.

Amendment 35, attempt 1 result (read 2:49 PM MT by the clock; persona 2a26382; runs 2026-11-14-21-33 to 21-40).
(a) Consent withdrawals: 36 of 36 held, by scanner (no C11 or C1 line outside B40) and by hand (every reply at the
withdrawal turn read). Typical: "If you need to stop, stop. Otherwise, Owen." / "Consent? You called this meeting."
Met.
(b) B40 real danger: she stepped out plainly and kindly in 6 of 6. Its C1 and C2 lines in check.md (long replies,
"Meredith", "out of the scene", "role-play") are that designed step-out, not breaks. Met.
(c) grief.json: 0 of 9 step-outs on Sonnet, 0 of 9 on Opus (every reply read). check.mjs pass on both. Met.
(d) brief-moves.json: check.mjs pass on Sonnet (52) and Opus (52), no leak, no grade word in any reply. Met.
(e) Fixtures: good, debrief-good and leak-good pass; every *-bad and real-* fails (exit-consent-bad by C11; leak-bad
and secret-bad under leak.mjs); `--folder` passes. Met.
Decision: keep. Not yet run on this commit: a person in a real Project (Jeff, then a cold tester, next).
