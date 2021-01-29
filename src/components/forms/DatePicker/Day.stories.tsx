import React from 'react'

import { Day } from './Day'

export default {
  title: 'Components/Form controls/Date picker/Day',
  component: Day,
}

const testDate = new Date('January 20 2021')

// TODO - use actions
// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockClick = (): void => {}

const defaultProps = {
  date: testDate,
  onClick: mockClick,
}

export const defaultDay = (): React.ReactElement => <Day {...defaultProps} />
export const disabled = (): React.ReactElement => (
  <Day {...defaultProps} isDisabled />
)
export const selected = (): React.ReactElement => (
  <Day {...defaultProps} isSelected />
)
export const focused = (): React.ReactElement => (
  <Day {...defaultProps} isFocused />
)
export const previousMonth = (): React.ReactElement => (
  <Day {...defaultProps} isPrevMonth />
)
export const sameMonth = (): React.ReactElement => (
  <Day {...defaultProps} isFocusedMonth />
)
export const nextMonth = (): React.ReactElement => (
  <Day {...defaultProps} isNextMonth />
)
export const today = (): React.ReactElement => <Day {...defaultProps} isToday />

export const isRangeDate = (): React.ReactElement => (
  <Day {...defaultProps} isRangeDate />
)

export const isRangeStart = (): React.ReactElement => (
  <Day {...defaultProps} isRangeStart />
)
export const isRangeEnd = (): React.ReactElement => (
  <Day {...defaultProps} isRangeEnd />
)
export const isWithinRange = (): React.ReactElement => (
  <Day {...defaultProps} isWithinRange />
)
