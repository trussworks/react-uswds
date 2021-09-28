import React from 'react'

import { IconAccessibilityNew } from './Icons'

export default {
  title: 'Components/Icons',
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
      defaultValue: 4,
    },
  },
}

export const accessibilityNew = (argTypes): React.ReactElement => (
  <IconAccessibilityNew size={argTypes.size} />
)
