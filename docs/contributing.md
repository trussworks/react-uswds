# Contributing

We are glad you are interested to contribute to this project! Please make sure you've seen the [README](../README.md) and [license](../README.md#license) for this project before continuing further. If you work for Truss, check out the [guide for Trussels](./for_trussels.md) as well.

We welcome contributions in the form of comments, issues, or pull requests with code changes. If you see an error, have a question, or want to share feedback open an issue to discuss. This repository is governed by the [Contributor Covenant](../CODE_OF_CONDUCT.md).

**Table of Contents**

- [Environment setup](#environment-setup)
  - [Available commands](#available-commands)
- [Development](#development)
  - [Working on an issue](#working-on-an-issue)
  - [General guidelines](#general-guidelines)
  - [Linting, formatting, & automated tests](#linting-formatting--automated-tests)
  - [Testing in an application](#testing-in-an-application)
  - [Opening & merging pull requests](#opening--merging-pull-requests)

## Environment setup

1. Use the node environment manager of your choice, but make sure you have the required version specified in `.node-version`. We recommend using [nodenv](https://github.com/nodenv/nodenv) to manage your node versions, but you can also use [homebrew](https://brew.sh/). More info can be found here: [how to install Node.js](https://nodejs.dev/how-to-install-nodejs)

2. Use [yarn](https://yarnpkg.com) to manage JS packages.

   - [Install yarn](https://yarnpkg.com/en/docs/install) if you do not already have it.
   - Type `yarn` or `yarn install` inside the project directory to install dependencies. You will need to do this once after cloning the project, and continuously if the dependencies in `package.json` change.

3. Clone this repo and make sure you can run all of the available commands listed below with no errors.

### Available commands

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
- `yarn example:install`
  - Installs dependencies for the example app. This must be run prior to viewing/developing the example application (located in `/example`).
  - Builds the library files from `/src` into `/lib`, and also runs `yarn install` in the `/example` directory
- `yarn example:start`
  - After installing dependencies, use this to start the example app dev server, so you can view the example app and also add to it.

## Development

### Working on an issue

To begin working on an issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress.". If there isn't an issue yet for what you want to work on, [please create one](https://github.com/trussworks/react-uswds/issues/new/choose).

Some issues are tagged with the [needs requirements](https://github.com/trussworks/react-uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22status%3A+needs+requirements%22) label, which usually indicates there is some ongoing discussion about the issue and it may not be ready to start development on yet.

Once you have an issue to work on, create a new branch off `main` using the naming convention:

`{your initials or username}-{summary}-{issue #}`

For example: `hw-accordion-component-112`

### General guidelines

- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this dependency can focus on integration and implementation.
- Provide thorough documentation (in Storybook and in the example app) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

More guidance for preferred React practices can be found in the [adding new components](./adding_new_components.md) documentation.

### Linting, formatting, & automated tests

Because this project exports a library that will be used by other projects, it is important that updates follow a set of standard practices. When you commit your changes, several hooks will run to check and format staged files. In order to be eligible for merging, all branches must pass the following automation.

- [Prettier](https://prettier.io/), [TypeScript compilation](https://www.typescriptlang.org/), [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/) are run on _staged files_ as a pre-commit hook/
  - For an optimal developer experience, it's recommended that you configure your editor to run linting & formatting inline.
- [dangerjs](https://github.com/danger/danger-js) is used to enforce several pull request standards, including:
  - Changes to package source code should include changes to tests.
  - New `src/components` files should include changes to storybook.
  - New `src/components` files should be exported from the package entrypoint.
  - Package dependency changes should include `yarn.lock` updates and
    `yarn audit` will be run by danger to ensure no high or critical
    vulnerabilities are found
- [Jest tests](https://jestjs.io/) are run in CI and must pass before the branch can be merged
- [Happo.io visual regression tests](https://docs.happo.io/docs/reviewing-diffs) are run CI against Storybook stories. All diffs must be approved before the branch can be merged. Developers with access (maintainers and many codeowners) log in to Happo.io account to approve/reject diffs.
- PR titles must follow conventional commits specification.
  - We use [`standard-version`](https://github.com/conventional-changelog/standard-version). This auto-generates version numbers and changelog based on commits. We [squash & merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits) PR commits, so the title must be correct.
  - The version number is determined based on the commit prefix -
    **[fix]** indicates a bug fix, **[feat]** indicates a minor bump.
    **[!]** or [BREAKING CHANGES] indicates a major bump. Other
    possibilities include **build**, **ci**, **chore**, **docs**,
    **perf**, **refactor**, **revert**, **style**, **test**. It is
    _strongly_ recommended you familiarize yourself with [conventional commits](https://www.conventionalcommits.org).
  - The **[WIP]** prefix can be used to indicate a pull request is still work in progress. In this case, the PR title is not validated and the pull request lint check remains pending.

Having issues? See [FAQs](./faqs.md).

### Testing in an application

It's important to test your changes in a real-life application instance, especially if you're working on a bugfix or issue that is specific to the needs of an application. There are a few ways to do this.

#### `yarn link`

Yarn provides the [`yarn link` command](https://classic.yarnpkg.com/en/docs/cli/link/) to symlink a specific package to a local version of that package. This can be very helpful if you're trying to do development in ReactUSWDS & test changes in an application simultaneously.

To use this, first run `yarn link` in your local ReactUSWDS directory:

```
cd /path/to/react-uswds
➜ yarn link
yarn link v1.22.4
success Registered "@trussworks/react-uswds".
info You can now run `yarn link "@trussworks/react-uswds"` in the projects where you want to use this package and it will be used instead.
```

Then, link the package in your application directory:

```
cd /path/to/your/application
➜ yarn link @trussworks/react-uswds
yarn link v1.22.4
success Using linked package for "@trussworks/react-uswds".
```

You can then run `yarn build:watch` in ReactUSWDS and your application's compiler at the same time, and when you save code changes in ReactUSWDS it will trigger a build of the package, which will then trigger a build of your application's code.

> **Warning:** Make sure to **unlink** the package once you're done making changes! It can be easy to forget you're using a linked package in your application, and commit changes without switching back to a released version of ReactUSWDS.

To unlink the package from your application code (you don't need to unlink your local ReactUSWDS code)
:

```
cd /path/to/your/application
➜ yarn unlink @trussworks/react-uswds
yarn unlink v1.22.4
success Removed linked package "@trussworks/react-uswds".
info You will need to run `yarn install --force` to re-install the package that was linked.

➜ yarn install --force
```

#### Install from a ReactUSWDS branch

Another option is to install a specific branch of ReactUSWDS to your application that hasn't been released yet. To do that, you will need to change the reference in your application's `package.json` file:

```
"@trussworks/react-uswds": "https://github.com/trussworks/react-uswds#name-of-branch",
```

After making that change, run `yarn install` to install that version of the package. This will also build the ReactUSWDS code so it can be used in your application as if it were being installed from NPM. You can verify the source of the package by looking in your application's `yarn.lock` file:

```
"@trussworks/react-uswds@https://github.com/trussworks/react-uswds":
  version "1.13.2"
  resolved "https://github.com/trussworks/react-uswds#92ea5f07f7212370165423ec09ed35eec3aa7e58"
```

The important thing to note here is that `resolved` is pointing to the Github repo instead of the package registry, and the SHA should match the last commit of the branch you're using.

The downside of this method is that if you need to make changes to ReactUSWDS, you will have to commit and push up the branch, and then run `yarn upgrade @trussworks/react-uswds` to install the newest changes in your application. If you're ever not sure if your application code is referencing the right version, you can always verify against the SHA shown in the `yarn.lock` file.

You can commit this change to your application code if you want to use a branch of ReactUSWDS for some time, but make sure to switch back to a released version once the branch is merged and released!

### Opening & merging pull requests

When your branch is ready for review, open a new pull request into `main` and request reviews from relevant team members. Reviews from codeowners will automatically be requested. Address any failing tests, lint errors, PR feedback, etc. Once the work is approved, it will be merged with **squash & merge**.

When opening the pull request, it's important to understand the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. **All pull requests opened into `main` must have a title that follows the [conventional commits spec](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)**. This generates an automated changelog entry and is later used to determine versioning for release. It is required to merge.

> Note: Currently our CI cannot run directly on external PRs (work from outside the Truss organization) and prevents merge. To manage this, we pull these PRs into a separate branch that a CODEOWNER creates, run automation, and merge from there. Your initial PR will be closed with a comment and your work will be merged instead from the related PR.

The format for PR commits is:

```
<type>(scope): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### `type`:

Required, must be one of the following:

- `build`: Changes that affect the build system or external dependencies (example scopes: webpack, npm)
- `chore`: Completing a task that has no effective code changes, such as updating the version and changelog for a release
- `ci`: Changes to our CI configuration files and scripts (example scopes: Circle, Github actions/workflows)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

#### `scope`:

Optional, can be one of the following:

- `deps`: Updating a package listed in dependencies
- `deps-dev`: Updating a package listed in devDependencies
- `release`: Releasing a new version
- `circleci`: Changes to CircleCI config and/or scripts
- `example`: Changes to the Example App only
- `storybook`: Changes to Storybook or stories files only

#### `body`:

Will default to a list of included commits since PRs are all squashed when merging. You can also add additional context to the body if needed.

#### `footer`:

Should link the PR to any issues it closes (see: ["Linking a pull request to an issue"](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)).

Example:

```
Closes #123
```

Should also include `BREAKING CHANGE:` if the commit includes any breaking changes. This will make sure the major version is automatically bumped when this commit is released.
