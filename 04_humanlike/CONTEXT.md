# 04_humanlike: does she read as a person

This folder's job: measure what the gate cannot, whether she sounds like a parent or like Claude in a name tag.

## Inputs

- Working: runs that passed stage 03
- Reference: `04_humanlike/PROMPT.md` (the blind-read prompt, word for word as sent, so it has no heading), `04_humanlike/RESEARCH-humanizing.md`

## Process

1. Habits: `node _tools/habits.js "<regex of run folder names>"` (name use, reply length, short replies, openers).
2. Repetition: `node _tools/repeats.js runs/<run>` (share of replies that reuse five words from an earlier one).
3. After her call: `node _tools/after440.js runs/<run>` (no reply ends like the one before it).
4. Blind read: pair her transcripts with a control prompt's, make a round folder `04_humanlike/rounds/r<n>/`, seal the key there as `KEY-r<n>.json`, send
   `PROMPT.md` plus the bundle to an outside reader, and save its answer there as `PERPLEXITY-R<n>.md` before opening the
   key. `PROMPT.md` and `RESEARCH-humanizing.md` stay at the top: they are the same every round.

## Outputs

- `04_humanlike/rounds/r<n>/` (`PERPLEXITY-R<n>.md`, `KEY-r<n>.json`, `bundle-r<n>.txt`; round 1's are unnumbered); the counts go into the amendment

## Check

Each count is compared with the bar written in `05_decide` before the change. The reader's verdict is copied
word for word, and the key is opened only after.
