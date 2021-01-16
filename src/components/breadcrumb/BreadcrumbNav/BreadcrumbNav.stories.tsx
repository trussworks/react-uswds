import React from 'react'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import { BreadcrumbNav } from './BreadcrumbNav'

export default {
  title: 'Breadcrumb',
  component: BreadcrumbNav,
  parameters: {
    info: `
    Provide secondary navigation to help users understand where they are in a website.

    Source: https://designsystem.digital.gov/components/breadcrumb/
    `,
  },
}

export const DefaultBreadcrumb = (): React.ReactElement => (
  <BreadcrumbNav>
    <Breadcrumb label="Home" href="#" />
    <Breadcrumb label="Federal Contracting" href="#" />
    <Breadcrumb label="Contacting assistance programs" href="#" />
    <Breadcrumb
      label="Women-owned small business federal contracting program"
      current
    />
  </BreadcrumbNav>
)

export const BreadcrumbWithRdfaMetaData = (): React.ReactElement => (
  <BreadcrumbNav withMetaData>
    <Breadcrumb label="Home" href="#" />
    <Breadcrumb label="Federal Contracting" href="#" />
    <Breadcrumb label="Contacting assistance programs" href="#" />
    <Breadcrumb
      label="Women-owned small business federal contracting program"
      current
    />
  </BreadcrumbNav>
)

export const WrappingBreadcrumb = (): React.ReactElement => (
  <BreadcrumbNav variant="wrap">
    <Breadcrumb label="Home" href="#" />
    <Breadcrumb label="Federal Contracting" href="#" />
    <Breadcrumb label="Contacting assistance programs" href="#" />
    <Breadcrumb
      label="Women-owned small business federal contracting program"
      current
    />
  </BreadcrumbNav>
)
