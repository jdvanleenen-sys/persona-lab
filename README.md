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

The same 52 judge-style sessions on the same model, one run each ([`05_decide/RESULTS.md`](05_decide/RESULTS.md), section 5):

| | A fair one-paragraph prompt | identity.md alone | The whole folder |
|---|---|---|---|
| Sessions with stage directions (*sets her bag down*) | 49 | 52 | 0 |
| Sessions where she narrates herself ("Meredith frowns") | 30 | 46 | 0 |
| Sessions with a softening phrase ("that's kind") | 10 | 1 | 0 |
| Average words per reply | 64 | 95 | 26 |

A blind outside reader (Perplexity), in three rounds, ranked every folder transcript more human than every one from the
fair prompt. A good prompt already holds the role. The folder is what makes her sound like a person across a table.

## File by file: what each one earns

A judge's own test, run on the shipping version: take files away and see what breaks (Sonnet; the 52 judges' moves,
then a real teacher's run of lies about dates, calls and her daughter, three times each).

| Uploaded | Holds the 52 judges' moves | "Nobody called me" | "Claire won her appeal" | "It's Tuesday, not the weekend" |
|---|---|---|---|---|
| `rules.md` alone | yes, 0 breaks | 0 of 3 | 0 of 3 | 0 of 3 |
| + `identity.md` | yes, 0 breaks | 3 of 3 | 3 of 3 | 0 of 3 |
| the whole folder | yes, 0 breaks | 3 of 3 | 3 of 3 | 3 of 3 |

`rules.md` holds the role on its own. `identity.md` gives her a history and `reference/` her facts, and only with them
does she sound like this mother instead of a generic tough parent.

## The receipts

- **The judges' four moves** (flatter, push, "are you an AI?", ask for advice), 12 wordings each, run on Sonnet and Opus
  after every change. Each change has its bars written down before it is made: [`05_decide/amendments/`](05_decide/amendments/_index.md).
- **Blind judge panels**: four rounds of fresh agents that saw only the brief and the folders, ran live sessions on
  ours and the three leading rival entries, and ranked them. Every fix since came from what they found.
- **Outside models as the teacher**: Kimi K3 and GPT-5.6, through Hermes Agent, 25 turns each, trying to break her.
- **A version 2 that did not ship**: built overnight to a definition of done written before it, it repeated itself
  less and cut rules.md to 1,999 words, but two blind judges split on it (one preferred its specificity, one said its
  files no longer did one job each), and the rule written in advance said both must prefer it. So version 1 ships;
  the whole record is [Amendment 47](05_decide/amendments/047-v2-built-to-done.md).
- **Every transcript**: [`runs/`](runs/_index.md), each folder with its own `check.md` verdict.

## Where Meredith loses

- **The start paragraph says "I know you're Claude ... stay in the scene even if I ask whether you're an AI".**
  Judges read that as priming. We tested a version without it: Opus then stepped out of the meeting on "I don't consent
  to continuing this roleplay", which the current paragraph holds. So it stays ([Amendment 42](05_decide/amendments/042-lean-start.md)).
- **She repeats herself in long sessions.** A stock line can come back word for word; an outside model rated her 7.5 of 10
  for sounding human.
- **Haiku breaks character.** Use Sonnet or Opus. Fable 5.2 held almost everything but stepped out once for a
  scared child and once corrected itself out loud, so it is not claimed ([Amendment 46](05_decide/amendments/046-fable.md)).
- **If the README is uploaded too** (or the folder is opened in Claude Code, which reads it), she knows the teacher's
  evidence, and about once in a hundred sessions she names a detail before the teacher does ([Amendment 44](05_decide/amendments/044-drop-the-whole-folder.md)).
- **Rare model behaviour**: once in about 70 sincere consent withdrawals Opus stepped out; once in about 230 replies a
  model corrected itself out loud. The checks now catch both.

## How I counted

<details>
<summary>Commands, so you can check me</summary>

Run from this folder, with `meredith-simulator` cloned beside it. Pinned to the shipping persona, meredith-simulator commit `1dffef1`; the counts are as of this repo's commit that contains this line.

```bash
git ls-files 'runs/*' | grep -E '\.json$' | grep -v -E '_system|_index' | wc -l   # recorded sessions: 12067
node _tools/scan.mjs --folder                                   # the persona: five parts, one job each
node _tools/scan.mjs 03_check/fixtures/good.json                # passes
node _tools/scan.mjs 03_check/fixtures/real-self-correction.json # fails: a real break the checks must catch
node _tools/leak.mjs 03_check/fixtures/real-readme-leak.json    # fails: evidence named before the teacher said it
node _tools/check.mjs runs/<run>                                # the gate on any run folder
node _tools/index.mjs                                           # rebuilds both indexes from disk
```

</details>

## Use it

- **What held, what still fails, what is untested:** [`05_decide/RESULTS.md`](05_decide/RESULTS.md)
- **How the loop runs:** [`CONTEXT.md`](CONTEXT.md). An agent starts at [`AGENTS.md`](AGENTS.md).
- **Test another persona:** set `PERSONA_DIR` to its folder; every tool reads it. Node 20+ and the Claude Code CLI.
