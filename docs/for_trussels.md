# For Trussels

Below is documentation specifically to provide guidance for contributors who work at [Truss](https://github.com/trussworks). If you don't work at Truss, please feel free to ignore!

## Internal Communication

We have a Truss Slack channel dedicated to discussing this project (**#react-uswds**), as well as a channel for automated updates such as new issues, pull requests, and releases (**#react-uswds-feed**). Anyone is welcome to join and participate in these channels, whether or not they are an active maintainer.

## Active Maintainers

See ["For Maintainers" README](for_maintainers.md). There are also some "For Maintainers" notes below.

## Onboarding

First of all, we’re so excited you want to be an active maintainer on this project! Here are the things you should make sure to do:

- [ ] Join the #react-uswds Slack channel.
- [ ] If you haven't already, be sure to familiarize yourself with this repo, especially the docs on [contributing](./contributing.md) and [releasing](./releasing.md). Also, review [recent releases](https://github.com/trussworks/react-uswds/releases).
- [ ] _For Maintainers:_ Add yourself to main project README "Active Maintainers" list.
- [ ] _For Maintainers:_ Ping in #react-uswds to request access to the npm org so you can publish new releases
- [ ] _For Maintainers:_ Ping in #react-uswds to request admin privileges to the [Happo Account](https://happo.io/)
- [ ] _Optional:_ Add yourself to the `contributors` list in the [the README](../README.md), using the command `yarn contributors:add [your github username] code`
- [ ] _Optional_: Add yourself to [CODEOWNERS](../CODEOWNERS) if you'd like to automatically be requested to review PRs.

If you've completed all of the above and are wondering what to do next, here are some ideas!

- Check out any [open pull requests](https://github.com/trussworks/react-uswds/pulls) that might need reviews or feedback
- Take a look at the [project board](https://github.com/trussworks/react-uswds/projects/1) to get a sense of current and upcoming work
  - Issues in the **Ready for development** column should have clear scope and acceptance criteria, and are ready to be worked on!
    - especially any that are labeled `good first issue` if this is your first time contributing to ReactUSWDS
  - Issues in the **Needs requirements** column are undergoing active discussion and would probably benefit from your point of view!
- Browse [open issues](https://github.com/trussworks/react-uswds/issues) to see if there are any new issues that need to be labeled or prioritized

## Offboarding

Please make sure to do the following before you wash your hands of responsibilities:

- **If you have any in-progress work that you won't be able to complete:**
  - [ ] Make sure all of your commits have been pushed up to a branch so nothing gets lost on your local machine
  - [ ] Open a draft PR for your branch, and use that to annotate any remaining work, TODOs, open questions, etc. as well as the overarching strategy you had in mind. The more documentation you leave, the easier it will be for someone else to finish your work!
  - [ ] If there is another active maintainer who is planning to pick up your work, comment on the PR and tag them so it's clear who will be picking it up. If there isn't, or you aren't sure, comment on the PR saying the work needs a new assignee or else it will go stale.
  - [ ] Unassign yourself from any corresponding issues
  - It’s ideal if you are able to help answer any questions that arise from handing off work, but we understand if your new commitments don't allow for it!
- [ ] _For Maintainers:_ Open a new PR that removes yourself from the Active Maintainers list in the [readme](../README.md).
- [ ] Remove yourself from [CODEOWNERS](../CODEOWNERS) so you don't get PR requests that you won't have time to review.
- **_Don't_** remove yourself from `package.json` contributors! You did good work on this project and that should be recognized.
- [ ] _Optional:_ You don’t need to have npm access revoked, but you can if you want.
- [ ] _Optional:_ You don’t need to have Happo admin access revoked, but you can if you want.
- [ ] _Optional: If you want to,_ feel free to leave the #react-uswds Slack channels
