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
}

export const defaultIcon = (): React.ReactElement => <Icon />
