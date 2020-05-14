import React from 'react'
import { DateInputGroup } from './DateInputGroup'

export default {
  title: 'Form/DateInputGroup',
  parameters: {
    info: `
USWDS 2.0 DateInput component

Source: https://designsystem.digital.gov/components/form-controls/#date-input
`,
  },
}

// TODO Determine if this is the way to display this component
export const defaultDateInputGroup = (): React.ReactElement => (
  <DateInputGroup>Test Date: 12-31-1999</DateInputGroup>
)
