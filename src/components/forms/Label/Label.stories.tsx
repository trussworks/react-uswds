import React from 'react'
import { Label } from './Label'
import { RequiredMarker } from './RequiredMarker'

export default {
  title: 'Components/Form elements/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Label component

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

export const withRequiredMarker = (): React.ReactElement => (
  <Label htmlFor="testInputRequired" requiredMarker>
    Text input
  </Label>
)
