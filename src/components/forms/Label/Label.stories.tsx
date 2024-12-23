import React from 'react'
import { Label } from './Label'

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

export const DefaultLabel = (): React.ReactElement<any> => (
  <Label htmlFor="testInput">Text input label</Label>
)

export const Error = (): React.ReactElement<any> => (
  <Label htmlFor="testInputError" error>
    Text input error
  </Label>
)

export const WithHint = (): React.ReactElement<any> => (
  <Label htmlFor="testInputHint" hint={<> (optional)</>}>
    Text input
  </Label>
)

export const WithRequiredMarker = (): React.ReactElement<any> => (
  <Label htmlFor="testInputRequired" requiredMarker>
    Text input
  </Label>
)
