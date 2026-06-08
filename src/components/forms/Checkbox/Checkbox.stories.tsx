import React from 'react'
import { Checkbox } from './Checkbox'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Checkbox component

Source: https://designsystem.digital.gov/components/checkbox
`,
      },
    },
  },
  args: { id: 'checkbox', name: 'checkbox', label: 'My Checkbox' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCheckbox: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { indeterminate: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithRichLabel: Story = {
  args: { label: <strong>My Checkbox</strong> },
}

export const WithLabelDescription: Story = {
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  args: { tile: true },
}

export const TileWithLabelDescription: Story = {
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
