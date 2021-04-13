# Increase ReactUSWDS version when updating USWDS version

- Status: Accepted
- Deciders: Maintainers
- Date: 2021-04-12

## Context and Problem Statement

As the primary driver of requirements and new development on this project, new releases of USWDS can often necessitate implementation changes of existing components in ReactUSWDS. USWDS is also listed as both a `devDependency` and `peerDependency` in this project, and these versions should always be in alignment. It is important that applications use the same version of USWDS that was used to build the version of ReactUSWDS they're using. A version mismatch may result in unexpected markup & CSS combinations.

Therefore, any time we decide to update the version of USWDS used in ReactUSWDS, we should expect to perform the following changes:

- Update the USWDS version listed in both `devDependencies` and `peerDependencies`
- Perform any API or implementation changes to existing components detailed in the USWDS release notes
  - For example, from [2.10.1](https://github.com/uswds/uswds/releases/tag/v2.10.1):
    > Use proper semantic markup for footer title: Now we're using a p instead of an h3 for usa-footer\_\_logo-heading since the name of the project or agency is hot a heading in this context.

The questions this ADR seeks to answer are:

- When performing a USWDS version update as described above, what kind of release should that result in for ReactUSWDS? (i.e., major / minor / patch)
  - At minimum, this update will always require users to also update their version of USWDS.
- Should USWDS version updates be timed and released in sequence with the components they implement?
  - For example, should we aim to release all components introduced in USWDS 2.9.0 before releasing the update to 2.10.0 and any of its components?

For reference, USWDS does mention semantic versioning in [their own release process documentation](https://github.com/uswds/uswds/wiki/Release-process#versioning), and documents breaking changes (constituting major releases) as follows:

> In most software projects, the "public API" corresponds to a single set of programming constructs, such as public classes or functions. Because the USWDS consists of tightly-bound HTML, CSS, and JavaScript, we must consider any "breaking" change to any of these as a change to the public API. For example, any of the following should trigger a major version increment:
>
> - Changing the name of any .usa- class name (documented or not)
> - Changing the way in which elements with .usa- class names are structured in HTML
> - Changing the HTML "API" for any of our interactive components, such as the accordion

## Decision Drivers

- We want to provide as many USWDS components as possible to the widest audience as possible, taking into account users who may be version-locked to a legacy USWDS version for whatever reason
- We don't want to impede development and release of USWDS components, and we aim to "catch up" to the current USWDS release eventually

## Considered Options

- Bump the ReactUSWDS major version when updating USWDS minor & major versions
- Bump the ReactUSWDS version with the same release type as USWDS
- Bump the ReactUSWDS version on a case-by-case basis

## Decision Outcome

Chosen option: **Bump the ReactUSWDS version with the same release type as USWDS _and_ always treat updating USWDS as its own issue.**

We made this decision because we want to be able to take some direction around relase type from USWDS itself, and in theory any updates in ReactUSWDS that result from a USWDS update should be similarly sized to the new USWDS version.

This decision also implies that work to implement USWDS features should be completed in sequential order of when that feature was released. For example, we should make sure ReactUSWDS has released a version that implements _all_ USWDS 2.9 components _before_ releasing any USWDS 2.10 components.

The discussion around this ADR resulted in another, more prevalent decision, which is that **updating USWDS versions should always be done as a discrete issue & PR, and _never_ coupled with other work.**

### Positive Consequences

- We don't have to worry about deciding what kind of update to release when updating our USWDS dependency to a new version.
- Most of the time, USWDS versions _should_ indicate how significant a change is.
- End users should be able to determine which version of ReactUSWDS includes which USWDS features because they will be released in the same order.

### Negative Consequences

- Since we'll be tying our versions somewhat to USWDS versions, we won't necessarily be able to easily release patches for previous versions of USWDS if needed.
- Sometimes USWDS release types don’t always seem to accurately indicate what kind of update it is (i.e., whether something is actually breaking or not), and this could result in our versions not accurately following the semantic versioning standard.
- We may occasionally block ourselves by requiring USWDS features be implemented and released in the same order they were released in USWDS (this can be mitigated by maintaining multiple develop branches for USWDS versions - see [the in-progress ADR about branching](https://github.com/trussworks/react-uswds/pull/1026)).

Ultimately, this decision is easily changed if we try this approach but discover it has unforeseen shortcomings. For example, if a USWDS patch or minor release somehow results in what feel like breaking changes for ReactUSWDS, where end users need to modify their code in order to maintain functionality, we should feel able to revisit this decision.

## Pros and Cons of the Options

### Bump the ReactUSWDS major version when updating USWDS minor & major versions

Any USWDS minor or major version updates will result in a new major update for ReactUSWDS.

Example: if we update the USWDS dependency in this project from 2.8.x to 2.9.x, we will issue a release from ReactUSWDS version 1.x.x to 2.x.x.

- Good, because it provides a consistent method of handling USWDS updates
- Good, because it will be easy to continuously support users who aren't able to update USWDS versions automatically (for example, if we need to add bug fixes to a legacy version)
- Bad, because not every minor USWDS update will necessarily introduce breaking changes
- Bad, because it doesn't provide guidance for how to handle USWDS patch updates

### Bump the ReactUSWDS version with the same release type as USWDS

Updating the USWDS dependency in this project will result in a ReactUSWDS version increase of the same type.

Examples:

- USWDS 2.10.0 -> USWDS 2.10.1 would result in ReactUSWDS 1.0.0 -> 1.0.1
- USWDS 2.10.1 -> USWDS 2.11.0 would result in ReactUSWDS 1.0.0 -> 1.1.0
- USWDS 2.11.0 -> USWDS 3.0.0 would result in ReactUSWDS 1.0.0 -> 2.0.0

Pros / Cons

- Good, because it's consistent with USWDS’s versioning
- Bad, because USWDS changes don't always mirror ReactUSWDS changes in level of significance

### Bump the ReactUSWDS version on a case-by-case basis

When updating the USWDS dependency in this project, we’ll decide what kind of ReactUSWDS release should result based on the significance of the changes involved.

- Good, because it will result in intentional updates to ReactUSWDS code whenever the USWDS version is updated
- Bad, because it may decrease consistency in how we handle USWDS updates

## Links <!-- optional -->

- Release and Branching strategy - [ADR-0002](https://github.com/trussworks/react-uswds/pull/1026)

<!-- markdownlint-disable-file MD013 -->
