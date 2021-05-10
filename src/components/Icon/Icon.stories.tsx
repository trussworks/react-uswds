import React from 'react'

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
  // argTypes: {}
}

export const add = (): React.ReactElement => <Icon name="add" />

export const accessibleForward = (): React.ReactElement => (
  <Icon name="accessible_forward" />
)

export const accessibilityNew = (): React.ReactElement => (
  <Icon name="accessibility_new" size={9} />
)
