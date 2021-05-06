import React from 'react'

import { Icon } from './Icon'
import SvgIconDotGov from './icon-dot-gov-TEST'

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

export const dotGovIcon = (): React.ReactElement => (
  <Icon name="icon-dot-gov">
    <SvgIconDotGov />
  </Icon>
)

export const generatedDotGovIcon = (): React.ReactElement => <SvgIconDotGov />

export const accessibilityNew = (): React.ReactElement => (
  <Icon name="accessibility_new"></Icon>
)
