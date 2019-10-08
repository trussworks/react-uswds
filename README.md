# @trussworks/react-uswds

## Purpose

This is a front end component library whose aim is to develop [React](https://reactjs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

The initial (1.0.0) release of this library is currently in active development, but will ultimately follow [semantic versioning](https://semver.org/) conventions.

## Goals

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. For now we can publish directly from this git repo, but we may want to look into publishing on the [official npm registry](https://www.npmjs.com/) or the upcoming [Github package registry](https://github.com/features/package-registry) in the future.

In order for these components to be actually useful, they should follow best practices and baseline standards for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization in implementation (such as via React `props`). Therefore we should adhere to these development guidelines as much as possible:

- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this depedency can focus on integration and implementation.
- Provide thorough documentation (using a web interface such as Storybook) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

Once the above goals are substantively met, this project has a high potential to be open sourced, and provide value for people outside of Truss who want to use USWDS with React.

## Non-Goals

This is not meant to be a one-size-fits-all front end solution to every Truss web project. We are starting off with the very opinionated decision to cater towards a project that wants to use (or at least branch off of) USWDS 2.0, and is using React as a front end framework.

In addition to working towards the above outcomes, we are hoping to gain learnings around how to best abstract out UI code from implementation; help demonstrate and standardize front end code practices for other Truss projects; and develop and distribute a shared JS library to other teams.

## Contributing

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

Because this project exports a library that will be used by other projects as a dependency, it is important to make sure that updates follow a set of standard practices, and new versions are tagged with a description of changes. In order to ensure this, we use the following standards:

### Branching model

Summary from [a successful git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- **`master`**: Always reflects the current _production-ready_ version.
  - Each commit to `master` represents a release. See Release branches below.
- **`develop`**: The latest delivered development changes for the next release, a.k.a. the "integration branch". This is configured to be the main branch in this repo, and all development branches branch off of `develop` by default.
  - When the code on `develop` reaches a stable point and is ready to be released, it will be merged back into `master` via a release branch, and tagged with a version. This is described in more detail under "Release branches" below.
- **Feature branches**: Branch off of `develop` and merge back into `develop`. Naming convention is your initials + brief description of the feature.
  - Example: `sr-accordion-component`
  - It is recommended that during development, each engineer updates their feature branches from `develop` regularly, so that merging back in does not result in conflicts.
- **Release (candidate) branches**: Branch off of `develop` and merge back into both `develop` and `master`. These are created in preparation of a new version. Release notes and any other meta-data can be updated on this branch, as well as any smoke tests. Performing this work on a release branch frees up the `develop` branch to continue work.
  - Once a release branch has been created, any new work completed on `develop` will not be included until the next release.
  - Release versions are determined at the creation of a new release branch. See [versioning](#releasing) below.
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
- Production asset build (`yarn build`) and new assets need to be published somewhere.
  - This may need to be Github as long as we aren't publishing the package to an actual registry. The downside of this is it means committing assets into the repo.

## Usage

To use this library in another project, add the following line to your `package.json` dependencies:

```
devDependencies: {
  "@trussworks/react-uswds": "https://github.com/trussworks/react-uswds.git
}
```

Install using `yarn` or `npm install` (whichever your project uses).

You can then import modules using ES6 syntax:

```
import { Alert } from '@trussworks/react-uswds'
```

## Roadmap

- [x] Add lint configs and pre-commit hooks for contributing
- [x] Set up CI for running tests and linting
- [x] Add support for and convert existing component(s) to TypeScript
- [ ] Load and export USWDS CSS
- [ ] Load and export USWDS fonts/svgs/other assets
- [ ] Decide on and document git workflow for this project
- [ ] Decide on and document release workflow for the package
- [ ] Decide on and set up a React component test helper:
  - https://airbnb.io/enzyme/
  - https://testing-library.com/docs/react-testing-library/
- [ ] Enable `pkg.module` entrypoint for better module and tree shaking:
  - https://github.com/rollup/rollup/wiki/pkg.module
  - https://stackoverflow.com/questions/41289200/output-an-es-module-using-webpack
