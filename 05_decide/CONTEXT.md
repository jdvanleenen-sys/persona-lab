# 05_decide: the bar, the change, the result, the decision

This folder's job: hold the record of every change and the one-page result.

## Inputs

- Working: `runs/<run>/check.md` from stage 03, counts and reports from stage 04
- Reference: `05_decide/TEST_METHOD.md` (the method, frozen, with Amendments 1 to 29), `05_decide/amendments/_index.md`,
  `05_decide/RUN-LOG.md` and `05_decide/FIX-LOG.md` (logs to Amendment 29; since then `runs/_index.md`),
  `05_decide/SOURCES.md` (facts she cites, verified)

## Process

1. Before a change: copy `_templates/amendment.md` to `05_decide/amendments/<nnn>-<slug>.md`, fill the cause, the
   change and the bars with the clock time, `status: proposed`. Commit.
2. Make the change in the persona's own repo. Run stages 01 to 04.
3. Set `status: running`. Append each result under the amendment: each bar met or not, quoted evidence, the
   attempt number. A fail a person reads and clears gets a `cleared.md` in its run folder.
4. Decide: `status: kept` (all bars met), try again (attempt 2 or 3), or `status: reverted` and record the limit.
   Run `node _tools/index.mjs`.
5. Put anything a reader of the entry needs in `RESULTS.md`: what held, what still fails, what is untested.

## Outputs

- `05_decide/amendments/<nnn>-<slug>.md`; `RESULTS.md`; the rebuilt indexes

## Check

Every bar is dated before the run it judges (compare the amendment's time with the run folder's stamp and the
commit log). A change ships only with every bar met.

## Paths in the frozen record

The record was written when the lab lived inside the persona repo. `PATHS.md` maps those paths to these.
