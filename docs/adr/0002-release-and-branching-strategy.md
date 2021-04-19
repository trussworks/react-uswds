# Release and Branching Strategy

* Status: proposed
* Deciders: [Codeowners](../../CODEOWNERS)
* Date: 2020-04-06

## Context and Problem Statement

Due to a combination of temporarily having a large influx of people giving some attention to `react-uswds`, and our intention to be careful about releasing breaking changes, we recently created develop branches corresponding to [Github milestones](https://github.com/trussworks/react-uswds/milestones) parallel to `main` to allow simultaneous streams of work that would have previously been blocked (branches `V2` and `usdws-2.9.0`). As per [ADR-0001](./0001-update-major-version-with-uswds-minor-version.md), changes coming from USWDS will only be considered breaking if USWDS also considers them breaking. So far, we have generally developed and released features aimed at reaching parity with USWDS in chronological order, which can also create development dependencies. Going forward it would be valuable to have a documented strategy for dealing with these development dependencies.

Because branching strategies and release strategies often exist in support of one another, it is important to consider the two in tandem. Evaluating branching and release strategies simultaneously necessitates that one must be the driving force for the other. This ADR is framed from the perspective that the release strategy the driving force, and compatible branching strategies operate in support of the release strategy. Decision drivers and pros & cons within this ADR are specifically formulated for this project, as branching and release processes should intentionally be tailored to best fit a given project.

**Given that we need a documented release and branching strategy for navigating development dependencies, what should that combination of strategies be?**

## Decision Drivers
* Existing process (combining [semver](https://semver.org/), [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), and [empathy in software craftsmanship](https://truss.works/values)) demands contributors to be conscious of the impact of the changes made for consumers of the `react-uswds` project.
* There were more active contributors to `react-uswds` than issues that were simultaneously ready for development directly to `main` (and therefore ready to be released/published):
  * Our focus was on [USWDS 2.8.0 Milestone](https://github.com/trussworks/react-uswds/milestone/2) features of which only **2** remained.
  * We also needed to facilitate [`good first issue`](https://github.com/trussworks/react-uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) for onboarding new contributors to the project, some of which were part of the [V2 Milestone](https://github.com/trussworks/react-uswds/milestone/5) involving breaking changes (e.g. [Update Accordion Component](https://github.com/trussworks/react-uswds/pull/922)).
  * With upcoming focus on reaching parity with USWDS 2.9.0, the next priority features were those under the [USWDS 2.9.0 Milestone](https://github.com/trussworks/react-uswds/milestone/3).
* With the number of people available to work on `react-uswds` fluctuating, typically on the side of limited time, it is important that potential contributors are able to pick up an [issue](https://github.com/trussworks/react-uswds/issues) they feel comfortable working on in the time frame available to them, with as few barriers and considerations to make as possible. That necessitates as many of the following as possible:
  * Have as little process overhead as possible.
  * Where process *is* required, clear & concise documentation should be readily available and easy to find.
  * The issue backlog should be organized, with issues labeled and prioritized as best as possible, with issue dependencies clearly called out with a description on how to navigate each dependency.
* As a open source project, the chosen strategies should be friendly to new contributors of various levels of experience.


## Considered Options

> **Note:** Each option contains one or more sub-options inb the form of a compatible branching strategy. A chosen solution should be in the form of `[Option #].[Sub-Option ABC]` (e.g. `1.A` or `3.C`).\
> For details about each compatible branching strategy, see [Branching Strategies](#branching-strategies).

* ### Option 1: Current process: Formulate releases ad-hoc
  * Characteristics
    * The current release process where releases are formulated and released at maintainers discretion and convenience.
    * Releases generally involve fixes and features in chronological order in pursuit of achieving parity with USWDS.
  * Compatible branching strategies
    * A. [Default](#default)
    * B. [Standard Gitflow](#standard-gitflow)
    * C. [Modified Gitflow](#modified-gitflow) 
* ### Option 2: Release all changes immediately
  * Characteristics
    * Completed features and fixes are released in the order they are developed.
    * Breaking and non-breaking changes alike from the backlog are fair game.
    * Rely on semver and standard-version to handle versioning for breaking vs. non-breaking changes.
  * Compatible branching strategies
    * A. [Default](#default)
      > **Note:** While other branching strategies are technically compatible, the main advantage of this release strategy is that no complex branching is required, so there is no point in considering additional branching complexities that would not be used.
* ### Option 3: Intentionally define and formulate release content in advance of each release
  * Characteristics
    * Similar to the current process of ad-hoc releases, but with predefined releases.
    * Releases are planned and their content is determined in advance either from, or formulating a documented plan for library updates.
  * Compatible branching strategies
      * A. [Default](#default)
      * B. [Standard Gitflow](#standard-gitflow)
      * C. [Modified Gitflow](#modified-gitflow)
* ### Option 4. Release and support multiple versions simultaneously
  * Characteristics
    * Multiple versions of the library are available simultaneously (e.g. a version corresponding to USWDS 2.9.x features and fixes as they are developed, and a version corresponding to USWDS 2.10.x features and fixes as they are developed, etc.)
    * Alpha releases of partially finished functionality could be supported.
  * Compatible branching strategies
    * A. [Modified Gitflow](#modified-gitflow)


## Decision Outcome

Chosen option: **1.C** Formulate releases ad-hoc, supported via Modified Gitflow branching strategy.

### Positive Consequences

* Does not presently necessitate changes to the release process.
* Does not alter the developer workflow for issues where there are no development dependencies.
* Provides clear structure for developer workflow for issues where development dependencies are identified.
* Does not preclude future changes to release process.
* Does not preclude the ability to release a breaking change "out of order" (akin to possibilities in Option 3), should it be necessary.

### Negative Consequences

* Some effort required to document branching strategy.
* Requires additional onboarding time to become familiar branching strategy.
* Requires process and tooling changes around PRs and the CI pipeline (see Pros and Cons of [Modified Gitflow](#modified-gitflow)).

## Pros and Cons of the Options

### Option 1: Current process: Formulate releases ad-hoc
* Good, because there is little process overhead.
* Good, because the release process is low commitment. Releases can be performed at any time based on discretion and convenience.
* Bad, because moderate maintainer overhead to keep track of development dependencies is required.
* Bad, because it does not provide clear focus/priority for backlog.

#### Specific Pros and Cons in combination with compatible branching strategies
* A. [Default](#default)
  * Good, because release process & branching strategy do not change.
  * Bad, because it does not address the [problem statement](#context-and-problem-statement) by not providing a clear path for navigating development dependencies.
* B. [Standard Gitflow](#standard-gitflow)
  * Bad, because it adds process overhead while not addressing the [problem statement](#context-and-problem-statement) by not providing a clear path for navigating development dependencies.
* C. [Modified Gitflow](#modified-gitflow)
  * Good, because it scales with contributors and development dependencies, directly addressing the problem statement. 

### Option 2: Release all changes immediately
* Good, because it lifts restrictions on the developer workflow that breaking or blocking changes would ordinarily cause.
* Good, because developer overhead is significantly reduced by removing decision energy around planning work.
* Good, because maintainer overhead is reduced by removing decision energy around planning releases.
* Good, because it facilitates a consistent release process. There are no conditional steps in the process, just release and increment the appropriate version accordingly.
* Good, because it eliminates the need for prioritizing the backlog.
* Bad, because the stability of the library for consumers becomes a secondary concern.
* Bad, because more frequent breaking releases.
* Bad, because being a consumer of `react-uswds` may feel chaotic to endure breaking releases between features.
* Bad, because the level of support in relation to USWDS becomes unclear as features may be released out of "chronological" order (i.e. `react-uswds` depends on 2.10.0 for a released 2.10.0 component before all 2.9.0 components are completed).
#### Specific Pros and Cons in combination with compatible branching strategies
* A. [Default](#default)
  * No major pros/cons uniquely associated with this branching strategy in combination with this release process beyond the pros/cons associated with this branching strategy generically.

### Option 3: Intentionally define and formulate release content in advance of each release
* Good, because the risk of surprises is reduced.
* Good, because it provides clear priority for issue backlog including the ability to prioritize foreseen development dependencies.
* Good, because it gives consumers a clear idea of when to expect certain features/fixes.
* Bad, because it requires planning, early and often.
* Bad, because it may require additional tracking tooling (or adjusting existing tooling) to accommodate.
* Bad, because, if releases are small and frequent (which is generally a good thing), process overhead becomes large.
* Bad, because this type of coordinated planning may be unfriendly to community contributions which are largely asynchronous. 
#### Specific Pros and Cons in combination with compatible branching strategies
  * A. [Default](#default)
    * Good, because despite a change to the release process, the branching process stays the same.
    * Bad, because it does not address the [problem statement](#context-and-problem-statement) by no providing a clear path for navigating development dependencies.
  * B. [Standard Gitflow](#standard-gitflow)
    * Bad, because it adds process overhead while not addressing the [problem statement](#context-and-problem-statement) by no providing a clear path for navigating development dependencies.
  * c. [Modified Gitflow](#modified-gitflow)
    * No major pros/cons uniquely associated with this branching strategy in combination with this release process beyond the pros/cons associated with this branching strategy generically.

### Option 4. Release and support multiple versions simultaneously
* Good, because Externally, provides the most flexible and up-to-date experience for consumers.
* Good, because Allows indescriminant work on any features at any time without worrying about impacting an unrelated upcoming release.
* Bad, because it reduces the clarity of development priorities.
* Bad, because it of massive overhead incurred through managing complex branching strategy *and* multiple versions.
* Bad, because it adds complexity to the release process by deviating from standard versioning.
* Bad, because the complex additional process makes the library unfriendly for new developers and broader community to contribute.
* #### Specific Pros and Cons in combination with compatible branching strategies
  * A. [Modified Gitflow](#modified-gitflow)
    * No major pros/cons uniquely associated with this branching strategy in combination with this release process beyond the pros/cons associated with this branching strategy generically.

## References

### Branching strategies

#### Default
* Characteristics
  * Current `react-uswds` branching strategy.
  * `main` is the primary develop branch.
  * Features are PRed to `main`.
  * Bugfixes are PRed to `main`.
  * Releases take place via short-lived release branches based off `main`, tagged on `main`.
* Pros and Cons
  * Good, because it is suitable for small project with limited time available.
  * Good, because, as the standard/out-of-the-box branching strategies for new git projects, it should be familiar to developers of all skill levels.
  * Bad, because it does not scale well when development dependencies exist and a large number of people are actively contributing.
  * Bad, because it does not provide clear direction for navigating changes to development dependencies.

#### Standard [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
* Characteristics
  * `main` becomes the "source of truth" branch, and typically only contains "production ready" code.
  * A `develop` branch is used as the primary base for PRs.
  * Features are generally PRed to `develop`.
  * Bugfixes are generally PRed to `develop`.
    * Bugfixes for releases may take place on a release branch if caught before the release is published.
    * Hotfixes are PRed to `main`.
  * Releases are supported by two flows, for two reasons
    1. Release: Via short-lived release branches based off `develop` but merged to `main` and tagged on `main`
        * This is the typical release flow for completed features and bugfixes from `develop`
    2. Hotfix: Via short-lived hotfix branches based off `main` and tagged on `main`.
        * This is the typical release flow for patching production releases without worrying about contaminating a production release with unreleased code from `develop`.
    * Releases are tagged on `main`
* Pros and Cons
  * Good, because it is well documented and widely understood (Documented solutions for branching intricacies using this strategy are likely to exist).
  * Good, because it covers the needs of most common development and release patterns.
  * Good, because it isolates tested code from the `develop` branch by intentionally keeping `main` clear of unfinished or untested work. (Would resolve issues like [#325](https://github.com/trussworks/react-uswds/issues/325)).
  * Good, because it offers the option of using built-in tooling via the git-flow wrapper for git.
  * Good, because it scales well for a large number of collaborators.
  * Good, because it is foundational to a variety of more tailored branching strategies.
  * Bad, because it is slightly more intricate than the [Default](#default) strategy.
  * Bad, because it involves an extra branch (`develop`) meaning more PRs and merges are necessary to manage code and releases.
  * Bad, because the generic Gitflow strategy does not cover *all* development or release needs, and is generally designed for extension, so it is a common trap to feel the need to contort in order to remain within the bounds of generic Gitflow guidelines.
  * Bad, because it does not provide out-of-the-box guidance for navigating development dependencies, and may not address the [problem statement](#context-and-problem-statement) without changes to the release process as well.

#### [Modified Gitflow](https://docs.google.com/document/d/1FGW1u3W6T1M-HSw8Jw3xcjM_8HdnOsV5rdbYphPuLxY/edit#)
* Characteristics
  * An extension of the [default branching strategy](#default) via tailored additions of [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) concepts to match development and release needs of the `react-uswds` project.
  * `main` is the primary develop branch.
  * Features are PRed to `main`.
  * Bugfixes are PRed to `main`.
  * Additional develop branches are the primary extension of the default branching strategy
  * Releases take place via short-lived release branches based off `main`, tagged on `main`.
    * As noted below, this strategy also supports custom releases from the additional develop branches, if desired.
* Pros and Cons
  * Good, because it scales extremely well to *both* custom developer workflows and custom release strategies
    * During times of low developer availability or periods without development dependencies the branching strategy can be scaled to be effectively identical to the [Default](#default) strategy.
    * Its flexibility supports multiple release strategies, ideal for future changes to that process.
  * Good, because it provides a clear process for navigating development dependencies and unblocking corresponding work.
  * Good, because it retains the familiar process of PRing off of and to a base develop branch.
  * Bad because, while based on well documented and widely understood concepts, this custom branching strategy would require additional documentation to make clear for new contributors.
  * Bad because, it increases developer overhead by adding more considerations to the development process (i.e. "What branch do I use as a base for the work I want to do?").
    * Bad, because it functions best with supporting automation which would likely be a custom development in this case.
  * Bad because, and this is a *big* one: existing CI and merge processes would need to be re-evaluated.
    * Additional `develop` branches should likely be protected in Github
    * PRs to `develop` branches should undergo the same CI pipeline we have today for `main`
    * PRs merging `develop` branches back towards `main` should *not* be squashed in order to preserve the commits against each `develop` branch

<!-- markdownlint-disable-file MD013 -->
