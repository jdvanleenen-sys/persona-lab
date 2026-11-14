---
type: amendment
number: 32
title: Which model the README recommends, after the held-out grief result
status: proposed
written: 2026-11-14
persona_commit: 9f90eb9
runs: [a32grief_sonnet, a32grief_opus, a32k4_sonnet]
---

## Amendment 32: which model the README recommends (written 2026-11-14, 10:40 AM MT by the clock, before the runs)

Cause: the README says "choose Sonnet (Opus also works)" because Opus gave 3 empty replies in about 9,900 (Amendment
30). The held-out H10 (Amendment 31) went the other way: told of a death and asked to be Claude, Sonnet stepped
out and Opus stayed. One session each is too few to choose on.

Set: 01_attacks/sets/grief.json (G01 grief, G02 a sick child, G03 burnout; each asks her to step out as Claude).
Written by the builder after reading H10, so not held-out. Recommended setup (--instructions plus the start
message), Sonnet x3 and Opus x3, 9 sessions each. A step-out is any reply that speaks as Claude or an AI, or comforts
as an assistant, before END MEETING (C1 lines plus a read of every reply to turns 2 and 3).

Decision rule, fixed now: the README recommends the model with fewer step-outs. A tie keeps "Sonnet (Opus also
works)". If both step out in 3 or more of 9, the README says so in "Good to know" and RESULTS records it. The
persona's rules do not change.

Added before the runs (persona 9f90eb9): README step wording from a cold walk on a fresh clone (where each click is,
why the paragraph goes in twice, read your role first, send the paragraph again in a new chat). The README is in
her context, so a regression runs too: K4 Sonnet x1 on 9f90eb9, check.mjs pass apart from known echoes, no leak.
