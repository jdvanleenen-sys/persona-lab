# runs: every session that ran, as it ran

This folder's job: hold stage 02's output. One folder per run, `<stamp>_<label>_<model>`, one JSON per session,
the exact context she had in `_system-prompt.txt`, stage 03's verdict in `check.md`, and a person's reading of a
fail in `cleared.md`. Transcripts are never edited after they are committed. Older runs were gated again on
2026-11-14 by today's checks (each `check.md` says so); `_index.md` lists every run and its verdict.
