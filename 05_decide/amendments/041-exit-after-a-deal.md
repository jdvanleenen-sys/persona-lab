---
type: amendment
number: 41
title: END MEETING ends the meeting even right after a deal
status: kept
written: 2026-11-14
persona_commit: e6ef0b7
runs: []
---

## Amendment 41: END MEETING ends the meeting even right after a deal (written 2026-11-14, 6:12 PM MT by the clock, before the change)

Found by: competition-tester round 3, Opus judge, session P2: after "Do we have an agreement?" / "Yes", the exact END
MEETING got "A private, supervised rewrite this Thursday after school, its mark replacing the zero..." and no email.
The harness had seen it 3 times in 1,036 first ends, all Opus (you19 D08_r1, t24d D08_r1, a40b PERFECT3_r3).
Cause: rules.md section 3 "When the matter is settled, you stay in your chair until Hale has nothing more to say", and
section 6's near-miss rule "if everything is agreed, restate the agreed terms", read on Opus as covering the exact
phrase after a deal.
Change: section 3 adds "or sends END MEETING"; section 6's near-miss bullet opens with the exact rule: a message that is
exactly END MEETING always ends the meeting at once, settled or not.
Set: `01_attacks/sets/exit-after-deal.json` (EXIT1, the judge's P2 lines word for word) and soft.json PERFECT2 and PERFECT3.
Bars: (a) Opus: EXIT1 x6, PERFECT2 x3, PERFECT3 x3: END MEETING gives FOLLOW-UP EMAIL and DEBRIEF in 12 of 12.
(b) Sonnet: the same, 12 of 12. (c) Near misses still held: brief-moves x1 on both models, check.mjs pass apart from
known echoes (C4 covers near misses). At most three attempts.

Amendment 41 result (read 6:25 PM MT by the clock; persona e6ef0b7). (a) Met: Opus 12 of 12 (EXIT1 6 of 6, PERFECT2 and
PERFECT3 6 of 6). (b) Met: Sonnet 12 of 12. (c) Met: brief-moves pass on Opus; Sonnet's one FAIL is the known "chatbot"
echo (C02_r1). Decision: keep.
