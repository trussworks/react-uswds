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

const testHeading = 'Short alert message'
const testChildren = (
  <p className="usa-alert__text">
    Additional context and followup information including <a href="#">a link</a>
    .
  </p>
)

const testEmergencyHeading = 'Emergency alert message'
const testEmergencyChildren = (
  <p className="usa-alert__text">
    Additional context and followup information including <a href="#">a link</a>
    .
  </p>
)

const testChildrenWithList = (
  <ul>
    <li>
      The primary emergency message and{` `}
      <a href="#">a link</a>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <a href="#">and another link</a>.
    </li>
    <li>A final emergency message.</li>
  </ul>
)

const testShortAlert = (
  <p className="usa-alert__text">
    <strong>Short alert message.</strong>
    &nbsp;Additional context and followup information including&nbsp;
    <a href="#">a link</a>.
  </p>
)

export const standardInformationalSiteAlert = (): React.ReactElement => (
  <SiteAlert variant="info" heading={testHeading} aria-label="Site alert">
    {testChildren}
  </SiteAlert>
)

export const standardEmergencySiteAlert = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    heading={testEmergencyHeading}
    aria-label="Site alert">
    {testEmergencyChildren}
  </SiteAlert>
)

export const siteAlertNoHeader = (): React.ReactElement => (
  <SiteAlert aria-label="Site alert" variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)

export const siteAlertWithList = (): React.ReactElement => (
  <SiteAlert
    variant="emergency"
    heading={testEmergencyHeading}
    aria-label="Site alert">
    {testChildrenWithList}
  </SiteAlert>
)

export const slimSiteAlert = (): React.ReactElement => (
  <SiteAlert variant="emergency" slim={true} aria-label="Site alert">
    {testShortAlert}
  </SiteAlert>
)

export const siteAlertNoIcon = (): React.ReactElement => (
  <SiteAlert variant="emergency" showIcon={false} aria-label="Site alert">
    {testShortAlert}
  </SiteAlert>
)
