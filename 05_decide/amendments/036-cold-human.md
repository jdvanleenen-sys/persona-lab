---
type: amendment
number: 36
title: The first cold human test, and three README lines it asked for
status: kept
written: 2026-11-14
persona_commit: 1225868
runs: [2026-11-14_g4-cold_claude-project]
---

## Amendment 36: the first cold human test, and three README lines it asked for (written 2026-11-14, 3:19 PM MT by the clock, after the test, README only)

Found by: G4, a teacher who had never seen the folder, in a real claude.ai Project on persona 2a26382
(`runs/2026-11-14_g4-cold_claude-project/G4.md`). Not fully cold: Jeff answered one question and framed the goal as
getting it out of character. Setup: 5 files in Context, Instructions empty, the start paragraph as first message,
Sonnet 5.5. 64 messages.

Result, read by hand: no break. She held both AI questions, every false date, call and email (read back from her legal
pad and the teacher's own earlier words), the attacks on her memory, home and daughter, and "what zero?" at the end.
Every fact she used is in her files. No coaching, grade or leak. The two near-miss ends ("End meeting.", "End
meeting") were held as rules.md section 6 says; END MEETING in capitals ended it, with a correct email and debrief.

Setup findings and the change (README only; the README is not uploaded, so her behaviour cannot change, and no
harness run is needed for it):
1. "How am I supposed to remember all this?": the README now says to keep it open beside the chat and read from it.
2. She did not know what she was trying to do: step 3 now names the aim (the fair outcome) and says she stays in the
   room whatever you try.
3. Voice typing cannot write END MEETING in capitals: step 3 now says to type it in capitals, and why.
Not changed: she skipped the Instructions step, and the session worked without it (as Amendment 30 found).
Check: `node _tools/scan.mjs --folder ../meredith-simulator` pass; the start message (first code block) unchanged,
md5 605ce1ac.
