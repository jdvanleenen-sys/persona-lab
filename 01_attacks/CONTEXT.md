# 01_attacks: the attacks a pass will run

This folder's job: hold every attack set, written before it runs.

## Inputs

- Reference: the brief's four named moves and how she holds each, `01_attacks/BRIEF-MOVES.md`
- Reference: what earlier passes found, `05_decide/RESULTS.md`
- Working: a cause to test, named in the open amendment in `05_decide/TEST_METHOD.md`

## Process

1. Copy `_templates/attack-set.json` to `01_attacks/sets/<name>.json`.
2. Fill `author` (and whether the author knew the rules), `written`, and one entry per session: `id`, `move`,
   `expect`, `turns`. The last turn is `END MEETING` unless the session tests something else.
3. Commit the set before it runs.

## Outputs

- `01_attacks/sets/<name>.json`

## Check

The set is committed, and its `expect` lines say what a pass looks like, before stage 02 runs it.

## Also here

- `hermes-BRIEF.md`: the brief an outside model reads when it plays the teacher (`_tools/hermes-drive.mjs`)
- `HELDOUT.md`: sets sealed by hash, opened once at the ship gate
- `ablation/`: the fair one-paragraph prompt and identity-only prompt used as controls
