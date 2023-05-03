import React from 'react'
import { InputSuffix } from './InputSuffix'
import { InputGroup } from '../InputGroup/InputGroup'
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
  <InputGroup>
    <TextInput id="search" name="search" type="search" />
    <InputSuffix>
      <Icon.Search />
    </InputSuffix>
  </InputGroup>
)

export const InputWithIconInputSuffixError = (): React.ReactElement => (
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
)

export const InputWithTextInputSuffix = (): React.ReactElement => (
  <InputGroup>
    <TextInput id="weight" name="weight" type="text" />
    <InputSuffix>lbs.</InputSuffix>
  </InputGroup>
)
