import { includes } from 'lodash';
import { danger, warn, fail } from 'danger';

// No PR is too small to include a description of why you made a change
if (danger.github && danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

// load all modified and new files
const allFiles = danger.git.modified_files.concat(danger.git.created_files);

// Request changes to package source code to also include changes to tests.
const hasCodeChanges = allFiles.some(p => !!p.match(/src\/.*\.[jt]sx?/));
const hasTestChanges = allFiles.some(p => !!p.match(/src\/.*\.test\.[jt]sx?/));
if (hasCodeChanges && !hasTestChanges) {
  warn('This PR does not include changes to tests, even though it affects source code.');
}

// Require new src/components files to include changes to storybook
const hasStorybookChanges = allFiles.some(p => !!p.match(/src\/.*\.stories\.[jt]sx?/));

if (hasCodeChanges && !hasStorybookChanges) {
  warn('This PR does not include changes to storybook, even though it affects component code.');
}

// Request update of yarn.lock if package.json changed but yarn.lock isn't
const packageChanged = includes(allFiles, 'package.json');
const lockfileChanged = includes(allFiles, 'yarn.lock');
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}

// ensure we have access to github for this check
let isTrivial = false;
if (danger.github) {
  isTrivial = includes((danger.github.pr.body + danger.github.pr.title), "#trivial")
}

// Add a CHANGELOG entry for app changes
const hasChangelog = includes(danger.git.modified_files, "CHANGELOG.md")

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.")
}
