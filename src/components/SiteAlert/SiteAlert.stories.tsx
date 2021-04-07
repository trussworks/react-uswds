/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */

import React from 'react'

import { SiteAlert } from './SiteAlert'

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
}

const infoHeading = 'Short alert message'

const additionalContext = (
  <p className="usa-alert__text">
    Additional context and followup information including{' '}
    <a className="usa-link" href="#">
      a link
    </a>
    .
  </p>
)

const emergencyHeading = 'Emergency alert message'

const alertWithList = (
  <ul className="usa-list">
    <li>
      The primary emergency message and{` `}
      <a className="usa-link" href="#">
        a link
      </a>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <a className="usa-link" href="#">
        and another link
      </a>
      .
    </li>
    <li>A final emergency message.</li>
  </ul>
)

const shortAlert = (
  <p className="usa-alert__text">
    <strong>Short alert message.</strong>
    &nbsp;Additional context and followup information including&nbsp;
    <a className="usa-link" href="#">
      a link
    </a>
    .
  </p>
)

export const standardInformationalSiteAlert = (): React.ReactElement => (
  <SiteAlert variant="info" heading={infoHeading} aria-label="Site alert">
    {additionalContext}
  </SiteAlert>
)

export const standardEmergencySiteAlert = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    heading={emergencyHeading}
    aria-label="Site alert">
    {additionalContext}
  </SiteAlert>
)

export const informationalAlertWithNoHeader = (): React.ReactElement => (
  <SiteAlert aria-label="Site alert" variant="info">
    {shortAlert}
  </SiteAlert>
)

export const emergencyAlertWithNoHeader = (): React.ReactElement => (
  <SiteAlert aria-label="Site alert" variant="emergency">
    {shortAlert}
  </SiteAlert>
)

export const informationalAlertWithList = (): React.ReactElement => (
  <SiteAlert variant="info" heading={emergencyHeading} aria-label="Site alert">
    {alertWithList}
  </SiteAlert>
)

export const emergencyAlertWithList = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    heading={emergencyHeading}
    aria-label="Site alert">
    {alertWithList}
  </SiteAlert>
)

export const informationalAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="info" showIcon={false} aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)
export const emergencyAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="emergency" showIcon={false} aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)

export const slimInformationalAlert = (): React.ReactElement => (
  <SiteAlert variant="info" slim={true} aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)

export const slimEmergencyAlert = (): React.ReactElement => (
  <SiteAlert variant="emergency" slim={true} aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)

export const slimInformationalAlertNoIcon = (): React.ReactElement => (
  <SiteAlert
    variant="info"
    slim={true}
    showIcon={false}
    aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)

export const slimEmergencyAlertNoIcon = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    slim={true}
    showIcon={false}
    aria-label="Site alert">
    {shortAlert}
  </SiteAlert>
)
