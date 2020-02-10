# Contributing

### Environment Setup

1. Clone this repo!

1. Install node 10 using homebrew. You may need to force link it, or add to your `$PATH` (see https://stackoverflow.com/a/41025729)

   ```
   ➜ brew install node@10
   ```

   Verify you are using the correct version:

   ```
   ➜ node -v
   v10.16.3
   ```

1. Use [yarn](https://yarnpkg.com) to manage JS packages.

   - [Install yarn](https://yarnpkg.com/en/docs/install) if you do not already have it.
   - Type `yarn` or `yarn install` inside the project directory to install dependencies. You will need to do this once after cloning the project, and continuously if the dependencies in `package.json` change.

1. Make sure you can run all of the available commands listed below with no errors.

### Available Commands

These should all be run from within the project directory.

- `yarn storybook`
  - Starts Storybook server and watches for changed files
  - This will most likely be what you use for active development of components
- `yarn test`
  - Starts Jest test runner
  - `yarn test:watch` is also available
  - Use `yarn test:coverage` to generate a coverage report
- `yarn build`
  - Builds files from `/src` and outputs to `/lib` using webpack and UMD library target
  - `yarn build:watch` is also available

## Development & Release Workflow

Because this project exports a library that will be used by other projects, it is important to make sure that updates follow a set of standard practices, and new versions are tagged with an accurate description of changes. In order to ensure this, we use the following standards:

### Branching model

Summary from [a successful git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- **`master`**: Always reflects the current _production-ready_ version.
  - Each commit to `master` represents a release (see "Release branches" below).
- **`develop`**: The latest delivered development changes for the next release, a.k.a. the "integration branch". This is configured to be the main branch in this repo, and all development branches branch off of `develop` by default.
  - When the code on `develop` reaches a stable point and is ready to be released, it will be merged back into `master` via a release branch, and tagged with a version. This is described in more detail under "Release branches" below.
- **Feature branches**: Branch off of `develop` and merge back into `develop`. Naming convention is your initials + brief description of the feature.
  - Example: `sr-accordion-component`
  - It is recommended that during development, each engineer updates their feature branches from `develop` regularly, so that merging back in does not result in conflicts.
- **Release (candidate) branches**: Branch off of `develop` and merge back into both `develop` and `master`. These are created in preparation of a new version. Release notes, version number, and any other meta-data should be updated on this branch, smoke tests should be run, and any relevant bug fixes can be made. Performing this work on a release branch frees up the `develop` branch to continue work.
  - Once a release branch has been created, any new work completed on `develop` will not be included until the next release.
  - Release versions are determined at the creation of a new release branch (see more on [versioning below](#releasing)).
  - Once the release branch is ready for production, it is merged into `master` and tagged with the version, as well as merged back into `develop`.
  - Naming convention is `release-` and the new version number. Example: `release-1.0.0`
- **Hotfix branches**: Branch off of `master` and merge back into both `develop` and `master`. When a bug makes its way into a release, sometimes an urgent fix is required immediately. Hotfix branches allow for small changes to be made to production releases, without having to pull in other work that has been ongoing in `develop`.
  - Once the fix has been completed and tested, this branch is treated identically to a release branch. It is merged into `master`, tagged with the new version, and also merged back into `develop`.
  - Naming convention is `fix-` and the new version number (usually a patch from the previous version number). Example: `fix-1.0.1`

### Passing Builds

In order to be eligible for merging, all branches must pass testing and linting standards. The following checks are in place:

- Prettier (auto-formatting) and eslint are run on _staged files_ as a pre-commit hook
  - For an optimal developer experience, it's recommended that you configure your editor to run linting/formatting inline.
- All tests must pass, and eslint is run on all files in CircleCI

### Releasing

Steps for a new release (these should be automated as much as possible):

- Bump version number, following [Semantic Versioning](https://semver.org/):
  > Given a version number MAJOR.MINOR.PATCH, increment the:
  >
  > - MAJOR version when you make incompatible API changes,
  > - MINOR version when you add functionality in a backwards compatible manner, and
  > - PATCH version when you make backwards compatible bug fixes.
- Update the [change log](../CHANGELOG.md)
- Create a production asset build (`yarn build`) and publish the assets somewhere
  - This may need to be Github as long as we aren't publishing the package to an actual registry. The downside of this is it means committing assets into the repo.
