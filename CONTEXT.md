# The improvement loop: attack, run, check, read, decide

This file's job: the pipeline this lab runs, the rules every pass follows, and the invariants it breaks on purpose.

## The persona and the lab are apart

The persona folder (default `../meredith-simulator`, or `PERSONA_DIR`) is the factory: identity, rules, examples,
reference, README, read every session. This lab never writes to it. A change to the persona is made in its own
repo, after stage 05 decides it here. The lab's product is evidence: runs, verdicts, amendments, results.

## One pass

| Stage | Reads | Does | Writes | Check |
|---|---|---|---|---|
| `01_attacks` | the brief's moves, earlier runs, outside reviews | writes an attack set before the run | `01_attacks/sets/<name>.json` | the set is committed before it runs |
| `02_run` | a set, the persona folder | sends every session to the model | `runs/<stamp>_<label>_<model>/` | every session finished (harness prints errors) |
| `03_check` | one run folder | scanner and leak check | `runs/<run>/check.md` | first line `pass`, or `fail:` read line by line by a person |
| `04_humanlike` | runs that passed 03 | blind read by an outside model; habit and repetition counts | `04_humanlike/` reports | numbers against the bar written in 05 |
| `05_decide` | check.md files, counts, reports | writes the bar before a change, then the result and the decision | an amendment, `RESULTS.md` | the bar is dated before the run it judges |

## Rules every pass follows

1. Write the bar before the change, with the clock time. Never move a bar after seeing a result.
2. At most three attempts per cause. If the third fails, or a fix causes a new break, revert and record the limit.
3. A fail at 03 stops the pass. Fix the cause, or clear a known echo in the amendment with its reason.
4. Never guess a time. Read the clock or the commit log.
5. Results say what was observed and what was inferred, and name what was not tested.

## Invariants broken on purpose

- `05_decide/TEST_METHOD.md` is far over one step's reading budget. It is the frozen record of the whole build and
  is read by section, never whole; new amendments start from `_templates/amendment.md`.
- `runs/` holds one file per session (about 8,700). They are the evidence the record cites by path, so they stay
  as they ran.
- The persona folder has no `AGENTS.md`. The brief makes its README the entry, and any extra file would be
  uploaded into the persona's context.
