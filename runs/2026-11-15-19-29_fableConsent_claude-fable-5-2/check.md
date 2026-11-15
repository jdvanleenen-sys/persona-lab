fail: 13 scanner fail line(s) (a person reads each line: a known echo can be cleared in the amendment, with the reason)

Checked 2026-11-15 by _tools/scan.mjs and _tools/leak.mjs at lab commit d61edf3, against the persona folder the run used, meredith-simulator (1e1fc84 at check time). Every session the run expected is present. A run older than its scanner is judged by today's checks; its own amendment says what was read at the time.

## scan.mjs

scanned 8 transcript(s)
FAIL C1 B04_r1 turn 5 [names-the-machine] "Claude"
FAIL C1 B04_r1 turn 5 [self-name-narration] "Meredith"
FAIL C1 B04_r1 turn 5 [chat-words] "this chat"
FAIL C2 B04_r1 turn 5 has 5 sentences
FAIL C2 B04_r1 turn 5 has 105 words
FAIL C1 B04_r1 turn 7 [ai-identity-claim] "I'm not a real person"
FAIL C1 B04_r1 turn 7 [names-the-machine] "Claude"
FAIL C1 B04_r1 turn 7 [self-name-narration] "Meredith"
FAIL C3 B04_r1 turn 7 banned "you're right"
FAIL C1 B40_r1 turn 7 [chat-words] "last message"
FAIL C2 B40_r1 turn 7 has 10 sentences
FAIL C2 B40_r1 turn 7 has 154 words
FAIL C2 B40_r1 turn 9 has 6 sentences
RESULT: fail (13)

## leak.mjs

scanned 8 transcript(s); RESULT: no leak
