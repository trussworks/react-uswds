# Contributing

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

## Development

To start working on a new issue, make sure you've assigned yourself to the issue in Github and marked it as "In Progress." Create a new branch off `develop` using the naming convention:

`{your initials or username}-{summary}-{issue #}`

For example: `sr-accordion-component-112`

Because this project exports a library that will be used by other projects, it is important to make sure that updates follow a set of standard practices, and new versions are tagged with an accurate description of changes. When you commit your changes, several hooks will run to check and format staged files. In order to be eligible for merging, all branches must pass testing and linting standards. Additionally, this project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification in order to standardize contributions and streamline the release flow.

- [Prettier](https://prettier.io/), [TypeScript compilation](https://www.typescriptlang.org/), [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/) are run on _staged files_ as a pre-commit hook
  - For an optimal developer experience, it's recommended that you configure your editor to run linting & formatting inline.
  - These checks will also be run on all files in CI, and must pass before the branch can be merged
- All pull requests opened into `develop` or `master` must have a title that follows the [conventional commits spec](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional). This generates an automated changelog entry and is required to merge. The [WIP] prefix can also be used to indicate a pull request is still work in progress. In this case,  the PR title is not validated and the pull request lint check remains pending.
- The project is configured to only allow [squash & merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits) PR commits.
  - We also have set up [`commitizen`](https://commitizen.github.io/cz-cli/) CLI for making it easy to write standard commit messages.
  - You can use `yarn commit` instead of `git commit` to start the commitizen prompt
- We also use [dangerjs](https://github.com/danger/danger-js) to enforce several pull request standards, including:
  - Changes to package source code should include changes to tests
  - New src/components files should include changes to storybook
  - Package dependency changes should include `yarn.lock` updates and `yarn audit` outputs
- All [Jest tests](https://jestjs.io/) will be run in CI and must pass before the branch can be merged
- [Happo.io visual regression tests](https://docs.happo.io/docs/reviewing-diffs) will be run in CI and all diffs must be approved before the branch can be merged. Developers must have access to the Happo.io account to approve/reject diffs. If you work at Truss, log into Happo.io with your gmail and you will be able to approve/reject changes. Navigate to the happo link for instructions on how to review and approve diffs.
- [`standard-version`](https://github.com/conventional-changelog/standard-version) is used during releases to auto-generate version numbers and changelog based on commit messages

When your branch is ready for review, open a PR into `develop` and request reviews from relevant team members. Reviews from codeowners will automatically be requested. Address any failing tests, lint errors, PR feedback, etc., and once your branch is approved you can squash & merge it into `develop`.

(TODO) Passing `develop` builds will automatically be published to the `next` tag on NPM. This allows users to easily test out the latest version in their applications, which may be unstable.

## Releasing

Steps for a new release (these are in the process of being automated):

1. Check out `develop` and make sure you have pulled down the latest changes.

1. Run `yarn release` which uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to:

   - Determine the new version based on new commits.
   - Generate a new entry in the changelog with the version, release notes, and today's date.
   - Commit all of the above changes
   - Note: Creating a new tag is **skipped** (this will happen as part of the publish flow)

1. Push changes to a new branch following the naming pattern: `release-<version>`

   - For example: `git checkout -b release-1.1.0`

1. Open a PR for the release branch against **`master`** (not `develop`, which is the default branch), with the new set of changes generated by the previous step included in the PR description. Ask for approvals from stakeholders, perform testing on applications, etc. Any hot fixes from testing or PR feedback can be made to the release branch directly if appropriate.

   ![image](./release_PR.png)

1. Once the release PR is approved, complete the release and publish the new version (this should be automated by GH - TODO):
   - Merge the PR into master
   - Create a release tag on Github (https://github.com/trussworks/react-uswds/releases)
   - Merge master into develop so that develop is up to date with the new version.
   - Finally, publish the new package to npm: `npm publish`
     - Publishing access is limited to package owners. If you need access and don't have it, please contact `@npm-admins` on Truss Slack.
