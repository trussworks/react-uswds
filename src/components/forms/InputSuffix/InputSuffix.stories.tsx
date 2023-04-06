import React from 'react'
import { InputSuffix } from './InputSuffix'
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
    <div className="usa-input-group">
      <TextInput id="search" name="search" type="search" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </div>
  </FormGroup>
)

export const InputWithIconInputSuffixError = (): React.ReactElement => (
  <FormGroup>
    <div className="usa-input-group usa-input-group--error">
      <TextInput
        id="search"
        name="search"
        type="search"
        validationStatus="error"
      />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </div>
  </FormGroup>
)

export const InputWithTextInputSuffix = (): React.ReactElement => (
  <FormGroup>
    <div className="usa-input-group usa-input-group--sm">
      <TextInput id="weight" name="weight" type="text" />
      <InputSuffix>lbs.</InputSuffix>
    </div>
  </FormGroup>
)
