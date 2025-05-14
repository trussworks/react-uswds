import * as child from 'child_process'

import { danger, fail, schedule, warn } from 'danger'

// README:
// This parses the structure of the `yarn npm audit` response, but that response has no schema and is subject to change, so this might break with yarn version upgrades
// The TS types below correspond to what the shape of the json-ified audit report looks like at the time of this commit.

// Only run on PRs from non-bots
const shouldRun = !!danger.github?.pr && danger.github.pr.user.type !== 'Bot'

// Load all modified and new files
const allFiles = (danger.git.modified_files ?? []).concat(
  danger.git.created_files
)

type YarnAuditMetaData = Partial<{
  vulnerabilities: {
    info: number
    low: number
    moderate: number
    high: number
    critical: number
  }
  dependencies: number
  devDependencies: number
  optionalDependencies: number
  totalDependencies: number
}>

type YarnAuditAdvisoryDetail = Partial<{
  id: number | null
  title: string | null
  findings: [] | null
  references: string | null
  created: string | null
  overview: string | null
  cves: string[] | null
  access: string | null
  severity: string | null
  module_name: string | null
  vulnerable_versions: string | null
  github_advisory_id: string | null
  recommendation: string | null
  patched_versions: string | null
  updated: string | null
  cvss: object | null
  cwe: string[] | null
  url: string | null
}>

type YawnAuditOutput = Partial<{
  actions: []
  advisories: Record<string, YarnAuditAdvisoryDetail>
  muted: []
  metadata: YarnAuditMetaData
  dependencies: number
  devDependencies: number
  optionalDependencies: number
  totalDependencies: number
}>

const checkYarnAudit: () => void = () => {
  const result = child.spawnSync('yarn', [
    'npm',
    'audit',
    '--environment=production',
    '--severity=high',
    '--json',
  ])
  const output = result.stdout.toString()
  const summary = JSON.parse(output) as YawnAuditOutput

  if (!summary.metadata?.vulnerabilities || !summary.advisories) {
    warn(
      `Unable to parse the yarn npm audit response.\n" + 
      "dangerfile.ts likely needs updating`
    )
    return
  }

  const highVulnerabilities = summary.metadata.vulnerabilities.high || 0
  const criticalVulnerabilities = summary.metadata.vulnerabilities.critical || 0
  if (highVulnerabilities > 0 || criticalVulnerabilities > 0) {
    let issuesFound = 'Yarn Audit Issues Found:\n'
    if (summary.advisories) {
      Object.values(summary.advisories).forEach((advisory) => {
        issuesFound +=
          `${advisory.severity} - ${advisory.title}\n` +
          `Package ${advisory.module_name}\n` +
          `Patched in ${advisory.patched_versions}\n` +
          `More info ${advisory.url}\n\n` +
          `(🤖If this output looks weird, see dangerfile.ts to fix)\n\n`
      })
    }
    fail(
      `${issuesFound}${highVulnerabilities} high vulnerabilities and ` +
        `${criticalVulnerabilities} critical vulnerabilities found`
    )
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
        return sdiff?.chunks.every((chunk) => {
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

// Check for any changes to the contributors section of package.json
schedule(async () => {
  if (!shouldRun) {
    return
  }
  const pd = await danger.git.JSONDiffForFile('package.json')

  if (pd.contributors) {
    const message = 'Do not make changes to package.json around contributors.'
    const idea =
      'This project only uses .all-contributorsrc for tracking contributors.'
    fail(`${message} - <i>${idea}</i>`)
  }
})

// skip these checks if PR is by any bot (e.g. dependabot), if we
// don't have a github object let it run also since we are local
if (shouldRun) {
  checkYarnAudit()
  checkPrDescription()

  checkCodeChanges()
  checkDependencyChanges()
}
