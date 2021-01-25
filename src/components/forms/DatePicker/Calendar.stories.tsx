/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { Calendar } from './Calendar'
import { parseDateString } from './utils'

export default {
  title: 'Forms/Date picker/Calendar',
  component: Calendar,
}

// TODO - use actions
const mockSelectDate = (): void => {}

const defaultProps = {
  handleSelectDate: mockSelectDate,
  minDate: new Date('0000-01-01'),
  setStatuses: (): void => {},
}

export const defaultCalendar = (): React.ReactElement => (
  <Calendar {...defaultProps} />
)

export const givenDate = (): React.ReactElement => (
  <Calendar {...defaultProps} date={new Date('July 4, 2019')} />
)

export const selectedDate = (): React.ReactElement => (
  <Calendar {...defaultProps} selectedDate={new Date('January 20, 2021')} />
)

export const minAndMax = (): React.ReactElement => (
  <Calendar
    {...defaultProps}
    date={new Date('January 15 2021')}
    minDate={parseDateString('2021-01-10')}
    maxDate={parseDateString('2021-01-20')}
  />
)

export const rangeDate = (): React.ReactElement => (
  <Calendar
    {...defaultProps}
    selectedDate={parseDateString('2021-01-20')}
    rangeDate={parseDateString('2021-01-08')}
  />
)
