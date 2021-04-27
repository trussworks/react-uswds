import React from 'react'

import { Icon } from './Icon'

export default {
  title: 'Components / Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
###USWDS 2.0 Icon component

Source: https://designsystem.digital.gov/components/icon/
`,
      },
    },
  },
  // argTypes: {}
}

export const announcementIcon = (): React.ReactElement => (
  <Icon name="announcement" />
)

export const dotGovIcon = (): React.ReactElement => <Icon name="icon-dot-gov" />
