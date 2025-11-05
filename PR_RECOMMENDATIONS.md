# Pull Request Recommendations

**Date**: November 5, 2025  
**Repository**: trussworks/react-uswds  
**Total Open PRs Analyzed**: 25

---

## Executive Summary

Of the 25 open pull requests:
- **5 PRs are ready to merge** (with minor adjustments)
- **12 PRs need work** (updates, rebasing, or changes requested)
- **8 PRs should be closed** (stale, duplicates, or superseded)

---

## Ready to Merge (5 PRs)

### PR #2826 - fix: add grid imports to uswds theme
- **Status**: ✅ Ready to merge
- **Last Updated**: Oct 24, 2024
- **Why**: Bug fix for missing grid imports, all checks passed
- **Action**: Merge immediately

### PR #2777 - fix: add data-testid to IconList
- **Status**: ✅ Ready to merge  
- **Last Updated**: Aug 30, 2024
- **Why**: Simple testing improvement, approved, all checks passed
- **Action**: Merge immediately

### PR #2789 - chore: update node version to 20.x
- **Status**: ✅ Ready to merge
- **Last Updated**: Sep 17, 2024
- **Why**: Node version update, checks passed, straightforward change
- **Action**: Merge immediately

### PR #2816 - chore(deps): bump vite from 5.4.2 to 5.4.8
- **Status**: ✅ Ready to merge
- **Last Updated**: Oct 16, 2024
- **Why**: Security update, automated dependency bump
- **Action**: Merge immediately

### PR #2661 - feat: add Time and TimeProps to TimePicker
- **Status**: ✅ Ready with minor review
- **Last Updated**: May 28, 2024
- **Why**: Feature addition, changes requested addressed
- **Action**: Final review and merge

---

## Needs Work (12 PRs)

### PR #2854 - DRAFT: Bump @rollup/plugin-commonjs from 28.0.1 to 28.0.2
- **Status**: ⚠️ Needs rebasing
- **Last Updated**: Nov 5, 2024 (today)
- **Why**: Draft PR, needs rebase with main
- **Action**: Rebase and move out of draft

### PR #2852 - DRAFT: Bump the npm_and_yarn group across 1 directory with 3 updates
- **Status**: ⚠️ Needs rebasing
- **Last Updated**: Nov 5, 2024 (today)
- **Why**: Draft PR for dependency updates
- **Action**: Rebase, verify tests pass, move out of draft

### PR #2837 - DRAFT: Bump happy-dom from 15.7.4 to 16.2.1
- **Status**: ⚠️ Needs rebasing
- **Last Updated**: Oct 30, 2024
- **Why**: Draft PR, multiple dependency updates needed
- **Action**: Complete dependency updates and rebase

### PR #2830 - Dependabot/npm and yarn/the npm and yarn group 14d9ae7e6a
- **Status**: ⚠️ Needs rebasing
- **Last Updated**: Oct 24, 2024
- **Why**: Merge conflicts exist
- **Action**: Rebase to resolve conflicts

### PR #2812 - DRAFT: fix: change logic to check select value is null
- **Status**: ⚠️ Changes requested
- **Last Updated**: Oct 14, 2024
- **Why**: Draft with test failures and review comments
- **Action**: Address review feedback, fix tests, rebase

### PR #2745 - feat: expose sort callback function for Table
- **Status**: ⚠️ Needs rebase
- **Last Updated**: Aug 6, 2024
- **Why**: Stale, needs rebase and review
- **Action**: Rebase and re-request review

### PR #2696 - DRAFT: chore: add feature request issue template
- **Status**: ⚠️ Incomplete
- **Last Updated**: Jun 19, 2024
- **Why**: Still in draft, needs completion
- **Action**: Complete draft or close

### PR #2688 - feat: Add Icon Size Story Examples
- **Status**: ⚠️ Needs rebase
- **Last Updated**: Jun 14, 2024
- **Why**: Stale, approved but needs rebase
- **Action**: Rebase and merge

### PR #2635 - feat: add required indicator prop and update docs to match with uswds
- **Status**: ⚠️ Needs updates
- **Last Updated**: May 14, 2024
- **Why**: Changes requested, stale
- **Action**: Address feedback or close

