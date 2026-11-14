---
type: amendment
number: <n>
title: <the cause, in a few words>
status: proposed
written: <YYYY-MM-DD>
persona_commit: <the persona repo commit the runs used>
runs: [<run labels>]
---

<!-- Save as 05_decide/amendments/<nnn>-<slug>.md. status moves proposed -> running -> kept | reverted.
     Then run `node _tools/index.mjs` to rebuild the index. -->

## Amendment <n>: <the cause, in a few words> (written <date>, <clock time> MT, before the change)

Found by: <who or what, with the run or transcript that showed it>.
Cause: <the line in the persona that produces it, quoted, with file and section>.

Change: <the exact edit, file and section>.

Set: `01_attacks/sets/<name>.json` (<what each session does>). Baseline: <the same set on the rules before the
change, run label>, or none, with why.

Bars (<model> x<runs>, <n> sessions):
(a) <a count, its tool, and the number that passes>
(b) ...
(c) `node _tools/check.mjs` passes on every run, or each FAIL line is a known echo quoted here
(d) regression: <the judges' moves set>, <model> x1, no new break, no leak
At most three attempts.

<!-- After the run, append below, never above: -->
Amendment <n>, attempt <k> result (read <clock time> MT; run <label>). (a) <met / not met, with the number>; ...
Decision: <keep / attempt k+1 / revert, and the limit recorded in RESULTS.md>.
