import React from 'react'

import { Day } from './Day'

export default {
  title: 'Forms/Date picker/Day',
  component: Day,
}

const testDate = new Date('January 20 2021')

export const defaultDay = (): React.ReactElement => <Day date={testDate} />
export const disabled = (): React.ReactElement => (
  <Day date={testDate} isDisabled />
)
export const selected = (): React.ReactElement => (
  <Day date={testDate} isSelected />
)
export const focused = (): React.ReactElement => (
  <Day date={testDate} isFocused />
)
export const previousMonth = (): React.ReactElement => (
  <Day date={testDate} isPrevMonth />
)
export const sameMonth = (): React.ReactElement => (
  <Day date={testDate} isSameMonth />
)
export const nextMonth = (): React.ReactElement => (
  <Day date={testDate} isNextMonth />
)
export const today = (): React.ReactElement => <Day date={testDate} isToday />
