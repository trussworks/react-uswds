# Allow parallel development

* Status: proposed
* Deciders: [Codeowners](../../CODEOWNERS)
* Date: 2020-03-16

## Context and Problem Statement

Due to a combination of temporarily having a large influx of people giving some attention to `react-uswds`, and our intention to be careful about releasing breaking changes, we recently created develop branches corresponding to [Github milestones](https://github.com/trussworks/react-uswds/milestones) parallel to `main` to allow simultaneous streams of work that would have previously been blocked (branches `V2` and `usdws-2.9.0`). 

There are many solutions to branching, all of which impact the contributor workflow, and have a potential to impact the way code is released as well. In the immediate term, we should decide whether to codify a branching strategy that accommodates parallel workflows as necessary, or whether we consider it a temporary effort and do not add any new process or documentation around branching for this repository. 

It will also be important to consider the impacts on versioning/release, since branching strategies, while primarily support developer workflows, also exist in service of releasing code. We are not ready to make changes to make changes to the release process at this time, so preferred solutions must not require changes to code releases That would be a candidate for a separate ADR as necessary. We can (and should) consider the flexibility of a branching strategy from the release-perspective, however.

## Decision Drivers

* Existing process (combining [semver](https://semver.org/), [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), and [empathy in software craftsmanship](https://truss.works/values)) demands contributors to be conscious of the impact of the changes made for consumers of the `react-uswds` project.
* There were more active contributors to `react-uswds` than issues that were simultaneously ready for development directly to `main` (and therefore ready to be released/published):
  * Our focus was on [USWDS 2.8.0 Milestone](https://github.com/trussworks/react-uswds/milestone/2) features of which only **2** remained.
  * We also needed to facilitate [`good first issue`](https://github.com/trussworks/react-uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) for onboarding new contributors to the project, some of which were part of the [V2 Milestone](https://github.com/trussworks/react-uswds/milestone/5) involving breaking changes (e.g. [Update Accordion Component](https://github.com/trussworks/react-uswds/pull/922)).
  * With upcoming focus on reaching parity with USWDS 2.9.0, the next priority features were those under the [USWDS 2.9.0 Milestone](https://github.com/trussworks/react-uswds/milestone/3).
* With the number of people available to work on `react-uswds` fluctuating, typically on the side of limited time, it is important that potential contributors are able to pick up an [issue](https://github.com/trussworks/react-uswds/issues) they feel comfortable working on in the time frame available to them, with as few barriers and considerations to make as possible. That necessitates as many of the following as possible:
  * Have as little process overhead as possible.
  * Where process *is* required, clear & concise documentation should be readily available and easy to find.
  * The issue backlog should be organized, with issues labelled and prioritized as best as possible, with issue dependencies clearly called out with a description on how to navigate each dependency.


## Considered Options

* ### Option 1: No formal changes to process. 
  * Work to unblock and merge existing milestone develop branches ASAP and proceed with standard, single-branch workflow.
* ### Option 2: Modified Gitflow with flexible develop branches
  * Review and discuss codification of the [proposed branching strategy](https://docs.google.com/document/d/1FGW1u3W6T1M-HSw8Jw3xcjM_8HdnOsV5rdbYphPuLxY/edit#) for handling parallel streams of work and navigating around dependencies.

## Decision Outcome

Chosen option: Requires discussion

### Positive Consequences <!-- optional -->

* TBD pending decision

### Negative Consequences <!-- optional -->

* TBD pending decision

## Pros and Cons of the Options

### Option 1: No formal changes to process. 

Standard development flow using `main` as the single develop branch.

* Good, because no development process changes are required.
* Good, because no additional documentation is required.
* Good, because developer overhead under normal circumstances is minimal.
* Good, because releases still take place via short-lived release branches off `main`, and no changes to the release process are required.
* Good, because there is limited time to focus on `react-uswds`, and adding process overhead constrains the available time.
* Bad, because maintainers must manually keep track of the dependencies between individual issues.
* Bad, because it discourages leveraging git to unblock certain work. Instead, a conscious decision must be made to:
  * either: not leverage branching to unblock work, and deal with blocked stories and more frequent breaking releases.
  * or: leverage branching ad-hoc as necessary, treating these situations as exceptions, and track without supporting documentation / tooling (as with `V2` & `uswds-2.9.0`).

### Option 2: Modified Gitflow with flexible develop branches

[Detailed branching strategy information can be found here](https://docs.google.com/document/d/1FGW1u3W6T1M-HSw8Jw3xcjM_8HdnOsV5rdbYphPuLxY/edit#)

* Good, because the standard process, working off `main` does not change for the majority of forseeable work.
* Good, because developer workflow does not change regardless of the base branch for their feature.
  * Where today developers use `main` as a base branch, this process is the same except that their base branch might be a develop branch (e.g. `V2` or `uswds-2.9.0`) instead of `main`.
* Good, because releases still take place via short-lived release branches off `main`, and no changes to the release process are required.
* Good, because there is limited time to focus on `react-uswds`, and unblocking backlog issues increases the likelihood that any given issue can be picked up and resolved in the available time.
* Good, because developers can pickup any issue from the backlog and begin working on it through a defined and documented process of navigating dependencies if necessary.
* Good, because the strategy is flexible and scalable to as many or as few parallel dependencies as necessary
  * When there isn't a need for additional develop branches like `V2` or `usdwds-{USWDS_VERSION}`, the standard process working with `main` as the base branch is still used.
  * Whenever a development dependency is identified, a new develop branch can be spun up to accommodate without needing a different process from working on `main` or any other develop branch.
* Good , because breaking changes can be worked on, reviewed, and approved, without immediately blocking `main` or requiring a breaking release.
* Good, because maintainers have more control over when to release potentially breaking changes without needing to be concerned about which individual issues are blocked.
* Good, because it opens the door for a multitude of more dynamic release and versioning strategies.
Good, because (once defined) a greater level of autonomy is achieved in line with creating a robust support structure for the project in an active, open-source community.
* Bad, because documentation of the process must be created/maintained.
* Bad, because, while minor, process overhead is not ideal when limited time is available.
* Bad, because without the addition of automation to [sync develop branches with `main`](https://github.com/trussworks/react-uswds/issues/1011) there is additional manual overhead in keeping these branches updated with main.
* Bad, because it could be confusing for developers unfamiliar with git or parallel workflows leveraging git.
* Bad, because any branching complexity increases the potential for repository code conflicts.
* Bad, because without intention behind completing work for develop branches and subsequently merging them back to main, they can be too long-lived and/or get stale.

<!-- ## Links -->

<!-- * [Link type] [Link to ADR] example: Refined by [ADR-0005](0005-example.md) -->
<!-- * … numbers of links can vary -->

<!-- markdownlint-disable-file MD013 -->
