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
    Additional context and followup information (to include a link)
  </p>
)

const testEmergencyHeading = 'Emergency Alert Message'
const testEmergencyChildren = (
  <p className="usa-alert__text">
    Additional context and followup information (to include a link)
  </p>
)

export const standardInformationalSiteAlert = (): React.ReactElement => (
  <SiteAlert aria-label="Site alert" heading={testHeading} variant="info">
    {testChildren}
  </SiteAlert>
)

export const standardEmergencySiteAlert = (): React.ReactElement => (
  <SiteAlert
    aria-label="Site alert"
    heading={testEmergencyHeading}
    variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)

export const siteAlertNoHeader = (): React.ReactElement => (
  <SiteAlert
    aria-label="Site alert"
    heading={testEmergencyHeading}
    variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)

export const siteAlertWithList = (): React.ReactElement => (
  <SiteAlert
    aria-label="Site alert"
    heading={testEmergencyHeading}
    variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)

export const slimSiteAlert = (): React.ReactElement => (
  <SiteAlert
    aria-label="Site alert"
    heading={testEmergencyHeading}
    variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)

export const siteAlertNoIcon = (): React.ReactElement => (
  <SiteAlert
    aria-label="Site alert"
    heading={testEmergencyHeading}
    variant="emergency">
    {testEmergencyChildren}
  </SiteAlert>
)
