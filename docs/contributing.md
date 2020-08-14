# Contributing

We are glad you are interested to contribute to this project! Please make sure you've seen the README and license for this project before continuing further. If you work for Truss, check out the [guide for Trussels](./docs/for_trussels.md) as well.

We welcome contributions in the form of comments, issues, or pull requests with code changes. If you see an error, have a question, or want to share feedback please use one of these formats to get in touch with us.

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Environment Setup](#environment-setup)
    - [Available Commands](#available-commands)
  - [Development](#development)
    - [Before You Start](#before-you-start)
    - [Pull Requests](#pull-requests)
    - [Guidelines](#guidelines)
    - [Linting, Testing, and Automation](#linting-testing-and-automation)

## Environment Setup

1. Use the node environment manager of your choice, but make sure you have the required version specified in `.node-version`. We recommend using [nodenv](https://github.com/nodenv/nodenv) to manage your node versions, but you can also use [homebrew](https://brew.sh/). More info can be found here: [how to install Node.js](https://nodejs.dev/how-to-install-nodejs)

2. Use [yarn](https://yarnpkg.com) to manage JS packages.

   - [Install yarn](https://yarnpkg.com/en/docs/install) if you do not already have it.
   - Type `yarn` or `yarn install` inside the project directory to install dependencies. You will need to do this once after cloning the project, and continuously if the dependencies in `package.json` change.

3. Clone this repo and make sure you can run all of the available commands listed below with no errors.

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
- `yarn example:install`
  - Installs dependencies for the example app. This must be run prior to viewing/developing the example application (located in `/example`).
  - Builds the library files from `/src` into `/lib`, and also runs `yarn install` in the `/example` directory
- `yarn example:start`
  - After installing dependencies, use this to start the example app dev server, so you can view the example app and also add to it.

## Development

### Before You Start

Make sure you understand the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. **All pull requests opened into `main` must have a title that follows the [conventional commits spec](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)** This generates an automated changelog entry and is later used to determine versioning for release. It is required to merge.

### Pull Requests

To being working on a issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress.". If there isn't an issue yet for what you want to work on, [please create one](https://github.com/trussworks/react-uswds/issues/new/choose).

Create a new branch off `main` using the naming convention:

`{your initials or username}-{summary}-{issue #}`

For example: `hw-accordion-component-112`, `hw-accordion-component-112`

When your branch is ready for review, open a PR into `main` and request reviews from relevant team members. Reviews from codeowners will automatically be requested. Address any failing tests, lint errors, PR feedback, etc. Once your branch is approved, the work will be merged with **squash & merge**.

### Guidelines

- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this dependency can focus on integration and implementation.
- Provide thorough documentation (in Storybook and in the example app) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

More guidance for preferred React practices can be found in the [adding new components](./adding_new_components.md) documentation.

### Linting, Testing, and Automation

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

Having issues? See [FAQs](./docs/faqs.md).
