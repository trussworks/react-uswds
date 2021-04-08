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
  // argTypes: {
  //   slim: {
  //     control: {
  //       type: 'radio',
  //       options: [true, false],
  //     },
  //   },
  // },
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
      <Link className="usa-link" href="#">
        a link
      </Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link className="usa-link" href="#">
        and another link
      </Link>
      .
    </li>
    <li>A final informational message.</li>
  </ul>
)

const emergencyWithList = (
  <ul className="usa-list">
    <li>
      The primary emergency message and{` `}
      <Link className="usa-link" href="#">
        a link
      </Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link className="usa-link" href="#">
        and another link
      </Link>
      .
    </li>
    <li>A final emergency message.</li>
  </ul>
)

const shortAlertContent = (
  <p className="usa-alert__text">
    <strong>Short alert message.</strong>
    &nbsp;Additional context and followup information including&nbsp;
    <Link className="usa-link" href="#">
      a link
    </Link>
    .
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

export const informationalAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="info" showIcon={false}>
    {shortAlertContent}
  </SiteAlert>
)
export const emergencyAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="emergency" showIcon={false}>
    {shortAlertContent}
  </SiteAlert>
)

export const slimInformationalAlert = (): React.ReactElement => (
  <SiteAlert variant="info" slim>
    {shortAlertContent}
  </SiteAlert>
)

export const slimEmergencyAlert = (): React.ReactElement => (
  <SiteAlert variant="emergency" slim>
    {shortAlertContent}
  </SiteAlert>
)

export const slimInformationalAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="info" slim showIcon={false}>
    {shortAlertContent}
  </SiteAlert>
)

export const slimEmergencyAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="emergency" slim showIcon={false}>
    {shortAlertContent}
  </SiteAlert>
)
