import React from 'react'

import { Select } from './Select'
import { Label } from '../Label/Label'
import type { Meta, StoryFn } from '@storybook/react'

export default {
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
      options: ['error', 'success'],
      control: 'radio',
    },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Select>

const options = (
  <>
    <option>- Select - </option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </>
)

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>{options}</Select>
)

export const Default = {
  render: Template,
  args: { id: 'input-select', name: 'input-select' },
}

export const WithDefaultValue = {
  render: Template,

  args: {
    id: 'input-select',
    name: 'input-select',
    defaultValue: 'value2',
  },
}

export const Disabled = {
  render: Template,

  args: {
    id: 'input-select',
    name: 'input-select',
    disabled: true,
  },
}

export const WithLabel = () => (
  <>
    <Label htmlFor="input-select">Select label</Label>
    <Select id="input-select" name="input-select">
      {options}
    </Select>
  </>
)
