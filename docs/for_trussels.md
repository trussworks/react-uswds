# For Trussels

Below is documentation specifically to provide guidance for contributors who work at [Truss](https://github.com/trussworks). If you don't work at Truss, please feel free to ignore!

## Internal Communication

We have a Truss Slack channel dedicated to discussing this project (**#react-uswds**), as well as a channel for automated updates such as new issues, pull requests, and releases (**#react-uswds-feed**). Anyone is welcome to join and participate in these channels, whether or not they are an active maintainer.

## Active Maintainers

Anyone may feel free to contribute to this library, regardless of what other projects they may be staffed on. For example, if you are on a client project that happens to use this library, it makes sense that you might want to add new features or make bug fixes as you encounter them in a real-life implementation.

However, in some cases you may find yourself spending a more significant amount of time to help maintain ReactUSWDS, such as if you are on Reserve. In that case, it's helpful to have a designation of **_active maintainer_**, which will indicate certain additional responsibilities and a higher level of involvement than other contributors.

Regardless of whether you are on client work or Reserve, it is _up to each individual_ to delineate themselves as an active maintainer, and perform the following on- or off-boarding tasks as needed.

### Active maintainer responsibilities include:

- Maintain a presence in the #react-uswds channel, especially to answer any implementation questions from Trussels who are _not_ active maintainers
- Watch [USWDS](https://github.com/uswds/uswds) updates, and create new issues needed to help this project stay up-to-date with them
- Participate in PR reviews, issue discussion, and project roadmap planning
- Address any security alerts that come up promptly (see below)
- Shepherd library releases forward and publish to npm. See [releasing documentation](./releasing.md).
- Maintain the project board.
- Prevent PRs and issues from becoming stale, and clean up the ones that do.
- Moderate discussions to keep alignment with [Truss values](https://truss.works/values)
- Administrative the repo's [Happo Account](https://happo.io/). Once you have access, log into Happo.io with your Truss email and you will be able to approve/reject changes on PRs. [Happo docs](https://docs.happo.io/docs/getting-started) have more information.

### Addressing Security Alerts

Typically any security alerts we receive will be related to third-party dependencies. This repo is currently configured so that Dependabot will automatically open PRs that fix dependency vulnerabilities, so ideally most of the time manual intervention is not needed. There may also be periods of time during which an alert is issued, but the related dependencies have not yet updated -- in this case, we usually choose to accept the risk of waiting until the updates have been released. However, if an exceptional case comes up -- such as a high severity vulnerability or even a vulnerability within this library -- and you aren't sure how to handle it, you can ask for help in one of the following Truss Slack channels (in order of relevance): #react-uswds, #g-frontend, #infrasec, #engineering

### Merging External PRs

Currently our CI cannot run on external PRs (work from outside the Truss organization) and this prevents merge. Instead, we pull PRs into a separate branch that a CODEOWNER creates [using this script](https://github.com/jklukas/git-push-fork-to-upstream-branch). We then close the external contribution PR [with a comment](https://github.com/trussworks/react-uswds/pull/375#issuecomment-668116811) explaining what's going. This allows automation to run properly. This is temporary solution.

## Onboarding

First of all, we’re so excited you want to be an active maintainer on this project! Here are the things you should make sure to do:

- [ ] Join the #react-uswds Slack channel.
- [ ] If you haven't already, be sure to familiarize yourself with this repo, especially the docs on [contributing](./contributing.md) and [releasing](./releasing.md). Also, review [recent releases](https://github.com/trussworks/react-uswds/releases).
- [ ] Open a new PR that adds yourself to the Active Maintainers list in the [readme](../README.md).
  - [ ] _Optional:_ Speak with another active maintainer and request admin privileges to the [Happo Account](https://happo.io/)
  - [ ] _Optional:_ Add yourself to the `contributors` list in the [package.json](../package.json),
  - [ ] \_Optional: Add yourself to [CODEOWNERS](../CODEOWNERS) if you'd like to automatically be requested to review PRs.
- [ ] _Optional:_ If you want access to the npm org so you can publish new releases, ping `@npm-admins` in Slack

If you've completed all of the above and are wondering what to do next, here are some ideas!

- Check out any [open pull requests](https://github.com/trussworks/react-uswds/pulls) that might need reviews or feedback
- Take a look at the [project board](https://github.com/trussworks/react-uswds/projects/1) to get a sense of current and upcoming work
  - Issues in the **Ready for development** column should have clear scope and acceptance criteria, and are ready to be worked on!
    - especially any that are labeled `good first issue` if this is your first time contributing to ReactUSWDS
  - Issues in the **Needs requirements** column are undergoing active discussion and would probably benefit from your point of view!
- Browse [open issues](https://github.com/trussworks/react-uswds/issues) to see if there are any new issues that need to be labeled or prioritized
- Check in with any other active maintainers about what areas are in need of help

## Offboarding

We’re equally excited that you’ll be taking something off your plate and moving on to something new! Please make sure to do the following before you wash your hands of responsibilities:

- **If you have any in-progress work that you won't be able to complete:**
  - [ ] Make sure all of your commits have been pushed up to a branch so nothing gets lost on your local machine
  - [ ] Open a draft PR for your branch, and use that to annotate any remaining work, TODOs, open questions, etc. as well as the overarching strategy you had in mind. The more documentation you leave, the easier it will be for someone else to finish your work!
  - [ ] If there are other active maintainers who are planning to pick up your work, comment on the PR and tag them so it's clear who will be picking it up. If there aren't, or you aren't sure, comment on the PR saying the work needs a new assignee or else it will go stale.
  - [ ] Unassign yourself from any corresponding issues
  - It’s ideal if you are able to help answer any questions that arise from handing off work, but we understand if your new commitments don't allow for it! Don't feel pressure to stay available after offboarding.
- [ ] Open a new PR that removes yourself from the Active Maintainers list in the [readme](../README.md).
  - You can also remove yourself from [CODEOWNERS](../CODEOWNERS) so you don't get PR requests that you won't have time to review.
  - **_Don't_** remove yourself from `package.json` contributors! You did good work on this project and that should be recognized.
- [ ] _Optional:_ You don’t need to have npm access revoked, but you can if you want.
- [ ] _Optional:_ You don’t need to have Happo admin access revoked, but you can if you want.
- [ ] _Optional: If you want to,_ feel free to leave the #react-uswds Slack channels
