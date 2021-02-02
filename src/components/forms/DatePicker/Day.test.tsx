import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Day } from './Day'

describe('Day', () => {
  const testProps = {
    date: new Date('January 20 2021'),
    onClick: jest.fn(),
    onKeyDown: jest.fn(),
    onMouseMove: jest.fn(),
  }

  it('renders a date selection button', () => {
    const { getByTestId } = render(<Day {...testProps} />)
    const button = getByTestId('select-date')
    expect(button).toBeInstanceOf(HTMLButtonElement)
    expect(button).toHaveClass('usa-date-picker__calendar__date')
    expect(button).toHaveAttribute('data-day', '20')
    expect(button).toHaveAttribute('data-month', '1')
    expect(button).toHaveAttribute('data-year', '2021')
    expect(button).toHaveAttribute('data-value', '2021-01-20')
    expect(button).toHaveAttribute('aria-label', '20 January 2021 Wednesday')
    expect(button).toHaveTextContent('20')
  })

  it('defaults to not disabled', () => {
    const { getByTestId } = render(<Day {...testProps} />)
    const button = getByTestId('select-date')
    expect(button).not.toHaveAttribute('disabled')
  })

  it('defaults to not focused', () => {
    const { getByTestId } = render(<Day {...testProps} />)
    const button = getByTestId('select-date')
    expect(button).toHaveAttribute('tabIndex', '-1')
  })

  it('defaults to not selected', () => {
    const { getByTestId } = render(<Day {...testProps} />)
    const button = getByTestId('select-date')
    expect(button).toHaveAttribute('aria-selected', 'false')
  })

  it('can be clicked to select the date', () => {
    const mockSelectDate = jest.fn()
    const { getByTestId } = render(
      <Day {...testProps} onClick={mockSelectDate} />
    )
    const button = getByTestId('select-date')
    userEvent.click(button)
    expect(mockSelectDate).toHaveBeenCalledWith('2021-01-20')
  })

  it('implements the onKeyDown handler', () => {
    const mockKeyDown = jest.fn()
    const { getByTestId } = render(
      <Day {...testProps} onKeyDown={mockKeyDown} />
    )
    const button = getByTestId('select-date')
    userEvent.click(button)
    fireEvent.keyDown(button)
    expect(mockKeyDown).toHaveBeenCalled()
  })

  describe('when isFocused is true', () => {
    it('is focused', () => {
      const { getByTestId } = render(<Day {...testProps} isFocused />)
      const button = getByTestId('select-date')
      expect(button).toHaveAttribute('tabIndex', '0')
      expect(button).toHaveClass('usa-date-picker__calendar__date--focused')
    })
  })

  describe('when isSelected is true', () => {
    it('is selected', () => {
      const { getByTestId } = render(<Day {...testProps} isSelected />)
      const button = getByTestId('select-date')
      expect(button).toHaveAttribute('aria-selected', 'true')
      expect(button).toHaveClass('usa-date-picker__calendar__date--selected')
    })
  })

  describe('when isDisabled is true', () => {
    it('is disabled', () => {
      const { getByTestId } = render(<Day {...testProps} isDisabled />)
      const button = getByTestId('select-date')
      expect(button).toHaveAttribute('disabled')
    })

    it('cannot be clicked to select the date', () => {
      const mockSelectDate = jest.fn()
      const { getByTestId } = render(
        <Day {...testProps} onClick={mockSelectDate} isDisabled />
      )
      const button = getByTestId('select-date')
      userEvent.click(button)
      expect(mockSelectDate).not.toHaveBeenCalled()
    })
  })

  describe('when in the previous month', () => {
    it('has the previous month class', () => {
      const { getByTestId } = render(<Day {...testProps} isPrevMonth />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass(
        'usa-date-picker__calendar__date--previous-month'
      )
    })
  })

  describe('when in the next month', () => {
    it('has the next month class', () => {
      const { getByTestId } = render(<Day {...testProps} isNextMonth />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass('usa-date-picker__calendar__date--next-month')
    })
  })

  describe('when in the current month', () => {
    it('has the current month class', () => {
      const { getByTestId } = render(<Day {...testProps} isFocusedMonth />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass(
        'usa-date-picker__calendar__date--current-month'
      )
    })
  })

  describe('when is today’s date', () => {
    it('has the today class', () => {
      const { getByTestId } = render(<Day {...testProps} isToday />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass('usa-date-picker__calendar__date--today')
    })
  })

  describe('when is the range date', () => {
    it('has the range class', () => {
      const { getByTestId } = render(<Day {...testProps} isRangeDate />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass('usa-date-picker__calendar__date--range-date')
    })
  })

  describe('when is the range start date', () => {
    it('has the range start class', () => {
      const { getByTestId } = render(<Day {...testProps} isRangeStart />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass(
        'usa-date-picker__calendar__date--range-date-start'
      )
    })
  })

  describe('when is the range end date', () => {
    it('has the range end class', () => {
      const { getByTestId } = render(<Day {...testProps} isRangeEnd />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass(
        'usa-date-picker__calendar__date--range-date-end'
      )
    })
  })

  describe('when is within the range', () => {
    it('has the within range class', () => {
      const { getByTestId } = render(<Day {...testProps} isWithinRange />)
      const button = getByTestId('select-date')
      expect(button).toHaveClass(
        'usa-date-picker__calendar__date--within-range'
      )
    })
  })
})
