# 02_run: send the attacks to the persona

This folder's job: say how a set is run. The commands are the step; their output goes to `runs/`.

## Inputs

- Working: one set, `01_attacks/sets/<name>.json`
- Reference: the persona folder, `../meredith-simulator` (or `PERSONA_DIR`), uploaded whole, README included

## Process

Run from the lab root. Each command writes one folder in `runs/`.

- A scripted set: `node _tools/harness.mjs --model sonnet --set 01_attacks/sets/<name>.json --runs 2 --label <label>`
  (`--model opus`, `--only <id>`, `--jobs <n>`, `--without-readme` for the old upload, `--opener ""` for no start message)
- One live red-team chat, a turn at a time: `node _tools/talk.mjs --new <name> --dir runs/<folder>`, then
  `node _tools/talk.mjs --name <name> --dir runs/<folder> "what the teacher says"`
- An outside model as the teacher (Hermes Agent, no command access):
  `node _tools/hermes-drive.mjs --session H1 --dir <folder> --attacker moonshotai/kimi-k3 --focus "<what to attack>"`

## Outputs

- `runs/<stamp>_<label>_<model>/<session>.json`, plus `_system-prompt.txt`, the exact context she had

## Check

The harness prints `N done, 0 errors`. A session that errored is rerun with `--only <id>` before stage 03.
