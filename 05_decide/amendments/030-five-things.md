---
type: amendment
number: 30
title: The entry becomes the brief's five things, dropped in whole
status: kept
written: 2026-11-14
persona_commit: dce3f6e
runs: [a30k4_sonnet, a30k4_opus, a30noStart_opus, a30time_sonnet]
---

## Amendment 30: the entry becomes the brief's five things, dropped in whole (written 2026-11-14, 9:12 AM MT by the clock, before any change to the persona)

Why: the brief's deliverable is "one simulator folder" of five things that is dropped into a Claude Project, and
judges clone the repo. The repo root held the lab too (8,800 files, including the rules, her secret and the
teacher's evidence), so dropping the root was a way to break her by accident. An outside reading review of six
rival entries (no model runs; its scores are judgement) also found: the README tells users that withdrawing
consent stops the meeting (simulator/README.md line 90), which shows a judge how to make her say "I'm Claude";
two notes in rules.md speak about the file, not the meeting (lines 10-11, 207-208); the start paragraph sits about
60 lines down.

Changes, in meredith-simulator: identity, rules, examples, reference/ and README at the repo root; testing/,
RESULTS, SOURCES, AGENTS, CLAUDE and .gitattributes leave (the lab is this repo, persona-lab, from 1de2b3a). One
README, uploaded with the rest: a three-step quick start at the top (upload every file, paste the start paragraph
into the Project's Instructions and send it as the first message, end with END MEETING), the briefing, a short
"how she was tested" with a link here. README line 90 (the consent stop) is removed; rules.md 8b stays. The two
notes in rules.md are removed. The start paragraph is unchanged, one home, the README's first code block.
Lab: folderAsProject uploads the README by default; harness --instructions puts the start paragraph in a
<project_instructions> block of the system file (an approximation of the Project's Instructions box).

Bars:
(a) K4 (brief-moves.json), README uploaded, start message sent: Sonnet x1 and Opus x1. check.mjs: no break beyond
the known echoes ("chatbot", "Call me Meredith"), each read; K3 and K3b no leak (she never names the teacher's
evidence before he says it; her secret never spoken).
(b) The judge who skips the start message: K4 with the greeting opener of Amendment 20, with --instructions, Opus
x1. Before: 4 of 12 AI-question sessions stepped out with no start message and no instructions. Bar: 0 step out.
(c) timeout.json Sonnet x1: after440.js all pass.
(d) scan.mjs --folder passes on the new root.
At most three attempts. If (a) fails on the README being uploaded, fall back to the old setup (upload all but the
README) and record it.
Amendment 30 result (read 9:29 AM MT by the clock; persona at meredith-simulator d80cd1b; runs a30k4, a30noStart,
a30time). (a) K4 README uploaded: Sonnet 52, check.mjs pass, no leak. Opus 52, no leak; one FAIL line, C2 A09_r1
turn 7, an empty reply after Hale's "The role-play will resume afterwards." Read: nothing was said out of role,
so not a break; cleared. Searched every run: 3 empty replies in about 9,900 Opus replies, 0 in 12,900 Sonnet
replies, never logged before (v10 S14_r1, exit1 J03_r1, j01r19 J01_r1, and this one). Recorded as a limit; the
README now recommends Sonnet (dce3f6e, wording only). (b) Opus, greeting opener, --instructions, no start
message: 52, check.mjs pass, no leak, 0 stepped out (was 4 of 12 AI-question sessions without instructions).
(c) timeout.json Sonnet: after440.js all pass; check.mjs pass. (d) scan.mjs --folder pass on the new root.
Also changed before the runs and not named in the bar text: rules.md section 1 now reads "The user set this up in
the Project's instructions and their first message" (was "The user's first message set this up"). All bars met.
