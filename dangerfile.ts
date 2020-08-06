import * as child from 'child_process'

import { danger, warn } from 'danger'

// Load all modified and new files
const allFiles = danger.git.modified_files.concat(danger.git.created_files)

const checkYarnAudit: () => void = () => {
  const result = child.spawnSync('yarn', [
    'audit',
    '--groups=dependencies',
    '--level=high',
    '--json',
  ])
  const output = result.stdout.toString().split('\n')
  const summary = JSON.parse(output[output.length - 2])
  if (
    'data' in summary &&
    'vulnerabilities' in summary.data &&
    'high' in summary.data.vulnerabilities &&
    'critical' in summary.data.vulnerabilities
  ) {
    if (
      summary.data.vulnerabilities.high > 0 ||
      summary.data.vulnerabilities.critical > 0
    ) {
      let issuesFound = 'Yarn Audit Issues Found:\n'
      output.forEach((rawAudit) => {
        try {
          const audit = JSON.parse(rawAudit)
          if (audit.type === 'auditAdvisory') {
            issuesFound +=
              `${audit.data.advisory.severity} - ${audit.data.advisory.title}\n` +
              `Package ${audit.data.advisory.module_name}\n` +
              `Patched in ${audit.data.advisory.patched_versions}\n` +
              `Dependency of ${audit.data.resolution.path.split('>')[0]}\n` +
              `Path ${audit.data.resolution.path.replace(/>/g, ' > ')}\n` +
              `More info ${audit.data.advisory.url}\n\n`
          }
        } catch {
          // not all outputs maybe json and that's okay
        }
      })
      fail(
        `${issuesFound}${summary.data.vulnerabilities.high} high vulnerabilities and ` +
          `${summary.data.vulnerabilities.critical} critical vulnerabilities found`
      )
    }
  } else {
    warn(`Couldn't find summary of vulnerabilities from yarn audit`)
  }
}

const checkPrDescription: () => void = () => {
  // No PR is too small to include a description of why you made a change
  if (danger.github && danger.github.pr.body.length < 10) {
    warn('Please include a description of your PR changes.')
  }
}

const checkCodeChanges: () => void = () => {
  // Request changes to package source code to also include changes to tests.
  const hasCodeChanges = allFiles.some((p) => !!p.match(/^src\/.*\.[jt]sx?/))
  const hasTestChanges = allFiles.some(
    (p) => !!p.match(/^src\/.*\.test\.[jt]sx?/)
  )
  if (hasCodeChanges && !hasTestChanges) {
    warn(
      'This PR does not include changes to tests, even though it affects source code.'
    )
  }

  // Make sure to export new components (src/components/*.[jt]sx)
  const hasNewComponents = danger.git.created_files.some(
    (p) => !!p.match(/^src\/components\/.*\.[jt]sx/)
  )
  const hasEntrypointChanges = allFiles.includes('src/index.ts')
  if (hasNewComponents && !hasEntrypointChanges) {
    const message = `It looks like there are new component (JSX/TSX) files, but the entrypoint (index.ts) has not changed.`
    const idea = `Did you forget to export new components from the library entrypoint?`
    warn(`${message} - <em>${idea}</em>`)
  }

  // Require new src/components files to include changes to storybook
  const hasStorybookChanges = allFiles.some(
    (p) => !!p.match(/^src\/.*\.stories\.[jt]sx?/)
  )

  if (hasCodeChanges && !hasStorybookChanges) {
    warn(
      'This PR does not include changes to storybook, even though it affects component code.'
    )
  }
}

const checkDependencyChanges: () => void = () => {
  // Request update of yarn.lock if package.json changed but yarn.lock isn't
  const packageChanged = allFiles.includes('package.json')
  const lockfileChanged = allFiles.includes('yarn.lock')
  if (packageChanged && !lockfileChanged) {
    danger.git
      .structuredDiffForFile('package.json')
      .then((sdiff) => {
        return sdiff.chunks.every((chunk) => {
          return chunk.changes
            .filter((change) => {
              // filter out changes that are context lines in the diff
              return change.type !== 'normal'
            })
            .every((change) => {
              // for every add/del, is the only change to the version?
              return change.content.match(/"version":/)
            })
        })
      })
      .then((onlyVersionChanges) => {
        // If the only thing that changed is the version, it is ok if
        // yarn.lock didn't change
        if (!onlyVersionChanges) {
          const message =
            'Changes were made to package.json, but not to yarn.lock'
          const idea = 'Perhaps you need to run `yarn install`?'
          warn(`${message} - <i>${idea}</i>`)
        }
      })
  }
}

// skip these checks if PR is by any bot (e.g. dependabot), if we
// don't have a github object let it run also since we are local
if (!danger.github || (danger.github && danger.github.pr.user.type !== 'Bot')) {
  checkYarnAudit()
  checkPrDescription()

  checkCodeChanges()
  checkDependencyChanges()
}
