import * as child from 'child_process'

import { danger, fail, schedule, warn } from 'danger'

// README:
// This parses the structure of the `npm audit --json` response (auditReportVersion 2),
// but that response has no schema and is subject to change, so this might break with npm version upgrades
// The TS types below correspond to what the shape of the json-ified audit report looks like at the time of this commit.

// Only run on PRs from non-bots
const shouldRun = !!danger.github?.pr && danger.github.pr.user.type !== 'Bot'

// Load all modified and new files
const allFiles = (danger.git.modified_files ?? []).concat(
  danger.git.created_files
)

type NpmAuditMetaData = Partial<{
  vulnerabilities: {
    info: number
    low: number
    moderate: number
    high: number
    critical: number
    total: number
  }
}>

// Advisory details appear in a vulnerability's `via` array; entries that are
// plain strings instead point at the transitive dependency causing the issue
type NpmAuditAdvisory = Partial<{
  source: number | null
  name: string | null
  dependency: string | null
  title: string | null
  url: string | null
  severity: string | null
  cwe: string[] | null
  cvss: object | null
  range: string | null
}>

type NpmAuditVulnerability = Partial<{
  name: string | null
  severity: string | null
  isDirect: boolean | null
  via: (NpmAuditAdvisory | string)[] | null
  effects: string[] | null
  range: string | null
  nodes: string[] | null
  fixAvailable: boolean | object | null
}>

type NpmAuditOutput = Partial<{
  auditReportVersion: number
  vulnerabilities: Record<string, NpmAuditVulnerability>
  metadata: NpmAuditMetaData
}>

const checkNpmAudit: () => void = () => {
  const result = child.spawnSync('npm', ['audit', '--omit=dev', '--json'])
  const output = result.stdout.toString()
  const summary = JSON.parse(output) as NpmAuditOutput

  if (!summary.metadata?.vulnerabilities || !summary.vulnerabilities) {
    warn(
      'Unable to parse the npm audit response.\n' +
        'dangerfile.ts likely needs updating'
    )
    return
  }

  const highVulnerabilities = summary.metadata.vulnerabilities.high || 0
  const criticalVulnerabilities = summary.metadata.vulnerabilities.critical || 0
  if (highVulnerabilities > 0 || criticalVulnerabilities > 0) {
    let issuesFound = 'npm Audit Issues Found:\n'
    Object.values(summary.vulnerabilities)
      .filter(
        (vulnerability) =>
          vulnerability.severity === 'high' ||
          vulnerability.severity === 'critical'
      )
      .forEach((vulnerability) => {
        const advisories = (vulnerability.via ?? []).filter(
          (via): via is NpmAuditAdvisory =>
            typeof via !== 'string' &&
            (via.severity === 'high' || via.severity === 'critical')
        )
        advisories.forEach((advisory) => {
          issuesFound +=
            `${advisory.severity} - ${advisory.title}\n` +
            `Package ${advisory.dependency}\n` +
            `Vulnerable versions ${advisory.range}\n` +
            `More info ${advisory.url}\n\n` +
            `(🤖If this output looks weird, see dangerfile.ts to fix)\n\n`
        })
      })
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
  const hasSourceCodeChanges = allFiles.some(
    (p) => !!p.match(/^src\/.((?!\.(stories|test)\.).)*\.[jt]sx?/)
  )
  const hasTestChanges = allFiles.some(
    (p) => !!p.match(/^src\/.*\.test\.[jt]sx?/)
  )
  const hasStorybookChanges = allFiles.some(
    (p) => !!p.match(/^src\/.*\.stories\.[jt]sx?/)
  )
  if (hasSourceCodeChanges && !hasTestChanges) {
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
  if (hasSourceCodeChanges && !hasStorybookChanges) {
    warn(
      'This PR does not include changes to storybook, even though it affects component code.'
    )
  }
}

const checkDependencyChanges: () => void = () => {
  // Request update of package-lock.json if package.json changed but package-lock.json isn't
  const packageChanged = allFiles.includes('package.json')
  const lockfileChanged = allFiles.includes('package-lock.json')
  if (packageChanged && !lockfileChanged) {
    schedule(
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
          // package-lock.json didn't change
          if (!onlyVersionChanges) {
            const message =
              'Changes were made to package.json, but not to package-lock.json'
            const idea = 'Perhaps you need to run `npm install`?'
            warn(`${message} - <i>${idea}</i>`)
          }
        })
    )
  }
}

// Check for any changes to the contributors section of package.json
const checkContributorsChanges: () => Promise<void> = async () => {
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
}
schedule(checkContributorsChanges())

// skip these checks if PR is by any bot (e.g. dependabot), if we
// don't have a github object let it run also since we are local
if (shouldRun) {
  checkNpmAudit()
  checkPrDescription()

  checkCodeChanges()
  checkDependencyChanges()
}
