# Contributing

### Environment Setup

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

## Development & Release Workflow

### Feature branches

When starting work on a new issue, branch off `develop` using the naming convention: `{your initials or username}-{summary}-{issue #}`

For example: `sr-accordion-component-112`

### Conventional Commits

This project uses a few tools to help standardize contributions and a streamlined release flow:

- [`commitlint`](https://github.com/conventional-changelog/commitlint) git hook, using the [conventional commits config](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- [`commitizen`](https://commitizen.github.io/cz-cli/) CLI for making it easy to write standard commit messages
  - You can use `yarn commit` instead of `git commit` to start the commitizen prompt

### Passing Builds

In order to be eligible for merging, all branches must pass testing and linting standards. The following checks are in place:

- Prettier (auto-formatting) and eslint are run on _staged files_ as a pre-commit hook
  - For an optimal developer experience, it's recommended that you configure your editor to run linting/formatting inline.
- All tests must pass, and eslint is run on all files in CircleCI

### Merge to develop

When your branch is ready for review, open a PR into `develop` and request reviews from relevant team members. Reviews from codeowners will automatically be requested. Address any failing tests, lint errors, PR feedback, etc., and once your branch is approved you can squash & merge it into `develop`.

Passing `develop` builds will automatically be published to the `next` tag on NPM. This allows users to easily test out the latest version in their applications, which may be unstable.

### Releasing

Steps for a new release (these are in the process of being automated):

1. Check out `develop` and make sure you have pulled down the latest changes.

1. Run `yarn release` which uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to:

   - Determine the new version based on new commits.
   - Generate a new entry in the changelog with the version, release notes, and today's date.
   - Commit all of the above changes and create a new tag

1. Push changes to a new branch following the naming pattern: `release-<version>`

   - For example: `git checkout -b release-1.1.0`

1. Open a PR for the release branch against **`master`** (not `develop`, which is the default branch), and ask for approvals from stakeholders, perform testing on applications, etc. Any hot fixes from testing or PR feedback can be made to the release branch directly if appropriate.

   ![image](./release_PR.png)

1. Once the release PR is approved, complete the release by merging into master, and creating a release on Github (https://github.com/trussworks/react-uswds/releases). Immediately merge master into develop so that develop is up to date with the new version.

1. Finally, publish the new package to npm. You can do a dry run with:

   ```
   npm publish --dry-run
   ```

   This will output the resulting .tar package without actually publishing it to the npm registry. If everything looks good, you can then run:

   ```
   npm publish
   ```

   Publishing access is limited to package owners. If you need access and don't have it, please contact `@npm-admins` on Truss Slack.
