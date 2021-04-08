import React from 'react'

import { ProcessList } from './ProcessList'
// import { ProcessListItem } from '../ProcessListItem/ProcessListItem'

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

const testListItems = [
  <li key="one">some text</li>,
  <li key="two">some more text</li>,
  <li key="three">third item</li>,
]

export const processListDefault = (): React.ReactElement => (
  <ProcessList>{testListItems}</ProcessList>
)

export const processListNoTextCustomSizing = (): React.ReactElement => (
  <ProcessList>{testListItems}</ProcessList>
)

export const processListCustomSizing = (): React.ReactElement => (
  <ProcessList>{testListItems}</ProcessList>
)
