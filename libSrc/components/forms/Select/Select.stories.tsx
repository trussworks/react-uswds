import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Select from './Select.js'
import Label from '../label/Label/Label.js'

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
      options: ['error', 'success', 'undefined'],
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
    <option value="valueBIG">
      Option of extra length to demonstrate how content like this will look
      different
    </option>
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

export const Multiselect = () => (
  <Select id="input-multiselect" name="input-multiselect" multiple>
    {options}
  </Select>
)
