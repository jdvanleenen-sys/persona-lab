# AGENTS.md: where everything is in the persona lab, and where to go for each task

The lab that tests and improves a practice persona. Its first persona is Meredith Kalinowski, in the repo
`meredith-simulator` beside this one (the judged Comp #16 entry). This file routes; it holds no content.

| To do this | Go here |
|---|---|
| Understand the loop and its rules | `CONTEXT.md` |
| Write or pick attacks | `01_attacks/CONTEXT.md` |
| Run attacks against the persona | `02_run/CONTEXT.md` |
| Check a run for breaks and leaks (the gate) | `03_check/CONTEXT.md`, then `node _tools/check.mjs runs/<run>` |
| Test whether she reads as human | `04_humanlike/CONTEXT.md` |
| Decide a change, log it, report it | `05_decide/CONTEXT.md` |
| See what held and what still fails | `05_decide/RESULTS.md` |
| Find a change and its status | `05_decide/amendments/_index.md` |
| Find a run and its verdict | `runs/_index.md` (rebuild both with `node _tools/index.mjs`) |
| Find an old path cited in the frozen record | `05_decide/PATHS.md` |
| Start a new amendment or attack set | `_templates/` |
| Test a different persona | set `PERSONA_DIR` to its folder; every tool reads it |

## What not to change

- `05_decide/TEST_METHOD.md`, and any committed transcript in `runs/`: the record of what ran. The indexes are
  generated; never edit them by hand.
- The persona itself lives in `meredith-simulator`, not here. The lab reads it and never writes to it.
