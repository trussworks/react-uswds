import React from 'react'

import { IconList } from './IconList'

export default {
  title: 'Components/IconList',
  component: IconList,
  parameters: {
    docs: {
      description: {
        component: `
###USWDS 2.0 IconList component
Source: https://designsystem.digital.gov/components/icon-list/
`,
      },
    },
  },
}

export const defaultIconList = (): React.ReactElement => (
  <IconList>list item</IconList>
)
