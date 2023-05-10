import React from 'react'
import { InputSuffix } from './InputSuffix'
import { InputGroup } from '../InputGroup/InputGroup'
import { FormGroup } from '../FormGroup/FormGroup'
import { TextInput } from '../TextInput/TextInput'
import { Icon } from '../../Icon/Icons'

export default {
  title: 'Components/Input prefix or suffix/InputSuffix',
  component: InputSuffix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputSuffix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
}

export const InputWithIconInputSuffix = (): React.ReactElement => (
  <FormGroup>
    <InputGroup>
      <TextInput id="search" name="search" type="search" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>
)

export const InputWithIconInputSuffixError = (): React.ReactElement => (
  <FormGroup>
    <InputGroup error>
      <TextInput
        id="search"
        name="search"
        type="search"
        validationStatus="error"
      />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>
)

export const InputWithTextInputSuffix = (): React.ReactElement => (
  <FormGroup>
    <InputGroup>
      <TextInput id="weight" name="weight" type="text" />
      <InputSuffix>lbs.</InputSuffix>
    </InputGroup>
  </FormGroup>
)
