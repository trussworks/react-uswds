import React from 'react'
import { Label } from './Label'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Form } from '../Form/Form'

const meta = {
  title: 'Components/Form elements/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Label component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
  args: { htmlFor: 'testInput', children: 'Text input' },
  render: (args) => (
    <Form onSubmit={() => {}}>
      <Label {...args} />
    </Form>
  ),
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLabel: Story = {
  args: { children: 'Text input label' },
}

export const Error: Story = {
  args: {
    htmlFor: 'testInputError',
    error: true,
    children: 'Text input error',
  },
}

export const WithHint: Story = {
  args: {
    htmlFor: 'testInputHint',
    hint: <> (optional)</>,
  },
}

export const WithRequiredMarker: Story = {
  args: { htmlFor: 'testInputRequired', requiredMarker: true },
}
