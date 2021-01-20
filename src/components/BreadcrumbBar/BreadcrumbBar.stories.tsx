import React from 'react'
import { BreadcrumbBar } from './BreadcrumbBar'

export default {
  title: 'Breadcrumb',
  component: BreadcrumbBar,
  parameters: {
    info: `
    Provide secondary navigation to help users understand where they are in a website.

    Source: https://designsystem.digital.gov/components/breadcrumb/
    `,
  },
}

const sampleBreadcrumbs = [
  { pageName: 'Home', href: '#' },
  { pageName: 'Federal Contracting', href: '#' },
  { pageName: 'Contacting assistance programs', href: '#' },
]

const sampleCurrentPageName =
  'Women-owned small business federal contracting program'

export const DefaultBreadcrumb = (): React.ReactElement => (
  <BreadcrumbBar
    pageHierarchy={sampleBreadcrumbs}
    pageName={sampleCurrentPageName}
  />
)

export const BreadcrumbWithRdfaMetaData = (): React.ReactElement => (
  <BreadcrumbBar
    withMetaData
    pageHierarchy={sampleBreadcrumbs}
    pageName={sampleCurrentPageName}
  />
)

export const WrappingBreadcrumb = (): React.ReactElement => (
  <BreadcrumbBar
    variant="wrap"
    pageHierarchy={sampleBreadcrumbs}
    pageName={sampleCurrentPageName}
  />
)
