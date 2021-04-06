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

export const siteAlertDefault = (): React.ReactElement => <SiteAlert />
