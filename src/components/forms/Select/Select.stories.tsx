import React from 'react'
import { Select } from './Select'
import { Label } from '../Label/Label'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
        ### USWDS 3.0 Select component

        Source: https://designsystem.digital.gov/components/select/
        `,
      },
    },
  },
  argTypes: {
    validationStatus: {
      options: ['error', 'success', 'undefined'],
      control: 'radio',
    },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
    multiple: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const Template = ({ ...args }) => (
  <>
    <Label htmlFor={args.id}>Select label</Label>
    <Select id={args.id} name={args.name} {...args}>
      <option>- Select - </option>
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
      <option value="valueBIG">
        Option of extra length to demonstrate how content like this will look
        different
      </option>
    </Select>
  </>
)

export const Basic: Story = {
  render: Template,
  args: { id: 'input-select', name: 'input-select' },
}

export const WithDefaultValue: Story = {
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    defaultValue: 'value2',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    disabled: true,
  },
}

export const Multiselect: Story = {
  render: Template,
  args: {
    id: 'input-multiselect',
    name: 'input-multiselect',
    multiple: true,
  },
}
