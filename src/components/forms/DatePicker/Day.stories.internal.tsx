import React, { type JSX } from 'react'

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

type StorybookArguments = {
  onClick: (value: string) => void
  onKeyDown: (event: React.KeyboardEvent<Element>) => void
  onMouseMove: (hoverDate: Date) => void
}

const testDate = new Date('January 20 2021')

const defaultProps = {
  date: testDate,
}

export const defaultDay = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
  />
)

export const disabled = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isDisabled
  />
)

export const selected = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isSelected
  />
)

export const focused = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocused
  />
)
export const previousMonth = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isPrevMonth
  />
)

export const sameMonth = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocusedMonth
  />
)

export const nextMonth = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isNextMonth
  />
)

export const today = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isToday
  />
)

export const isRangeDate = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeDate
  />
)

export const isRangeStart = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeStart
  />
)
export const isRangeEnd = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeEnd
  />
)
export const isWithinRange = (argTypes: StorybookArguments): JSX.Element => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isWithinRange
  />
)
