import React from 'react'
import { Label } from './Label'

export default {
  title: 'Components/Form elements/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Label component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
}

export const defaultLabel = (): React.ReactElement => (
  <Label htmlFor="testInput">Text input label</Label>
)

export const error = (): React.ReactElement => (
  <Label htmlFor="testInputError" error>
    Text input error
  </Label>
)

export const withHint = (): React.ReactElement => (
  <Label htmlFor="testInputHint" hint={<> (optional)</>}>
    Text input
  </Label>
)
