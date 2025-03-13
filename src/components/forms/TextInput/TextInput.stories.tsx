import React from 'react'
import { TextInput } from './TextInput'
import { Label } from '../Label/Label'

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

const Template = ({ ...args }) => (
  <>
    <Label htmlFor="input-type-text">Input label</Label>
    <TextInput
      id="input-type-text"
      name="input-type-text"
      type={args.type || 'text'}
      {...args}
    />
  </>
)

export const Basic = {
  render: Template,
}

export const WithDefaultValue = {
  render: Template,
  args: { defaultValue: 'Change me' },
}

export const WithPlaceholder = {
  render: Template,
  args: { placeholder: 'Enter value' },
}

export const Error = {
  render: Template,
  args: { validationStatus: 'error' },
}

export const Success = {
  render: Template,
  args: { validationStatus: 'success' },
}

export const Readonly = {
  render: Template,
  args: { readOnly: true },
}

export const Password = {
  render: Template,
  args: { type: 'password' },
}
