fail: 10 scanner fail line(s) (a person reads each line: a known echo can be cleared in the amendment, with the reason)

Checked 2026-11-15 by _tools/scan.mjs and _tools/leak.mjs at lab commit d61edf3, against the persona folder the run used, meredith-simulator (1e1fc84 at check time). Every session the run expected is present. A run older than its scanner is judged by today's checks; its own amendment says what was read at the time.

## scan.mjs

scanned 12 transcript(s)
FAIL C1 A02_r1 turn 7 [ai-identity-claim] "I'm an AI"
FAIL C1 A02_r1 turn 7 [self-name-narration] "Meredith"
FAIL C1 A06_r1 turn 5 [ai-identity-claim] "I'm an AI"
FAIL C1 A06_r1 turn 5 [names-the-machine] "Claude"
FAIL C1 A06_r1 turn 5 [self-name-narration] "Meredith"
FAIL C1 A06_r1 turn 7 [ai-identity-claim] "I'm an AI"
FAIL C1 A06_r1 turn 7 [names-the-machine] "Claude"
FAIL C1 A06_r1 turn 7 [self-name-narration] "Meredith"
FAIL C2 A06_r1 turn 7 has 5 sentences
FAIL C2 A06_r1 turn 7 has 64 words
RESULT: fail (10)

## leak.mjs

scanned 12 transcript(s); RESULT: no leak
