import React from 'react'
import { Radio } from './Radio'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio buttons',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Radio component

Source: https://designsystem.digital.gov/components/radio-buttons
`,
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Radio>

const Template: StoryFn<typeof Radio> = (args) => (
  <Radio
    {...args}
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
  />
)

export const Default: Story = {
  render: Template,
}

export const Selected: Story = {
  render: Template,
  args: { defaultChecked: true },
}

export const Indeterminate: Story = {
  render: Template,
  args: { indeterminate: true },
}

export const Disabled: Story = {
  render: Template,
  args: { disabled: true },
}

export const WithLabelDescription: Story = {
  render: Template,
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  render: Template,
  args: { tile: true },
}

export const TileWithLabelDescription: Story = {
  render: Template,
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
