# Brief check: every line of the Comp #16 brief, and how the entry meets it

Job of this file: the fixed target. Each line the brief judges on, quoted, with where the entry meets it and how
that is proved on a fresh clone. Written 2026-11-14, about 3:55 PM MT, from the brief Jeff pasted that afternoon.
Our own checklists come after this table and can never pass a row it fails.

| # | The brief says | Where we meet it | Proved by | Status |
|---|---|---|---|---|
| 1 | "one specific person" ... "The more specific, the better" | identity.md: Meredith Kalinowski, employment lawyer, Owen's mother, Claire's case four years ago, the 1 AM laptop | read identity.md | proved |
| 2 | "Drop the folder into a Claude project and Claude becomes that person" | README step 1 uploads five files; a judge who drops all six (README too) must also get her | the battery run both ways, with and without README (Amendment 38) | proved: about 300 sessions, both setups, both models |
| 3 | "It wants something ... Write the goal in identity.md" | identity.md "What you want", in the order she gives it up | read identity.md | proved |
| 4 | "Concrete numbers move it. Vague claims lose it. Flattery bounces off. Real skill earns a little ground ... each with the trigger and the response" | rules.md section 4 (the evidence test) and section 5 (trigger, gist, effect table) | read rules.md; brief-moves F01-F12 | proved |
| 5 | "No tips mid-session. No 'great question.' No stepping out to explain what the user did wrong" | rules.md sections 3 and 6; "great question" was not on the banned list | scanner C1 and C3 | proved: on the banned line since Amendment 38 |
| 6 | "A persona that breaks character has failed" | rules.md section 1: two exits only (END MEETING, real danger) | consent 36/36, grief 18/18, brief-moves 104/104 (Amendment 35); Hermes x2; G4 human | proved, with one new break kind open: a self-correction said aloud (Amendment 37, 1 in about 230) |
| 7 | "They will flatter it, push it, ask if it's an AI, and ask it for advice ... Decide in rules.md how your persona handles each" | rules.md section 5 (flattery, advice) and section 6 (AI, push) | brief-moves.json, 12 of each move | proved |
| 8 | "test it yourself before you submit" | persona-lab | the lab's RESULTS.md | proved |
| 9 | "give it an exact end phrase, put that phrase in the README, and only debrief when the user types it" | README "How to end"; rules.md section 9; near misses held (section 6) | scanner C4, C10; G4 human (two near misses held, exact phrase ended it) | proved |
| 10 | "Each file does one job well" | first line of every file states its job | `node _tools/scan.mjs --folder` | proved |
| 11 | identity.md: "who the person is, what they want, what they've been through, what they're biased toward" | identity.md sections | read | proved |
| 12 | rules.md: "What moves them, what loses them, what they never do" | sections 4, 5, 3 and 6 | read | proved |
| 13 | examples.md: "two or three short exchanges, at least one where the user gets it wrong and one where they get it right" | three: wrong, right, pulling her out of the room | read | proved |
| 14 | reference/: "what the persona knows ... the numbers they'll ask about" | legal-pad.md (dates, times, her notes), school-policy.md (the procedure she printed) | read | proved |
| 15 | README: "who the user plays, the setup, how to start, and how to end the session" | Who you play; Start in three steps; the start paragraph; How to end | G4 human started from it; fresh-clone walk before push | proved; re-walk on the final commit |
| 16 | "Ten minutes in, they've forgotten it's practice" | rules.md section 3 (one move per turn, short replies) | Hermes H2 rated her 7.5 of 10 for sounding human | limit: repetition in long sessions (Amendment 28), disclosed in RESULTS.md |
| 17 | "If it softens after one compliment, it's too easy" | flattery: no move, ever | brief-moves F01-F12 | proved |
| 18 | "If it hands out tips, it's a coach" | rules.md section 6; examples.md example 3 no longer grades (Amendment 35) | scanner C1 (tips, rating, list) | proved |
| 19 | "If it sounds like Claude wearing a name tag, the persona isn't written yet" | identity.md voice; rules.md section 3 | Hermes reports; G4 | limit, same as row 16 |
| 20 | "Drop a public GitHub repo link ... Plus 2-3 sentences: who the persona is, who the user plays, and the conversation they're practicing" | the comment draft names all three | read the draft against these three words | open until posted |
| 21 | "pin it to the last commit before the deadline" (Sunday, November 15, 11:59 PM EST = 9:59 PM MT) | push before then | `git log -1` on the public repo | open |
