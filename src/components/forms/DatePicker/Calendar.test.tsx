import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Calendar } from './Calendar'
import { parseDateString, today } from './utils'
import { MONTH_LABELS } from './constants'

describe('Calendar', () => {
  const mockSelectDate = jest.fn()
  const testProps = {
    handleSelectDate: mockSelectDate,
    minDate: parseDateString('0000-01-01') as Date,
    setStatuses: jest.fn(),
  }

  it('renders calendar navigation', () => {
    const { getByTestId } = render(<Calendar {...testProps} />)
    expect(getByTestId('previous-year')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('previous-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-year')).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders the selected month and year', () => {
    const { getByTestId } = render(
      <Calendar {...testProps} date={new Date('January 2021')} />
    )
    expect(getByTestId('select-month')).toHaveTextContent('January')
    expect(getByTestId('select-year')).toHaveTextContent('2021')
  })

  it('defaults to the current month and year', () => {
    const todayDate = today()
    const { getByTestId } = render(<Calendar {...testProps} />)
    expect(getByTestId('select-month')).toHaveTextContent(
      MONTH_LABELS[todayDate.getMonth()]
    )
    expect(getByTestId('select-year')).toHaveTextContent(
      `${todayDate.getFullYear()}`
    )
  })

  it('disables previous buttons if the min date is in the displayed month and year', () => {
    const { getByTestId } = render(
      <Calendar
        {...testProps}
        date={new Date('January 20 2021')}
        minDate={new Date('January 01 2021')}
      />
    )
    expect(getByTestId('previous-year')).toBeDisabled()
    expect(getByTestId('previous-month')).toBeDisabled()
  })

  it('disables next buttons if the max date is in the displayed month and year', () => {
    const { getByTestId } = render(
      <Calendar
        {...testProps}
        date={new Date('January 20 2021')}
        maxDate={new Date('January 30 2021')}
      />
    )
    expect(getByTestId('next-year')).toBeDisabled()
    expect(getByTestId('next-month')).toBeDisabled()
  })

  it('disables select date buttons that are outside the min and max dates', () => {
    const { getByLabelText } = render(
      <Calendar
        {...testProps}
        date={new Date('January 15 2021')}
        minDate={parseDateString('2021-01-10') as Date}
        maxDate={parseDateString('2021-01-20') as Date}
      />
    )

    const disabledDates = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ]
    const enabledDates = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    disabledDates.forEach((date) => {
      const datePattern = new RegExp(`^${date} January 2021`)
      expect(getByLabelText(datePattern)).toBeDisabled()
    })
    enabledDates.forEach((date) => {
      const datePattern = new RegExp(`^${date} January 2021`)
      expect(getByLabelText(datePattern)).toBeEnabled()
    })
  })

  describe('navigation', () => {
    it('clicking previous year navigates the calendar back one year', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('previous-year'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2020')
    })

    it('clicking next year navigates the calendar forward one year', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('next-year'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2022')
    })

    it('clicking previous month navigates the calendar back one month', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('previous-month'))
      expect(getByTestId('select-month')).toHaveTextContent('December')
      expect(getByTestId('select-year')).toHaveTextContent('2020')
    })

    it('clicking next month navigates the calendar forward one month', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('next-month'))
      expect(getByTestId('select-month')).toHaveTextContent('February')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
    })
  })

  describe('month selection', () => {
    it('clicking the selected month shows month selection', () => {
      const { queryByTestId, getByTestId } = render(<Calendar {...testProps} />)
      userEvent.click(getByTestId('select-month'))
      expect(queryByTestId('calendar-date-picker')).not.toBeInTheDocument()
      expect(getByTestId('calendar-month-picker')).toBeInTheDocument()
    })

    it('clicking a select month button selects that month and hides month selection', () => {
      const { getByTestId, queryByTestId, getByText } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('select-month'))
      userEvent.click(getByText('May'))
      expect(getByTestId('select-month')).toHaveTextContent('May')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
      expect(getByTestId('calendar-date-picker')).toBeInTheDocument()
      expect(queryByTestId('calendar-month-picker')).not.toBeInTheDocument()
    })
  })
})
