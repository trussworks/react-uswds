import React from 'react'

import { Day } from './Day'

/*
// THIS STORY FOR INTERNAL DEVELOPMENT ONLY
export default {
  title: 'Components/Date picker/Day',
  component: Day,
  argTypes: {
    onClick: { action: 'on click' },
    onKeyDown: { action: 'on keydown' },
    onMouseMove: { action: 'on mouse move' },
  },
}
*/

const testDate = new Date('January 20 2021')

const defaultProps = {
  date: testDate,
}

export const defaultDay = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
  />
)

export const disabled = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isDisabled
  />
)
export const selected = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isSelected
  />
)
export const focused = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocused
  />
)
export const previousMonth = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isPrevMonth
  />
)
export const sameMonth = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocusedMonth
  />
)
export const nextMonth = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isNextMonth
  />
)
export const today = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isToday
  />
)

export const isRangeDate = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeDate
  />
)

export const isRangeStart = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeStart
  />
)
export const isRangeEnd = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeEnd
  />
)
export const isWithinRange = (argTypes): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isWithinRange
  />
)
