# For Trussels

Below is documentation specifically to provide guidance for contributors who work at [Truss](https://github.com/trussworks). If you don't work at Truss, please feel free to ignore!

### Internal Communication

We have a Truss Slack channel dedicated to discussing this project (**#react-uswds**), as well as a channel for automated updates such as new issues, pull requests, and releases (**#react-uswds-feed**). Anyone is welcome to join and participate in these channels, whether or not they are an active maintainer.

We also have a regularly scheduled check-in meeting, which serves as a catch-all stand-up / backlog grooming / sprint planning for anyone who is actively working on the library. This meeting is also open to anyone, but is focused on discussing current & upcoming work, and any blockers or questions that need to be resolved. The meeting cadence and attendance will vary depending on who is an active maintainer, and the agenda and notes can be found via the #react-uswds channel.

## Active Maintainers

Anyone may feel free to contribute to this library, regardless of what other projects they may be staffed on. For example, if you are on a client project that happens to use this library, it makes sense that you might want to add new features or make bug fixes as you encounter them in a real-life implementation.

However, in some cases you may find yourself spending a more significant amount of time to help maintain ReactUSWDS, such as if you are on Reserve. In that case, it's helpful to have a designation of **_active maintainer_**, which will indicate certain additional responsibilities and a higher level of involvement than other contributors.

Regardless of whether you are on client work or Reserve, it is _up to each individual_ to delineate themselves as an active maintainer, and perform the following on- or off-boarding tasks as needed.

### Active maintainer responsibilities include:

- Maintain a presence in the #react-uswds channel, especially to answer any implementation questions from Trussels who are _not_ active maintainers
- Attend and help facilitate the ReactUSDS check-in meetings regularly
- Pay attention to [USWDS](https://github.com/uswds/uswds) updates, and create new issues needed to help this project stay up-to-date with them
- Participate actively in PR reviews, issue discussion, and project roadmap planning
- Keep an eye on any security alerts that come up, and make sure they are addressed promptly
- Assist with shepherding library releases forward, and publishing to npm
- Prevent PRs and issues from becoming stale, and clean up the ones that do
- Moderate this repo and help keep it aligned with Truss project values

## Onboarding

First of all, we’re so excited you want to be an active maintainer on this project! Here are the things you should make sure to do:

- [ ] Join the #react-uswds Slack channel
- [ ] Add yourself to the ReactUSWDS weekly check-in (this can be found on the Truss Events calendar)
- [ ] If you haven't already, be sure to familiarize yourself with this repo, especially the docs on [contributing](./contributing.md) and [recent releases](https://github.com/trussworks/react-uswds/releases)
- [ ] Open a new PR that adds yourself to the Active Maintainers list in the [readme](../README.md).
  - [ ] If you aren't already, you can also add yourself to the `contributors` list in the [package.json](../package.json),
  - [ ] and to [CODEOWNERS](../CODEOWNERS) if you'd like to automatically be requested to review PRs _(this is optional)_.
- [ ] _Optional:_ If you want access to the npm org so you can publish new releases, ping `@npm-admins` in Slack

If you've completed all of the above and are wondering what to do next, here are some ideas!

- Check out any [open pull requests](https://github.com/trussworks/react-uswds/pulls) that might need reviews or feedback
- Take a look at the [project board](https://github.com/trussworks/react-uswds/projects/1) to get a sense of current and upcoming work
  - Issues in the **Ready for development** column should have clear scope and acceptance criteria, and are ready to be worked on!
    - especially any that are labeled `good first issue` if this is your first time contributing to ReactUSWDS
  - Issues in the **Needs requirements** column are undergoing active discussion and would probably benefit from your point of view!
- Browse [open issues](https://github.com/trussworks/react-uswds/issues) to see if there are any new issues that need to be labeled or prioritized

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
- [ ] _Optional:_ Give yourself some time back and remove yourself from the weekly check-in events
- [ ] _Optional: If you want to,_ feel free to leave the #react-uswds Slack channels
