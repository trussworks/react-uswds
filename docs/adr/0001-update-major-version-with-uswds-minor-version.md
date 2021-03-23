# Increase ReactUSWDS version when updating USWDS version

- Status: proposed
- Deciders: Maintainers
- Date: 2021-03-21

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

TK

Chosen option: "[option 1]", because [justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force force | … | comes out best (see below)].

### Positive Consequences <!-- optional -->

- [e.g., improvement of quality attribute satisfaction, follow-up decisions required, …]
- …

### Negative Consequences <!-- optional -->

- [e.g., compromising quality attribute, follow-up decisions required, …]
- …

## Pros and Cons of the Options <!-- optional -->

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

- [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
- … <!-- numbers of links can vary -->

<!-- markdownlint-disable-file MD013 -->
