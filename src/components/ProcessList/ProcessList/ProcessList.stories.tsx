import React from 'react'

import { ProcessList } from './ProcessList'
import { ProcessListItem } from '../ProcessListItem/ProcessListItem'

export default {
  title: 'Components/ProcessList',
  component: ProcessList,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 ProcessList component

Source: https://designsystem.digital.gov/components/process-list
`,
      },
    },
  },
}

export const processListDefault = (): React.ReactElement => <ProcessList />

export const processListItemDefault = (): React.ReactElement => (
  <ProcessListItem />
)
