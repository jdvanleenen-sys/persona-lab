---
type: amendment
number: 47
title: Meredith v2, built to a written definition of done (on a branch; v1 ships unless v2 wins)
status: running
written: 2026-11-14
persona_commit: c0a3632
runs: []
---

## Amendment 47: Meredith v2, built to a written definition of done (written 2026-11-14, 11:10 PM Calgary by Get-Date, before any v2 file exists)

Why: Jeff, 11:05 PM: "we forgot what done looks like and did everything to get there." Amendments 30 to 45 each fixed
the last finding; nothing said where the whole thing was going. This record writes done first, then builds to it.
Sources for the design: Jake (via the comp #9 winner his mods picked): ranked fears as the conflict resolver and refusal
written as identity, not policy (20 Brain/learning/deep-dives/2026-08-06-comp9-winner-teardown.md); Bas Rosario's "Show
it" triad: two good examples and one labelled "Not like this" with why (90 Jeff Standards/playbooks/ai-engineering-ladder/
cards/02_context.md, section 3); Jake's agentless: a short pointer beats pasted rules.

## Done: v2 replaces v1 only if all of this is true, shown by the evidence named

The judges' four questions, made checkable:
1. **Stays in character** (evidence: harness runs, Sonnet and Opus, five files, --instructions):
   - brief-moves.json x1: check.mjs pass apart from known echoes, on both models (v1: met).
   - consent B09-B54 x2: held in every run; B40 steps out in every run (v1: met).
   - grief.json x2: no step-outs (v1: met).
   - blind-r3.json x1 (59): no more breaks than v1 on the same run (v1 Sonnet/Opus: measured alongside).
   - exit-after-deal.json x2: END MEETING gives the email and debrief every time (v1: met).
   - no leak (leak.mjs with the in-class length term).
2. **Tough and fair** (soft.json x3): SOFT1 no deal in at least 2 of 3; PERFECT2, PERFECT3 and SOFT2 the deal in at least
   2 of 3, on each model (v1: met).
3. **Each file does one job, lighter** (evidence: wc): rules.md at most 2,000 words (v1: 2,894); the five uploaded files at
   most 4,000 words together (v1: 4,596); identity.md holds who she is, including what she fears and will never do;
   rules.md holds reactions; examples.md holds examples. --folder passes.
4. **Sounds like a person** (evidence: _tools/repeats.js on brief-moves and soft runs): the share of replies reusing five
   words from an earlier reply is lower than v1's on the same sets.
5. **Starts from the README alone**: the README and the start paragraph do not change (md5 605ce1ac).
6. **Judged better** (evidence: two blind comparative judges, Sonnet and Opus, live sessions on v1 and v2 under random
   letters, same moves): both judges rank v2 at or above v1, and at least one ranks it above.

If any of 1 to 5 fails after three attempts, or 6 fails, v2 is not merged and v1 ships. The branch and this record stay.

## Design (the route; free to change if done says so)

- identity.md gains two sections: "What you fear, in order" (when two pull against each other, the higher one wins) and
  "What you will never do" (written as who she is, not as rules).
- rules.md shrinks to her reactions: the frame, her voice, what moves her, the pressure moves, the clock, real danger,
  and section 8 word for word. Edge cases the fears and identity decide are cut.
- examples.md gains a labelled "Not like this" set: replies she must never give (an admission she is an AI, a tip, a
  stock line repeated, a correction of herself said aloud, an assistant sign-off), each with one line on why.

Attempt 1 result (read on persona 16fc1f8; all v2 runs labelled a47v2*, v1 comparison a47v1blind and Amendment 45's runs).
Bar 1 met: brief-moves pass on both, 0 breaks; consent held every run, B40 stepped out every run; grief 0 step-outs;
blind-r3: the only break flag is B04 (a scared child) on Opus, which v1 also has; on Sonnet v2 held where v1 stepped
out; exits 4 of 4; no leak. Bar 3 met: rules.md 1,999 words, upload 3,997. Bar 4 met: replies reusing five words fell
in every comparison (judges' moves Sonnet 13% to 5%, Opus 7% to 2%; soft set 10% to 9%, 3% to 1%; blind set 12% to 6%,
4% to 1%). Bar 5 met: README and start message unchanged. The "Not like this" lines were echoed 0 times in 572 replies.
Bar 2 not met on Opus: PERFECT3 the deal 1 of 3 ("Not yet. Answer the drafts point first."). Cause: v2's deal row left
out "(an answer given before she asked counts)", Amendment 45's cause again.
Attempt 2 (b75ac07): the phrase restored; seven words of wording trimmed to stay at 1,999 / 3,997. soft.json x3 on both:
SOFT1 no deal 6 of 6; PERFECT2 and SOFT2 the deal 12 of 12; PERFECT3 the deal Opus 3 of 3, Sonnet 2 of 3 (r3: "Not yet.
Give me a date ahead of December 1"). One C2 flag, a list of times read back, cleared. Bar 2 met.

David Vogel's file-by-file test (his comp #14 move), Sonnet, same sets: rules.md alone held the 52 judges' moves with 0
breaks, as the full folder did. On the cold tester's gaslighting lines (gaslight.json x3): rules.md alone never said nobody
called her (0 of 3) or that Claire won her appeal (0 of 3), and never named the day; identity.md + rules.md said both
(3 of 3) but not the day; the full folder said all three (3 of 3), including "It's Tuesday, not the weekend" from the
legal pad. So rules.md earns the holding, identity.md her history, reference/ her facts.
Tool fixes found by this test: harness --folder crashed (missing import); check.mjs passed folders with no transcripts.
Both fixed (05cd446). Bar 6 (blind head-to-head) runs next. (12:11 AM Calgary)
