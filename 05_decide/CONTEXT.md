# 05_decide: the bar, the change, the result, the decision

This folder's job: hold the record of every change and the one-page result.

## Inputs

- Working: `runs/<run>/check.md` from stage 03, counts and reports from stage 04
- Reference: `05_decide/TEST_METHOD.md` (frozen method, amendments at its foot), `05_decide/RUN-LOG.md`,
  `05_decide/FIX-LOG.md`, `05_decide/SOURCES.md` (facts she cites, verified)

## Process

1. Before a change: copy `_templates/amendment.md`, fill the cause, the change and the bars with the clock time,
   and append it to `TEST_METHOD.md`. Commit.
2. Make the change in the persona's own repo. Run stages 01 to 04.
3. Append the result under the amendment: each bar met or not, quoted evidence, the attempt number.
4. Decide: keep (all bars met), try again (attempt 2 or 3), or revert and record the limit.
5. Put anything a reader of the entry needs in `RESULTS.md`: what held, what still fails, what is untested.

## Outputs

- An amendment at the foot of `TEST_METHOD.md`; `RESULTS.md`; a line in `RUN-LOG.md` for each run

## Check

Every bar is dated before the run it judges (compare the amendment's time with the run folder's stamp and the
commit log). A change ships only with every bar met.

## Paths in the frozen record

The record was written when the lab lived inside the persona repo. `PATHS.md` maps those paths to these.
