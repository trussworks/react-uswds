# Breaking changes

## How do we define "Breaking" changes?

In simplest terms, a breaking change can be defined as

> Any change that would require an existing consumer of React USWDS to make corresponding changes to their implementation for it to preserve all existing, properly functioning behavior.

## How do we designate breaking changes?

Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#examples)' type designator, `!` for any PR that includes one or more breaking changes.

Either at the time of merge (easiest, if the person merging the PR remembers) or when orchestrating a release (read: manually edit the changelog to include these details), ensure that the `squash and merge` commit message includes a note following the `BREAKING CHANGE: <description of breaking changes and/or how to resolve breakages>` pattern.

This ensures that breaking changes automatically result in React USWDS major version increments while also providing consumers of the library a way to migrate to the newest major version on their own.

## Examples of breaking changes

- Updating the USWDS version to a version that includes breaking changes ([more information here](https://github.com/trussworks/react-uswds/blob/main/docs/adr/0001-increase-react-uswds-version-when-updating-uswds-version.md))
- Dropping support for core dependency major versions (e.g. Node or React)
- Adding a new, required property to a component
- Changing the default behavior of a component such that preserving the previous default requires a code change
