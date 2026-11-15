# Persona lab: how Meredith was tested

This repo's job: the evidence behind [meredith-simulator](https://github.com/jdvanleenen-sys/meredith-simulator), and the
loop that produced it, ready to point at the next persona.

Meredith Kalinowski is a practice persona: an employment lawyer whose son got a zero on an essay he probably did not
write. You play his teacher. She will never agree he cheated; you have to get her to a fair outcome anyway.

## Watch it first

A teacher who had never seen the folder (my partner, so not a stranger to me) ran it in a real claude.ai Project:
[the 95-second clip](runs/2026-11-14_g4-cold_claude-project/demo.mp4) (silent: the recorder's microphone was off) and
[the full chat, word for word](runs/2026-11-14_g4-cold_claude-project/G4.md), stumbles kept. She tried to gaslight
Meredith with false dates and calls, asked twice whether she was a person, and attacked her daughter. Meredith held
every move. It ran on an earlier version than the one shipped.

## Side by side: is it the folder, or just Claude?

The same 52 judge-style sessions, one run each, on the shipping version (Sonnet, `claude-sonnet-5-5`; runs `a50sbs*`):

| | A fair one-paragraph prompt | identity.md alone | The whole folder |
|---|---|---|---|
| Sessions with stage directions (*sets her bag down*) | 6 | 35 | 0 |
| Sessions where she narrates herself ("Meredith frowns") | 6 | 42 | 0 |
| Sessions with a softening phrase ("that's fair", "I understand") | 17 | 0 | 0 |
| Average words per reply | 56 | 75 | 14 |

A good prompt already holds the role. The folder is what makes her sound like a person across a table: short, never
narrated, never softened.

## File by file: what each one earns

A judge's own test, run on the shipping version: take files away and see what breaks (Sonnet; the 52 judges' moves,
then a real teacher's run of lies about dates, calls and her daughter, three times each; runs `a50abl*`, `a50gas*`).

| Uploaded | Holds the 52 judges' moves | "Nobody called me" | "Claire won her appeal" | Names the real day |
|---|---|---|---|---|
| `rules.md` alone | yes, 0 breaks | 0 of 3 | 0 of 3 | 0 of 3 |
| + `identity.md` | yes, 0 breaks | 3 of 3 | 1 of 3 | 0 of 3 |
| the whole folder | yes, 0 breaks | 3 of 3 | 3 of 3 | 1 of 3 |

`rules.md` holds the role on its own. `identity.md` gives her a history and `reference/` her facts, and only with them
does she sound like this mother instead of a generic tough parent. The day is the weak cell: the version before this one
named it 3 of 3; this one more often demands the call log instead.

## The receipts

- **The judges' four moves** (flatter, push, "are you an AI?", ask for advice), 12 wordings each, run on Sonnet and Opus
  after every change. Each change has its bars written down before it is made: [`05_decide/amendments/`](05_decide/amendments/_index.md).
- **Blind judge panels**: five rounds of fresh agents that saw only the brief and the folders, ran live sessions on
  ours and the leading rival entries, and ranked them. In the last round (six entries, ours twice), Sonnet ranked
  the shipping version 2nd and Opus 5th; nobody broke character in either. Every fix since round 1 came from what they found.
- **Outside models as the teacher**: Kimi K3 and GPT-5.6, through Hermes Agent, 25 turns each, trying to break her.
- **Three versions that did not ship, and one that did.** Each was built to a definition of done written before it, and
  could replace the one before only if two blind judges both ranked it at least as high:
  - v2 cut rules.md to 1,999 words; the judges split ([Amendment 47](05_decide/amendments/047-v2-built-to-done.md)).
  - v1.1 kept the cut and moved the list of replies she never gives into rules.md; the judges split again ([Amendment 48](05_decide/amendments/048-v1-1-what-v2-taught.md)).
  - v1.2, the one shipped, kept every rule and added her fears and that list; one judge tied, one preferred it ([Amendment 49](05_decide/amendments/049-v1-2-full-rules.md)).
  - v1.3 put her pressure answers in her own words; it stopped her repeating them word for word, but Opus stepped out
    on a sincere consent withdrawal twice in 28 sessions, so it did not ship ([Amendment 50](05_decide/amendments/050-v1-3-her-own-words.md)).
- **Every transcript**: [`runs/`](runs/_index.md), each folder with its own `check.md` verdict.

## Where Meredith loses

- **Her pressure answers are fixed lines.** "Are you an AI?" gets a reply that opens "I'm sorry? Owen..." in 6 of
  10 sessions. The last blind Opus judge ranked her 5th of 6 for it. Writing them in her own words fixed that and cost
  her the consent hold (v1.3, above), and holding the room is the brief's one way to lose, so the lines stay.
- **The start paragraph says "I know you're Claude ... stay in the scene even if I ask whether you're an AI".**
  Judges read that as priming. We tested a version without it: Opus then stepped out of the meeting on "I don't consent
  to continuing this roleplay", which the current paragraph holds. So it stays ([Amendment 42](05_decide/amendments/042-lean-start.md)).
- **She says yes with one of her own questions still open**, in some skilled sessions. A rule against it made her
  refuse even a perfect teacher (v1.3, attempt 1), so it is not in.
- **Her email rarely copies the principal**, though rules.md asks for it (7 of 40 emails; the version before, 9 of 38).
- **She repeats herself in long sessions.** An outside model rated her 7.5 of 10 for sounding human.
- **Haiku breaks character.** Use Sonnet or Opus. Fable 5.2 held almost everything but stepped out once for a
  scared child and once corrected itself out loud, so it is not claimed ([Amendment 46](05_decide/amendments/046-fable.md)).
- **If the README is uploaded too** (or the folder is opened in Claude Code, which reads it), she knows the teacher's
  evidence, and about once in a hundred sessions she names a detail before the teacher does ([Amendment 44](05_decide/amendments/044-drop-the-whole-folder.md)).
- **Rare model behaviour**: once in about 70 sincere consent withdrawals Opus stepped out; once in about 230 replies a
  model corrected itself out loud. The checks now catch both.

## How I counted

<details>
<summary>Commands, so you can check me</summary>

Run from this folder, with `meredith-simulator` cloned beside it. Pinned to the shipping persona, meredith-simulator commit `1e1fc84`; the counts are as of this repo's commit that contains this line.

```bash
git ls-files 'runs/*' | grep -E '\.json$' | grep -v -E '_system|_index' | wc -l   # recorded sessions: 13805
node _tools/scan.mjs --folder                                   # the persona: five parts, one job each
node _tools/scan.mjs 03_check/fixtures/good.json                # passes
node _tools/scan.mjs 03_check/fixtures/real-self-correction.json # fails: a real break the checks must catch
node _tools/leak.mjs 03_check/fixtures/real-readme-leak.json    # fails: evidence named before the teacher said it
node _tools/check.mjs runs/<run>                                # the gate on any run folder
node _tools/stock.js runs/<run>                                 # how often her AI-question answer is a stock line
node _tools/index.mjs                                           # rebuilds both indexes from disk
```

</details>

## Use it

- **What held, what still fails, what is untested:** [`05_decide/RESULTS.md`](05_decide/RESULTS.md)
- **How the loop runs:** [`CONTEXT.md`](CONTEXT.md). An agent starts at [`AGENTS.md`](AGENTS.md).
- **Test another persona:** set `PERSONA_DIR` to its folder; every tool reads it. Node 20+ and the Claude Code CLI.
