import React from 'react'
import { InputPrefix } from './InputPrefix'
import { IconCreditCard } from '../../Icon/Icons'
import { TextInput } from '../TextInput/TextInput'
import { FormGroup } from '../FormGroup/FormGroup'

export default {
  title: 'Components/Input prefix or suffix/InputPrefix',
  component: InputPrefix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
}

export const InputWithTextInputPrefix = (): React.ReactElement => (
  <FormGroup>
    <div className="usa-input-group">
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </div>
  </FormGroup>
)

export const InputWithTextInputPrefixError = (): React.ReactElement => (
  <FormGroup>
    <div className="usa-input-group usa-input-group--error">
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" validationStatus="error" />
    </div>
  </FormGroup>
)

export const InputWithIconInputPrefix = (): React.ReactElement => (
  <FormGroup>
    <div className="usa-input-group">
      <InputPrefix>
        <IconCreditCard />
      </InputPrefix>
      <TextInput id="card" name="card" type="text" />
    </div>
  </FormGroup>
)
