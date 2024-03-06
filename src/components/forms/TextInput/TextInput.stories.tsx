import React from 'react'
import { TextInput } from './TextInput'

export default {
  title: 'Components/Text input',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 TextInput component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
}

export const DefaultTextInput = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="text" />
)

export const WithDefaultValue = (): React.ReactElement => (
  <TextInput
    id="input-value"
    name="input-value"
    type="text"
    defaultValue="Change me"
  />
)

export const WithPlaceholder = (): React.ReactElement => (
  <TextInput
    id="input-placeholder"
    name="input-placeholder"
    type="text"
    placeholder="Enter value"
  />
)

export const Error = (): React.ReactElement => (
  <TextInput
    id="input-error"
    name="input-error"
    type="text"
    validationStatus="error"
  />
)

export const Success = (): React.ReactElement => (
  <TextInput
    id="input-success"
    name="input-success"
    type="text"
    validationStatus="success"
  />
)

export const Disabled = (): React.ReactElement => (
  <TextInput id="input-disabled" name="input-disabled" type="text" disabled />
)

export const Readonly = (): React.ReactElement => (
  <TextInput id="input-readonly" name="input-readonly" type="text" readOnly />
)

export const Password = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="password" />
)
