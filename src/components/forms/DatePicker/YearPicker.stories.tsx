import React from 'react'

import { YearPicker } from './YearPicker'
import { parseDateString } from './utils'

/*
// THIS STORY FOR INTERNAL DEVELOPMENT ONLY

export default {
  title: 'Components/Date picker/Year picker',
  component: YearPicker,
  argTypes: {
    handleSelectYear: { action: 'handle select year' },
    setStatuses: { action: 'set statuses' },
  },
}
*/

const testProps = {
  date: new Date('January 20 2021'),
  minDate: parseDateString('0000-01-01') as Date,
}

export const yearPicker = (argTypes): React.ReactElement => (
  <YearPicker
    {...testProps}
    handleSelectYear={argTypes.handleSelectYear}
    setStatuses={argTypes.setStatuses}
  />
)

export const withMinAndMaxInCurrentChunk = (argTypes): React.ReactElement => (
  <YearPicker
    {...testProps}
    handleSelectYear={argTypes.handleSelectYear}
    setStatuses={argTypes.setStatuses}
    minDate={parseDateString('2021-01-01') as Date}
    maxDate={parseDateString('2025-01-01') as Date}
  />
)

export const withMinInCurrentChunk = (argTypes): React.ReactElement => (
  <YearPicker
    {...testProps}
    handleSelectYear={argTypes.handleSelectYear}
    setStatuses={argTypes.setStatuses}
    minDate={parseDateString('2021-01-01') as Date}
  />
)

export const withMaxInCurrentChunk = (argTypes): React.ReactElement => (
  <YearPicker
    {...testProps}
    handleSelectYear={argTypes.handleSelectYear}
    setStatuses={argTypes.setStatuses}
    minDate={parseDateString('1950-01-01') as Date}
    maxDate={parseDateString('2025-01-01') as Date}
  />
)
