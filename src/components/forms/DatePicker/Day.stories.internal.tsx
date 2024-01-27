import React from 'react'

import Day from './Day'

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

export const DefaultDay = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
  />
)

export const Disabled = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isDisabled
  />
)
export const Selected = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isSelected
  />
)
export const Focused = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocused
  />
)
export const PreviousMonth = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isPrevMonth
  />
)
export const SameMonth = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isFocusedMonth
  />
)
export const NextMonth = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isNextMonth
  />
)
export const Today = (argTypes: StorybookArguments): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isToday
  />
)

export const IsRangeDate = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeDate
  />
)

export const isRangeStart = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeStart
  />
)
export const IsRangeEnd = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isRangeEnd
  />
)
export const IsWithinRange = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <Day
    {...defaultProps}
    onClick={argTypes.onClick}
    onKeyDown={argTypes.onKeyDown}
    onMouseMove={argTypes.onMouseMove}
    isWithinRange
  />
)
