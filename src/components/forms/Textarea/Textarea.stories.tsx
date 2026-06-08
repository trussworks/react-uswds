import React from 'react'
import { Textarea } from './Textarea'
import { Label } from '../Label/Label'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Textarea component

Source: https://designsystem.digital.gov/components/text-input
`,
      },
    },
  },
  args: { id: 'input-textarea', name: 'input-textarea' },
  render: (args) => (
    <>
      <Label htmlFor="input-textarea">Textarea label</Label>
      <Textarea {...args} />
    </>
  ),
} satisfies Meta<typeof Textarea>

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
  args: { error: true },
}

export const Success: Story = {
  args: { success: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Readonly: Story = {
  args: { defaultValue: 'Readonly value', readOnly: true },
}
