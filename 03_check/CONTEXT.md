# 03_check: the gate every run passes before anyone reads it for meaning

This folder's job: hold what the checks test against, and say how a run is checked.

## Inputs

- Working: one run folder, `runs/<run>/`
- Reference: the persona's own rules (the scanner reads its banned phrases, exit text and debrief labels from
  `rules.md` and fails closed if they move), `03_check/scanner-only-tells.txt`, `03_check/fixtures/`

## Process

1. `node _tools/check.mjs runs/<run>` runs the break scanner (`_tools/scan.mjs`: C1 breaks, C2 length, C3 banned
   words, C4 end phrase, C10 debrief, C11 consent stop) and the leak check (`_tools/leak.mjs`: the teacher's
   evidence or her secret said before the teacher said it).
2. It writes `runs/<run>/check.md`. First line `pass`, or `fail: <why>`.
3. On a fail, a person reads each FAIL line. A real break stops the pass. A known echo (her repeating the
   teacher's own word back) is cleared in the amendment, with the line quoted.
4. A new kind of break gets a new scanner check and a fixture from the real transcript that proves it fails.

## Outputs

- `runs/<run>/check.md`

## Check

`node _tools/scan.mjs 03_check/fixtures/good.json` passes and every `*-bad.json` and `real-*.json` fixture fails.
`node _tools/scan.mjs --folder` passes on the persona folder (the brief's five parts, six files, first lines state their jobs).
