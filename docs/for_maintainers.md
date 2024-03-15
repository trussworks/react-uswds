# For Maintainers

As of Truss TDR #95, Truss staff will be rotating maintainer responsibilities for ReactUSWDS.

## Overview

### Basic goal

This role is intended to support sustainable project maintainorship of `@trussworks/react-uswds` and provide standard way to step in and out of leadership. Maintainer responsibilities are outlined below. Please note, maintainers do not need to be the primary contributors to the repository to fulfill these responsibilities.

### Commitment

The rotation lasts for a period of three months (one quarter).  The maintainer is expected to spend 15 hours/monthly on these duties. It is up to the individual to decide when to place this time on their calendars, but it needs to be spread throughout the weeks so that the project receives continuous attention. The recommendation is to spend 3-4 hours per week.

### Billing

This will be Truss billable work for Truss staff, assuming your project teams uses this library in your codebase.

## Responsibilities

### Support users of the library

- Watch and moderate [discussions](https://github.com/trussworks/react-uswds/discussions) on Github in alignment with [Truss values](https://truss.works/values)
- Respond to initial issues and questions on the repo, ideally within ~ one week
- Encourage outside contributors to put up PRs
- Ensure storybook is deployed and up to date
- Ensure issues are closed when finished
- Ensure documentation is up to date and typo-free

### Support developers working on the library

- Advocate for closing long standing pull requests.
- Triage incoming issues, ensure they have the right labels, and announce issues that are time sensitive to #react-uswds Truss slack channel
- Watch [@uswds/uswds](https://github.com/uswds/uswds) for updates, create new issues in @trussworks/react-uswds as needed
- Mitigate the impact of breaking changes by seeking community and Trussel input, combining multiple breaking changes into the same release, and preceding its release with a non-breaking change using [withDeprecationWarning](../src/components/hoc/withDeprecationWarning.tsx). In the latter case, ensure a new issue is created with a due date to finally remove the deprecated component.

### Manage our Github tools

- Keep Github-based project management tools up to date – e.g. ensure that Projects board reflects the next priority issues to be worked on.
- Keep Github labels and milestones up to date - e.g. check that “Good first issue” label has issues ready to work on
- Check that CI (testing, packaging, and deployment) is running without regular errors. If not, fix or else bring to #react-uswds Truss slack channel to resolve the issue.

### Act as Release Manager for new library releases

- Familiarize yourself with [conventional commits](https://www.conventionalcommits.org). We use this paradigm to automatically generate our release versioning and changelog.
- Advocate for timely releases, soon after changes merged.
- Make releases following the steps in our [releasing documentation](./releasing.md).
- Announce when releases start and finish in #react-uswds Truss slack channel

### If things are slow...

Feel free to contribute to library with your time!

## Tips and tricks

### Onboarding and offboarding

- See [for_trussels.md](for_trussels.md) for detailed onboarding instructions
- TL;DR Add and remove yourself from "Active Maintainers" list in the [readme](../README.md) at the beginning and end of your term  and announce in #react-uswds

### Addressing Security Alerts

Typically any security alerts we receive will be related to third-party dependencies. This repo is currently configured so that Dependabot will automatically open PRs that fix dependency vulnerabilities, so ideally most of the time manual intervention is not needed. There may also be periods of time during which an alert is issued, but the related dependencies have not yet updated -- in this case, we usually choose to accept the risk of waiting until the updates have been released. However, if an exceptional case comes up -- such as a high severity vulnerability or even a vulnerability within this library -- and you aren't sure how to handle it, you can ask for help in one of the following Truss Slack channels (in order of relevance): #react-uswds, #g-frontend, #infrasec, #engineering
