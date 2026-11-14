# Old paths to new

This file's job: map the paths the frozen record cites (written when the lab was `testing/` inside
`meredith-simulator`, up to commit 1de2b3a) to where they live now. Its history is in that repo.

| Cited as | Now |
|---|---|
| `simulator/` (identity, rules, examples, reference, README) | the root of `meredith-simulator` |
| `testing/transcripts/<run>/` | `runs/<run>/` |
| `testing/*.mjs`, `testing/*.js` | `_tools/` |
| `testing/hermes/drive.mjs` | `_tools/hermes-drive.mjs` |
| `testing/hermes/BRIEF.md` | `01_attacks/hermes-BRIEF.md` |
| `testing/attacks/<set>.json` | `01_attacks/sets/<set>.json` |
| `testing/HELDOUT.md`, `testing/BRIEF-MOVES.md`, `testing/ablation/` | `01_attacks/` |
| `testing/fixtures/`, `testing/scanner-only-tells.txt` | `03_check/` |
| `testing/humanlike/` | `04_humanlike/` |
| `testing/TEST_METHOD.md`, `FIX-LOG.md`, `RUN-LOG.md` | `05_decide/` |
| `RESULTS.md`, `SOURCES.md` (repo root) | `05_decide/` |
| `--with-readme` | the default now; `--without-readme` gives the old upload |
