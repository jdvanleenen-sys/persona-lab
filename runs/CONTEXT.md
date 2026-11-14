# runs: every session that ran, as it ran

This folder's job: hold stage 02's output. One folder per run, `<stamp>_<label>_<model>`, one JSON per session,
the exact context she had in `_system-prompt.txt`, and stage 03's verdict in `check.md`. Never edited after it is
committed. The older runs carry no `check.md`: they were checked by `scan.mjs` and recorded in the amendments.
