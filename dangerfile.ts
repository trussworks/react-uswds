import { includes } from 'lodash'
import { danger, warn } from 'danger'

// No PR is too small to include a description of why you made a change
if (danger.github && danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.')
}

// Load all modified and new files
const allFiles = danger.git.modified_files.concat(danger.git.created_files)

// Request changes to package source code to also include changes to tests.
const hasCodeChanges = allFiles.some((p) => !!p.match(/src\/.*\.[jt]sx?/))
const hasTestChanges = allFiles.some((p) => !!p.match(/src\/.*\.test\.[jt]sx?/))
if (hasCodeChanges && !hasTestChanges) {
  warn(
    'This PR does not include changes to tests, even though it affects source code.'
  )
}

// Make sure to export new components (src/components/*.[jt]sx)
const hasNewComponents = danger.git.created_files.some(
  (p) => !!p.match(/src\/components\/.*\.[jt]sx/)
)
const hasEntrypointChanges = includes(allFiles, 'index.ts')
if (hasNewComponents && !hasEntrypointChanges) {
  const message = `It looks like there are new component (JSX/TSX) files, but the entrypoint (index.ts) has not changed.`
  const idea = `Did you forget to export new components from the library entrypoint?`
  warn(`${message} - <em>${idea}</em>`)
}

// Require new src/components files to include changes to storybook
const hasStorybookChanges = allFiles.some(
  (p) => !!p.match(/src\/.*\.stories\.[jt]sx?/)
)

if (hasCodeChanges && !hasStorybookChanges) {
  warn(
    'This PR does not include changes to storybook, even though it affects component code.'
  )
}

// Request update of yarn.lock if package.json changed but yarn.lock isn't
const packageChanged = includes(allFiles, 'package.json')
const lockfileChanged = includes(allFiles, 'yarn.lock')
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock'
  const idea = 'Perhaps you need to run `yarn install`?'
  warn(`${message} - <i>${idea}</i>`)
}

// Ensure we have access to github for these checks
let isTrivial = false
let isYarnAuditMissing = false
if (danger.github) {
  const prBody = danger.github.pr.body

  isTrivial = includes(prBody + danger.github.pr.title, '#trivial')

  if (lockfileChanged && danger.github.pr.user.type == 'User') {
    isYarnAuditMissing = !(
      includes(prBody, 'vulnerabilities found:') &&
      includes(prBody, 'Packages audited:')
    )
  }
}

// Add a CHANGELOG entry for app changes
const hasChangelog = includes(danger.git.modified_files, 'CHANGELOG.md')

if (!hasChangelog && !isTrivial) {
  warn('Please add a changelog entry for your changes.')
}

// Encourage adding `yarn audit` output on package change
if (isYarnAuditMissing) {
  const message =
    'Changes were made to yarn.lock, but no plain text yarn audit output was found in PR description.'
  const idea =
    'Can you run `yarn audit` in your branch and paste the results inside a markdown code block?'
  warn(`${message} - <i>${idea}</i>`)
}
