import * as child from 'child_process'

import { danger, fail, schedule, warn } from 'danger'

// README:
// This parses the structure of the npm audit response, but that response has no schema and is subject to change, so this might break with npm version upgrades:
// https://github.com/orgs/community/discussions/153882#discussioncomment-12491480
// The TS types below correspond to what the shape of the json-ified audit report looks like at the time of this commit, which was found here:
// https://github.com/npm/npm-audit-report/blob/main/tap-snapshots/test-reporters-json.js-TAP.test.js

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
  }
  dependencies: number
  devDependencies: number
  optionalDependencies: number
  totalDependencies: number
}>

type NpmAdvisoryDetail = Partial<{
  id: number
  url: string
  title: string
  severity: string
  vulnerable_versions: string
}>

type NpmVulnerabilityDetail = Partial<{
  name: string
  severity: string
  via: NpmAdvisoryDetail[]
  effects: []
  range: string
  nodes: string[]
  fixAvailable: boolean
}>

type NpmAuditOutput = Partial<{
  actions: []
  advisories: object
  muted: []
  metadata: NpmAuditMetaData
  vulnerabilities: Record<string, NpmVulnerabilityDetail>
}>

type ConsolidatedAdvisoryDetails = {
  advisoryNames: string[]
  advisoryUrls: string[]
}

const checkYarnAudit: () => void = () => {
  const result = child.spawnSync('yarn', [
    'npm',
    'audit',
    '--environment=production',
    '--severity=high',
    '--json',
  ])
  const output = result.stdout.toString()
  const summary = JSON.parse(output) as NpmAuditOutput
  const highVulnerabilities = summary.metadata?.vulnerabilities?.high || 0
  const criticalVulnerabilities =
    summary.metadata?.vulnerabilities?.critical || 0
  if (highVulnerabilities > 0 || criticalVulnerabilities > 0) {
    let issuesFound = 'Yarn Audit Issues Found:\n'
    if (summary.vulnerabilities) {
      Object.values(summary.vulnerabilities).forEach(
        (npmVulnerabilityDetail) => {
          const { advisoryNames, advisoryUrls } = npmVulnerabilityDetail.via
            ? npmVulnerabilityDetail.via.reduce<ConsolidatedAdvisoryDetails>(
                (accumulator, currentValue) => {
                  if (currentValue.title) {
                    accumulator.advisoryNames.push(currentValue.title)
                  }

                  if (currentValue.url) {
                    accumulator.advisoryUrls.push(currentValue.url)
                  }

                  return accumulator
                },
                { advisoryNames: [], advisoryUrls: [] }
              )
            : {}
          issuesFound +=
            `${npmVulnerabilityDetail.severity} - ${advisoryNames}\n` +
            `Package ${npmVulnerabilityDetail.name}\n` +
            `Fix available? ${npmVulnerabilityDetail.fixAvailable}\n` +
            `Dependency of ${npmVulnerabilityDetail.nodes}\n` +
            `More info ${advisoryUrls}\n\n` +
            `(🤖If this output looks weird, see dangerfile.ts to fix)\n\n`
        }
      )
    }
    fail(
      `${issuesFound}${highVulnerabilities} high vulnerabilities and ` +
        `${criticalVulnerabilities} critical vulnerabilities found`
    )
  } else {
    warn(`Couldn't find summary of vulnerabilities from npm audit`)
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
