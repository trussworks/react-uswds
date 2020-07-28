# Contributing

## Table of Contents

1. [Environment Setup](#environment-setup)
2. [Development](#development)
3. [Releasing](#releasing)

## Environment Setup

1. Clone this repo!

1. Use the node environment manager of your choice, but make sure you have the required version specified in `.node-version`. We recommend using [nodenv](https://github.com/nodenv/nodenv) to manage your node versions, but you can also use [homebrew](https://brew.sh/). More info can be found here: [how to install Node.js](https://nodejs.dev/how-to-install-nodejs)

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
- `yarn example:install`
  - Installs dependencies for the example app. This must be run prior to viewing/developing the example application (located in `/example`).
  - Builds the library files from `/src` into `/lib`, and also runs `yarn install` in the `/example` directory
- `yarn example:start`
  - After installing dependencies, use this to start the example app dev server, so you can view the example app and also add to it.

## Development

To start working on a new issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress." Create a new branch off `main` using the naming convention:

`{type}-{summary}-{issue #}`

For example: `feat-accordion-component-112`, `fix-accordion-component-112`

See [adding new components](./adding_new_components.md) to get ideas of where to start.

### Pull Requests

When your branch is ready for review, open a PR into `main` and request reviews from relevant team members. Reviews from codeowners will automatically be requested. Address any failing tests, lint errors, PR feedback, etc., and once your branch is approved you should **squash & merge**.

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. This standardizes contributions and streamlines the release flow. **All pull requests opened into `main` must have a title that follows the [conventional commits spec](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)** This generates an automated changelog entry and is required to merge.

### Dev Notes

Because this project exports a library that will be used by other projects, it is important that updates follow a set of standard practices. When you commit your changes, several hooks will run to check and format staged files. In order to be eligible for merging, all branches must pass testing and linting standards.

- [Prettier](https://prettier.io/), [TypeScript compilation](https://www.typescriptlang.org/), [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/) are run on _staged files_ as a pre-commit hook
  - For an optimal developer experience, it's recommended that you configure your editor to run linting & formatting inline.
  - These checks will also be run on all files in CI, and must pass before the branch can be merged
- [`standard-version`](https://github.com/conventional-changelog/standard-version) is used during releases to auto-generate version numbers and changelog based on PR title.
  - The version number is determined based on conventional commits -
    **[fix]** indicates a bug fix, **[feat]** indicates a minor bump.
    **[!]** or [BREAKING CHANGES] indicates a major bump. Other
    possibilities include **build**, **ci**, **chore**, **docs**,
    **perf**, **refactor**, **revert**, **style**, **test**.  It is
    *strongly* recommended you familiarize yourself with [conventional commits](https://www.conventionalcommits.org).
  - The **[WIP]** prefix can be used to indicate a pull request is still work in progress. In this case, the PR title is not validated and the pull request lint check remains pending.
- The project is configured to only allow [squash & merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits) PR commits.
- [dangerjs](https://github.com/danger/danger-js) is used to enforce several pull request standards, including:
  - Changes to package source code should include changes to tests.
  - New `src/components` files should include changes to storybook.
  - New `src/components` files should be exported from the package entrypoint.
  - Package dependency changes should include `yarn.lock` updates and
    `yarn audit` will be run by danger to ensure no high or critical
    vulnerabilities are found
- All [Jest tests](https://jestjs.io/) will be run in CI and must pass before the branch can be merged
- [Happo.io visual regression tests](https://docs.happo.io/docs/reviewing-diffs) will be run in CI and all diffs must be approved before the branch can be merged. Developers must have access to the Happo.io account to approve/reject diffs. If you work at Truss, log into Happo.io with your gmail and you will be able to approve/reject changes. Navigate to the happo link for instructions on how to review and approve diffs.

## Releasing

Steps for a new release (these are in the process of being automated):

1. Check out `main` and make sure you have pulled down the latest changes (`git fetch origin main --tags`)

2. Run `yarn release` which uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to:

   - Determine the new version based on new commits.
   - Generate a new entry in the changelog with the version, release notes, and today's date.
   - Commit all of the above changes with the message `chore(release): <version>`
   - Note: Creating a new tag is **skipped** (this will happen as part of the publish flow)

3. Push changes to a new branch following the naming pattern: `release-<version>`

   - For example: `git checkout -b release-1.1.0`

4. Open a PR for the release branch against `main`, with the changelog generated by the previous step included in the PR description. Resolve any conflicts.

   - PR title should be `chore(release): <version>`
   - Ask for approvals from stakeholders, perform testing on applications, etc.
   - Last minute bugfix from testing or PR feedback can be made. Use conventional commits syntax. For example: `fix: export Grid component`.
     - Add bugfix commits on top of the release. You will eventually squash and merge the PR as usual.
     - _For significant bugfix_
       - Redo the release. Reset your local release branch, add bugfix commits, rerun `yarn release`. The release chore commit should be the last commit on the branch. The fix will be included in the changelog. _Rebase and merge the PR in this special case._

![image](./release_PR.png)

1. Once the release PR is approved, complete the release and publish the new version (this should be automated by GH - TODO):
   - Merge the PR.
   - Create a new [**release tag**](https://github.com/trussworks/react-uswds/releases) pointed at `main` on Github.
     - Use the same notes as release PR.
   - Pull down latest `main` locally before publishing - `git fetch origin main --tags`
   - Publish the new package to npm: `npm publish`. You will be prompted for a MFA code.
     - Publishing access is limited to package owners. If you need access and don't have it, please contact `@npm-admins` on Truss Slack.
     - You may need to `npm login` first.
