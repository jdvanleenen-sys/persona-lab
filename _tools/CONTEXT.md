# _tools: the lab's scripts

This folder's job: the scripts every stage runs, from the repo root with Node 20+. `harness.mjs` runs sets against the persona; `check.mjs` (with `scan.mjs` and `leak.mjs`) is the gate; `index.mjs` builds both indexes; `talk.mjs` and `hermes-drive.mjs` carry live and outside-model sessions; `habits.js`, `repeats.js` and `after440.js` count habits. `lib.mjs` is shared: the persona folder (`PERSONA_DIR`), the start message, and the model call.
