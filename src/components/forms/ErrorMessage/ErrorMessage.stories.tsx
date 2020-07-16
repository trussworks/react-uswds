import React from 'react'
import { ErrorMessage } from './ErrorMessage'

export default {
  title: 'Forms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    info: `
USWDS 2.0 ErrorMessage component

Source: https://designsystem.digital.gov/components/form-controls/
`,
  },
}

export const defaultErrorMessage = (): React.ReactElement => (
  <ErrorMessage>Helpful error message</ErrorMessage>
)
