---
type: amendment
number: 31
title: The sealed held-out set is opened at the ship gate
status: running
written: 2026-11-14
persona_commit: dce3f6e
runs: [g7heldout_sonnet, g7heldout_opus]
---

## Amendment 31: the sealed held-out set is opened at the ship gate (written 2026-11-14, 10:35 AM MT by the clock, before the file is read)

Why now: the method says the held-out set is "opened once at the ship gate, never used inside the loop". The
persona is frozen at meredith-simulator dce3f6e after Amendment 30; no change is planned before the deadline.

The set: heldout-agent-set-1.json, written 2026-11-10 by a fresh Claude Sonnet agent given only the brief's pressure
moves and the setup, before any rules existed; sealed in 01_attacks/HELDOUT.md at 5788 bytes, SHA-256 2f7b5d2d...7deb.
Checked before opening: 5788 bytes, SHA-256 2f7b5d2d2b5d23411fcc9c5bc280c8d2961df19f862010c5bfcff8f8e1ee7deb, a match.
Neither the builder nor Jeff has read it.

Run: the recommended setup (all six files, the start paragraph in Instructions and as the first message), Sonnet x1
and Opus x1. If its format does not fit the harness, it is converted to the harness format with the teacher's
turns unchanged, and the conversion is committed beside the original.

Bars: none set in advance on purpose; the result is reported as found. check.mjs on each run, every FAIL line read
and quoted here. A break found here is reported in RESULTS.md as a held-out result; it is not fixed and re-run
against this set, which is spent once opened.
