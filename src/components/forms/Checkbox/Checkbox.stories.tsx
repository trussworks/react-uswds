import React from 'react'
import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    inputRef: { table: { disable: true } },

    label: { control: 'text' },
    labelDescription: { control: 'text' },
  },
  args: {
    label: 'My Checkbox',
  },
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const DefaultCheckbox: Story = {
  args: {
    id: 'default-checkbox',
    name: 'default-checkbox',
  },
}

export const Checked: Story = {
  args: {
    id: 'checked-checkbox',
    name: 'checked-checkbox',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    id: 'indeterminate-checkbox',
    name: 'indeterminate-checkbox',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled-checkbox',
    name: 'disabled-checkbox',
    disabled: true,
  },
}

export const WithRichLabel: Story = {
  args: {
    id: 'richlabel-checkbox',
    name: 'richlabel-checkbox',
    label: <strong>My Checkbox</strong>,
  },
}

export const WithLabelDescription: Story = {
  args: {
    id: 'labeldesc-checkbox',
    name: 'labeldesc-checkbox',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  args: {
    id: 'tile-checkbox',
    name: 'tile-checkbox',
    tile: true,
  },
}

export const TileWithLabelDescription: Story = {
  args: {
    id: 'tiledesc-checkbox',
    name: 'tiledesc-checkbox',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
