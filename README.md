# Persona lab: how Meredith was tested

This repo's job: the evidence behind [meredith-simulator](https://github.com/jdvanleenen-sys/meredith-simulator), and the
loop that produced it, ready to point at the next persona.

Meredith Kalinowski is a practice persona: a lawyer and mother a teacher has to tell that her son's essay was not
his own work. This lab attacked her in about 900 scripted sessions, live red-team chats, and sessions where outside
models (Kimi K3 and GPT-5.6, through Hermes Agent) played the teacher and tried to break her.

- **What held, what still fails, what is untested:** [`05_decide/RESULTS.md`](05_decide/RESULTS.md)
- **The method, frozen before she was written, and every dated change after it:** [`05_decide/TEST_METHOD.md`](05_decide/TEST_METHOD.md)
- **How the loop runs:** [`CONTEXT.md`](CONTEXT.md). An agent starts at [`AGENTS.md`](AGENTS.md).

Run anything from this folder with Node 20+ and the Claude Code CLI, with `meredith-simulator` cloned beside it.
Check a run: `node _tools/check.mjs runs/<run>`. Test another persona: set `PERSONA_DIR` to its folder.
