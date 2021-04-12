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
### USWDS 2.0 RangeInput component

Source: https://designsystem.digital.gov/components/range-slider
`,
      },
    },
  },
}

const labelChildren = (
  <>
    <div>
      <span>Start:</span> <span>0</span>
    </div>
    <div>
      <span>End:</span> <span>100</span>
    </div>
  </>
)

const labelHint = <>(drag to adjust or use arrow keys)</>

export const defaultRange = (): React.ReactElement => (
  <>
    <Label htmlFor="range-slider" hint={labelHint}>
      {labelChildren}
    </Label>
    <RangeInput id="range-slider" name="range" />
  </>
)

export const customRange = (): React.ReactElement => (
  <RangeInput
    id="custom-range-slider"
    name="rangeValue"
    className="dark-theme"
    min={1}
    max={11}
    step={2}
    defaultValue={3}
  />
)

// Only tick marks are shown in Chrome but not with usa-range class currently because the appearance property is set to none
export const dataListRange = (): React.ReactElement => (
  <>
    <RangeInput
      id="range-slider"
      name="range"
      min={0}
      max={4}
      defaultValue={2}
      list="range-list-id"
    />
    <datalist id="range-list-id">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </datalist>
  </>
)
