import React from 'react'

import { icons } from './icons'
import { Icon } from './Icon'

export default {
  title: 'Components/Icon',
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
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9, undefined],
      },
      defaultValue: undefined,
    },
    name: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
      defaultValue: 'accessibilityNew',
    },
  },
}

export const iconWithControls = (argTypes): React.ReactElement => (
  <Icon name={argTypes.name} size={argTypes.size} />
)
