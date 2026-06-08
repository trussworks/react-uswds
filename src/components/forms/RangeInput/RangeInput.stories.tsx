import React from 'react'
import { RangeInput } from './RangeInput'
import { Label } from '../Label/Label'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Range slider',
  component: RangeInput,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 RangeInput component

Source: https://designsystem.digital.gov/components/range-slider
`,
      },
    },
  },
  args: { id: 'range-slider', name: 'range' },
  render: (args) => (
    <>
      <Label htmlFor="range-slider" hint=" (drag to adjust or use arrow keys)">
        Slider input
      </Label>
      <RangeInput {...args} />
      {args.list && (
        <datalist id="range-list">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </datalist>
      )}
    </>
  ),
} satisfies Meta<typeof RangeInput>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const CustomRange: Story = {
  args: {
    min: 1,
    max: 11,
    step: 2,
    defaultValue: 3,
  },
}

export const DataListRange: Story = {
  args: {
    list: 'range-list',
    defaultValue: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only tick marks are shown in Chrome but not with usa-range class currently because the appearance property is set to none',
      },
    },
  },
}

export const WithUnitAndPreposition: Story = {
  args: {
    textPreposition: 'de',
    textUnit: 'por ciento',
    max: 11,
    step: 2,
    defaultValue: 3,
  },
}