### PR #2576 - feat: update Search with USWDS 3.4 markup
- **Status**: ⚠️ Major changes needed
- **Last Updated**: Mar 21, 2024
- **Why**: Breaking changes, needs discussion
- **Action**: Team decision on breaking change policy

### PR #2415 - WIP: Update documentation
- **Status**: ⚠️ Long stale
- **Last Updated**: Oct 10, 2023
- **Why**: Over 1 year old, likely superseded
- **Action**: Close or major update needed

### PR #2240 - chore: run audit fix
- **Status**: ⚠️ Very stale
- **Last Updated**: Jun 23, 2023
- **Why**: Over 2 years old, likely superseded
- **Action**: Close and run fresh audit

---

## Should Close (8 PRs)

### PR #2850 - DRAFT: Bump @rollup/plugin-commonjs from 28.0.0 to 28.0.1
- **Status**: ❌ Close - Duplicate
- **Last Updated**: Nov 1, 2024
- **Why**: Superseded by #2854 (same dependency, newer version)
- **Action**: Close as duplicate

### PR #2843 - Bump the npm_and_yarn group with 4 updates
- **Status**: ❌ Close - Superseded
- **Last Updated**: Oct 31, 2024
- **Why**: Superseded by #2852
- **Action**: Close and use #2852 instead

### PR #2841 - Bump happy-dom from 15.7.4 to 15.11.3
- **Status**: ❌ Close - Superseded
- **Last Updated**: Oct 30, 2024
- **Why**: Superseded by #2837 (newer version 16.2.1)
- **Action**: Close and use #2837

### PR #2795 - Bump rollup from 4.21.2 to 4.22.4
- **Status**: ❌ Close - Likely superseded
- **Last Updated**: Sep 23, 2024
- **Why**: Old dependency bump, likely included in later updates
- **Action**: Verify if superseded, then close

### PR #2769 - feat: Storybook upgrade to v8
- **Status**: ❌ Close or Revisit
- **Last Updated**: Aug 22, 2024
- **Why**: Failing checks, changes requested, stale
- **Action**: Close or assign for major rework

### PR #2735 - bug: update banner types to be more strict
- **Status**: ❌ Close - Stale
- **Last Updated**: Jul 25, 2024
- **Why**: Changes requested, no activity for 3+ months
- **Action**: Close with note to reopen if author returns

### PR #2544 - feat(2543): add ModalFooter
- **Status**: ❌ Close - Very stale
- **Last Updated**: Feb 23, 2024
- **Why**: Almost 1 year old, changes requested, no response
- **Action**: Close as stale

### PR #2466 - feat: add custom icon to Alert component
- **Status**: ❌ Close - Superseded
- **Last Updated**: Dec 8, 2023
- **Why**: Almost 2 years old, issue closed as "won't do"
- **Action**: Close per issue decision

---

## Implementation Priority

### Immediate Actions (This Week)
1. **Merge ready PRs** (#2826, #2777, #2789, #2816)
2. **Close duplicates** (#2850, #2843, #2841)
3. **Close very stale PRs** (#2240, #2466, #2544)

### Short-term Actions (Next 2 Weeks)
1. **Review and potentially merge** (#2661, #2688)
2. **Work with authors on** (#2812, #2745, #2635)
3. **Decision on breaking changes** (#2576)
4. **Close remaining stale** (#2415, #2735, #2769, #2795)

### Ongoing Maintenance
1. **Monitor and merge dependency updates** (#2854, #2852, #2837, #2830)
2. **Complete or close drafts** (#2696)

---

## Key Recommendations

1. **Establish a stale PR policy**: Consider auto-closing PRs after 90 days of inactivity with no response to review comments

2. **Consolidate dependency updates**: Use Dependabot groups to reduce the number of individual dependency PRs

3. **Clear draft PR policy**: Set expectations for how long PRs should remain in draft status

4. **Breaking change strategy**: Document policy for accepting breaking changes (like #2576)

5. **Regular PR review sessions**: Schedule weekly reviews to prevent backlog buildup

---

## Summary Statistics

- **Average PR age**: 158 days
- **Oldest PR**: #2240 (over 2 years)
- **Newest PR**: #2854, #2852 (today)
- **PRs with merge conflicts**: 3
- **Draft PRs**: 6
- **Dependency update PRs**: 8

