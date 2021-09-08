/*  eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import { SiteAlert } from './SiteAlert'
import { Link } from '../Link/Link'

export default {
  title: 'Components/SiteAlert',
  component: SiteAlert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SiteAlert component

Source: http://designsystem.digital.gov/components/site-alert
`,
      },
    },
  },
  argTypes: {
    slim: {
      control: {
        type: 'boolean',
      },
    },
    showIcon: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['info', 'emergency'],
      },
      defaultValue: 'info',
    },
  },
}

type StorybookArguments = {
  slim: boolean
  showIcon: boolean
  variant: 'info' | 'emergency'
}

const infoHeading = 'Short alert message'

const additionalContext = (
  <p className="usa-alert__text">
    Additional context and followup information including{' '}
    <Link className="usa-link" href="#">
      a link
    </Link>
    .
  </p>
)

const emergencyHeading = 'Emergency alert message'

const infoWithList = (
  <ul className="usa-list">
    <li>
      The primary informational message and{` `}
      <Link href="#">a link</Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link href="#">and another link</Link>.
    </li>
    <li>A final informational message.</li>
  </ul>
)

const emergencyWithList = (
  <ul className="usa-list">
    <li>
      The primary emergency message and{` `}
      <Link href="#">a link</Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link href="#">and another link</Link>.
    </li>
    <li>A final emergency message.</li>
  </ul>
)

const shortAlertContent = (
  <p className="usa-alert__text">
    <strong>Short alert message.</strong>
    &nbsp;Additional context and followup information including&nbsp;
    <Link href="#">a link</Link>.
  </p>
)

export const standardInformationalSiteAlert = (): React.ReactElement => (
  <SiteAlert variant="info" heading={infoHeading}>
    {additionalContext}
  </SiteAlert>
)

export const standardEmergencySiteAlert = (): React.ReactElement => (
  <SiteAlert variant="emergency" heading={emergencyHeading}>
    {additionalContext}
  </SiteAlert>
)

export const informationalAlertWithNoHeader = (): React.ReactElement => (
  <SiteAlert variant="info">{shortAlertContent}</SiteAlert>
)

export const emergencyAlertWithNoHeader = (): React.ReactElement => (
  <SiteAlert variant="emergency">{shortAlertContent}</SiteAlert>
)

export const informationalAlertWithList = (): React.ReactElement => (
  <SiteAlert variant="info" heading={infoHeading}>
    {infoWithList}
  </SiteAlert>
)

export const emergencyAlertWithList = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    heading={emergencyHeading}
    aria-label="Site alert">
    {emergencyWithList}
  </SiteAlert>
)

export const slimEmergencyAlert = (): React.ReactElement => (
  <SiteAlert slim variant="emergency">
    {shortAlertContent}
  </SiteAlert>
)

export const emergencyAlertNoIcon = (): React.ReactElement => (
  <SiteAlert showIcon={false} variant="emergency">
    {shortAlertContent}
  </SiteAlert>
)

export const alertWithCustomControls = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <SiteAlert
    slim={argTypes.slim}
    showIcon={argTypes.showIcon}
    variant={argTypes.variant}>
    {shortAlertContent}
  </SiteAlert>
)

export const alertWithStringContent = (): React.ReactElement => (
  <SiteAlert variant="info">Short alert content</SiteAlert>
)

export const alertWithMultipleChildContent = (): React.ReactElement => (
  <SiteAlert variant="info">
    <p className="usa-alert__text">Alert content</p>
    <em>which includes</em> <strong>formatting tags</strong> and{' '}
    <Link href="#">links</Link>.
  </SiteAlert>
)
