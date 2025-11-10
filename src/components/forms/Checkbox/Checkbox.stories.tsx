import React from 'react'
import { Checkbox } from './Checkbox'
import { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Checkbox> = {
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
}

export default meta
type Story = StoryObj<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Checkbox {...args} id="checkbox" name="checkbox" />
)

export const DefaultCheckbox: Story = {
  render: Template,
  args: { label: 'My Checkbox' },
}

export const Checked: Story = {
  render: Template,
  args: { defaultChecked: true, label: 'My Checkbox' },
}

export const Indeterminate: Story = {
  render: Template,
  args: { indeterminate: true, label: 'My Checkbox' },
}

export const Disabled: Story = {
  render: Template,
  args: { disabled: true, label: 'My Checkbox' },
}

export const WithRichLabel: Story = {
  render: Template,
  args: { label: <strong>My Checkbox</strong> },
}

export const WithLabelDescription: Story = {
  render: Template,
  args: {
    label: 'My Checkbox',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  render: Template,
  args: { label: 'My Checkbox', tile: true },
}

export const TileWithLabelDescription: Story = {
  render: Template,
  args: {
    label: 'My Checkbox',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
