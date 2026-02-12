<summary>

## What was changed and why

Addressed Round 1 review feedback: merged the duplicate `describe('with a CTA')` blocks in the Alert test file. The original block (line 71) had 1 test, and a second block (line 212) had 3 new tests added in Round 1. These were consolidated into a single `describe('with a CTA')` block containing all 4 CTA-related tests.

This is a purely organizational fix — no test logic or assertions were changed.

## Files modified

- **`src/components/Alert/Alert.test.tsx`** — Merged 3 CTA tests (CSS module class present/absent, CTA placement outside alert body) into the existing `describe('with a CTA')` block at lines 71-112. Removed the duplicate describe wrapper that was at lines 212-245. Total test count remains 31.
- **`.iterate/progress.md`** — Added Round 2 entry documenting the review feedback resolution.

## Remaining concerns or known issues

- None. All 31 tests pass successfully.
- No bugs were identified in the Alert component.
- The component file (`Alert.tsx`) was not modified per the task instructions.

</summary>
