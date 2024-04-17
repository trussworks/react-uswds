import React from 'react'
import InputPrefix from './InputPrefix'
import Icon from '../../Icon/Icons'
import TextInput from '../TextInput/TextInput'
import InputGroup from '../InputGroup/InputGroup'
import FormGroup from '../FormGroup/FormGroup'

export default {
  title: 'Components/Input prefix or suffix/InputPrefix',
  component: InputPrefix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
}

export const InputWithTextInputPrefix = (): React.ReactElement => (
  <FormGroup>
    <InputGroup>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </InputGroup>
  </FormGroup>
)

export const InputWithTextInputPrefixError = (): React.ReactElement => (
  <FormGroup>
    <InputGroup error>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" validationStatus="error" />
    </InputGroup>
  </FormGroup>
)

export const InputWithIconInputPrefix = (): React.ReactElement => (
  <FormGroup>
    <InputGroup>
      <InputPrefix>
        <Icon.CreditCard />
      </InputPrefix>
      <TextInput id="card" name="card" type="text" />
    </InputGroup>
  </FormGroup>
)
