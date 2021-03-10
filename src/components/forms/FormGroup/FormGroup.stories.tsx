import React from 'react'
import { FormGroup } from './FormGroup'

import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export default {
  title: 'Components/Form elements/FormGroup',
  component: FormGroup,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 FormGroup component

Source: https://designsystem.digital.gov/components/form-templates/
`,
      },
    },
  },
}

export const textInputFormGroup = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="input-type-text">Text input label</Label>
    <TextInput id="input-type-text" name="input-type-text" type="text" />
  </FormGroup>
)

export const textInputErrorFormGroup = (): React.ReactElement => (
  <FormGroup error>
    <Label htmlFor="input-type-text" error>
      Text input label
    </Label>
    <ErrorMessage>Helpful error message</ErrorMessage>
    <TextInput
      id="input-type-text"
      name="input-type-text"
      type="text"
      validationStatus="error"
    />
  </FormGroup>
)
