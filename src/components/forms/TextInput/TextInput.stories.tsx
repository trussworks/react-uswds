import React from 'react'
import { TextInput } from './TextInput'
import { Label } from '../Label/Label'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
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
  args: {
    id: 'input-type-text',
    name: 'input-type-text',
    type: 'text',
  },
  render: (args) => (
    <>
      <Label htmlFor="input-type-text">Input label</Label>
      <TextInput {...args} />
    </>
  ),
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithDefaultValue: Story = {
  args: { defaultValue: 'Change me' },
}

export const WithPlaceholder: Story = {
  args: { placeholder: 'Enter value' },
}

export const Error: Story = {
  args: { validationStatus: 'error' },
}

export const Success: Story = {
  args: { validationStatus: 'success' },
}

export const Readonly: Story = {
  args: { readOnly: true },
}

export const Password: Story = {
  args: { type: 'password' },
}
