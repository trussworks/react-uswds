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

export const dotGovIconWith = (): React.ReactElement => (
  <Icon name="icon-dot-gov">
    <SvgIconDotGov />
  </Icon>
)

export const dotGovIconWithout = (): React.ReactElement => (
  <Icon name="icon-dot-gov"></Icon>
)

export const iconPassedInName = (): React.ReactElement => (
  <Icon name="accessibility_new"></Icon>
)
