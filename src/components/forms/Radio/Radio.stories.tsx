import React from 'react'
import { Radio } from './Radio'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Radio buttons',
  component: Radio,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    inputRef: { table: { disable: true } },

    label: { control: 'text' },
    labelDescription: { control: 'text' },
  },
  args: {
    label: 'My Radio Button',
  },
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
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

export const DefaultRadio: Story = {
  args: {
    id: 'default-radio',
    name: 'default-radio',
  },
}

export const Selected: Story = {
  args: {
    id: 'selected-radio',
    name: 'selected-radio',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    id: 'indeterminate-radio',
    name: 'indeterminate-radio',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled-radio',
    name: 'disabled-radio',
    disabled: true,
  },
}

export const WithRichLabel: Story = {
  args: {
    id: 'richlabel-radio',
    name: 'richlabel-radio',
    label: <strong>My Radio Button</strong>,
  },
}

export const WithLabelDescription: Story = {
  args: {
    id: 'labeldesc-radio',
    name: 'labeldesc-radio',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  args: {
    id: 'tile-radio',
    name: 'tile-radio',
    tile: true,
  },
}

export const TileWithLabelDescription: Story = {
  args: {
    id: 'tiledesc-radio',
    name: 'tiledesc-radio',
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
