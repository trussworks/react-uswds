import React from 'react'
import { RangeInput } from './RangeInput'
import { Label } from '../Label/Label'

export default {
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
}

const Template = ({ ...args }) => (
  <>
    <Label htmlFor="range-slider" hint=" (drag to adjust or use arrow keys)">
      Slider input
    </Label>
    <RangeInput id="range-slider" name="range" {...args} />
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
)

export const Basic = {
  render: Template,
}

export const CustomRange = {
  render: Template,
  args: {
    min: 1,
    max: 11,
    step: 2,
    defaultValue: 3,
  },
}

export const DataListRange = {
  render: Template,
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

export const WithUnitAndPreposition = {
  render: Template,
  args: {
    textPreposition: 'de',
    textUnit: 'por ciento',
    max: 11,
    step: 2,
    defaultValue: 3,
  },
}
