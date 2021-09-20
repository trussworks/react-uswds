import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Calendar } from './Calendar'
import { parseDateString, today } from './utils'
import { MONTH_LABELS } from './constants'
import { FocusMode } from './DatePicker'

describe('Calendar', () => {
  const mockSelectDate = jest.fn()
  const testProps = {
    date: new Date('January 2021'),
    handleSelectDate: mockSelectDate,
    minDate: parseDateString('0000-01-01') as Date,
    setStatuses: jest.fn(),
    focusMode: FocusMode.None,
  }

  it('renders calendar navigation', () => {
    const { getByTestId } = render(<Calendar {...testProps} />)
    expect(getByTestId('previous-year')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('previous-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-year')).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders the selected month and year', () => {
    const { getByTestId } = render(<Calendar {...testProps} />)
    expect(getByTestId('select-month')).toHaveTextContent('January')
    expect(getByTestId('select-year')).toHaveTextContent('2021')
  })

  it('defaults to the current month and year', () => {
    const todayDate = today()
    const { getByTestId } = render(<Calendar {...testProps} date={undefined} />)
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
      1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ]
    const enabledDates = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    disabledDates.forEach((date) => {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const datePattern = new RegExp(`^${date} January 2021`)
      expect(getByLabelText(datePattern)).toBeDisabled()
    })
    enabledDates.forEach((date) => {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const datePattern = new RegExp(`^${date} January 2021`)
      expect(getByLabelText(datePattern)).toBeEnabled()
    })
  })

  it('highlights a range of dates if there is a rangeDate prop', () => {
    const { getByLabelText } = render(
      <Calendar
        {...testProps}
        selectedDate={parseDateString('2021-01-20')}
        rangeDate={parseDateString('2021-01-08')}
      />
    )

    expect(getByLabelText(/^8 January 2021/)).toHaveClass(
      'usa-date-picker__calendar__date--range-date-start'
    )
    expect(getByLabelText(/^20 January 2021/)).toHaveClass(
      'usa-date-picker__calendar__date--range-date-end'
    )

    const rangeDates = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    rangeDates.forEach((date) => {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const datePattern = new RegExp(`^${date} January 2021`)
      expect(getByLabelText(datePattern)).toHaveClass(
        'usa-date-picker__calendar__date--within-range'
      )
    })
  })

  describe('focusing on hover', () => {
    it('focuses on a date in the current month when hovered over', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      fireEvent.mouseMove(getByLabelText(/^13 January 2021/))
      expect(getByLabelText(/^13 January 2021/)).toHaveFocus()
    })

    it('does not focus on a date not in the current month when hovered over', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      fireEvent.mouseMove(getByLabelText(/^2 February 2021/))
      expect(getByLabelText(/^2 February 2021/)).not.toHaveFocus()
    })

    it('does not focus on a disabled date in the current month when hovered over', () => {
      const { getByLabelText } = render(
        <Calendar
          {...testProps}
          date={new Date('January 20 2021')}
          minDate={new Date('January 15 2021')}
        />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      expect(getByLabelText(/^13 January 2021/)).toBeDisabled()
      fireEvent.mouseMove(getByLabelText(/^13 January 2021/))
      expect(getByLabelText(/^13 January 2021/)).not.toHaveFocus()
    })

    it('does not focus on a date when hovered over if on an iOS device', () => {
      jest
        .spyOn(navigator, 'userAgent', 'get')
        .mockImplementation(() => 'iPhone')

      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      fireEvent.mouseMove(getByLabelText(/^13 January 2021/))
      expect(getByLabelText(/^13 January 2021/)).not.toHaveFocus()
      jest.restoreAllMocks()
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
      expect(getByTestId('previous-year')).toHaveFocus()
    })

    it('clicking previous year focuses the date picker if previous year becomes disabled', async () => {
      const { getByTestId } = render(
        <Calendar
          {...testProps}
          minDate={new Date('January 01 2020')}
          date={new Date('January 2021')}
        />
      )
      userEvent.click(getByTestId('previous-year'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2020')
      expect(getByTestId('previous-year')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-date-picker')).toHaveFocus()
      })
    })

    it('clicking next year navigates the calendar forward one year', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('next-year'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2022')
      expect(getByTestId('next-year')).toHaveFocus()
    })

    it('clicking next year focuses the date picker if next year becomes disabled', async () => {
      const { getByTestId } = render(
        <Calendar
          {...testProps}
          maxDate={new Date('January 01 2022')}
          date={new Date('January 2021')}
        />
      )
      userEvent.click(getByTestId('next-year'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2022')
      expect(getByTestId('next-year')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-date-picker')).toHaveFocus()
      })
    })

    it('clicking previous month navigates the calendar back one month', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('previous-month'))
      expect(getByTestId('select-month')).toHaveTextContent('December')
      expect(getByTestId('select-year')).toHaveTextContent('2020')
      expect(getByTestId('previous-month')).toHaveFocus()
    })

    it('clicking previous month focuses the date picker if previous month becomes disabled', async () => {
      const { getByTestId } = render(
        <Calendar
          {...testProps}
          minDate={new Date('December 01 2020')}
          date={new Date('January 2021')}
        />
      )
      userEvent.click(getByTestId('previous-month'))
      expect(getByTestId('select-month')).toHaveTextContent('December')
      expect(getByTestId('select-year')).toHaveTextContent('2020')
      expect(getByTestId('previous-month')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-date-picker')).toHaveFocus()
      })
    })

    it('clicking next month navigates the calendar forward one month', () => {
      const { getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 2021')} />
      )
      userEvent.click(getByTestId('next-month'))
      expect(getByTestId('select-month')).toHaveTextContent('February')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
      expect(getByTestId('next-month')).toHaveFocus()
    })

    it('clicking next month focuses the date picker if next month becomes disabled', async () => {
      const { getByTestId } = render(
        <Calendar
          {...testProps}
          maxDate={new Date('February 01 2021')}
          date={new Date('January 2021')}
        />
      )
      userEvent.click(getByTestId('next-month'))
      expect(getByTestId('select-month')).toHaveTextContent('February')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
      expect(getByTestId('next-month')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-date-picker')).toHaveFocus()
      })
    })
  })

  describe('keyboard navigation', () => {
    it('pressing the up arrow key from a day navigates to the same day in the previous week', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'ArrowUp',
      })
      expect(getByLabelText(/^13 January 2021/)).toHaveFocus()
    })

    it('pressing the down arrow key from a day navigates to the same day in the next week', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'ArrowDown',
      })
      expect(getByLabelText(/^27 January 2021/)).toHaveFocus()
    })

    it('pressing the left arrow key from a day navigates to the previous day', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'ArrowLeft',
      })
      expect(getByLabelText(/^19 January 2021/)).toHaveFocus()
    })

    it('pressing the right arrow key from a day navigates to the next day', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'ArrowRight',
      })
      expect(getByLabelText(/^21 January 2021/)).toHaveFocus()
    })

    it('pressing the home key from a day navigates to the first day of the selected week', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'Home',
      })
      expect(getByLabelText(/^17 January 2021/)).toHaveFocus()
    })

    it('pressing the end key from a day navigates to the last day of the selected week', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'End',
      })
      expect(getByLabelText(/^23 January 2021/)).toHaveFocus()
    })

    it('pressing the page down key from a day navigates to the same day in the next month', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'PageDown',
      })
      expect(getByLabelText(/^20 February 2021/)).toHaveFocus()
    })

    it('pressing the page down key from the last day of a longer month navigates to the last day in the shorter next month', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 31 2020')} />
      )

      fireEvent.keyDown(getByLabelText(/^31 January 2020/), {
        key: 'PageDown',
      })
      expect(getByLabelText(/^29 February 2020/)).toHaveFocus()
    })

    it('pressing the page up key from a day navigates to the same day in the previous month', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'PageUp',
      })
      expect(getByLabelText(/^20 December 2020/)).toHaveFocus()
    })

    it('pressing the page up key from the last day of a longer month navigates to the last day in the shorter previous month', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('December 31 2019')} />
      )

      fireEvent.keyDown(getByLabelText(/^31 December 2019/), {
        key: 'PageUp',
      })
      expect(getByLabelText(/^30 November 2019/)).toHaveFocus()
    })

    it('pressing the shift + page down keys from a day navigates to the same day in the next year', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'PageDown',
        shiftKey: true,
      })
      expect(getByLabelText(/^20 January 2022/)).toHaveFocus()
    })

    it('pressing the shift + page down keys from February 29th of a leap year navigates to February 28th in the next year', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('February 29 2020')} />
      )

      fireEvent.keyDown(getByLabelText(/^29 February 2020/), {
        key: 'PageDown',
        shiftKey: true,
      })
      expect(getByLabelText(/^28 February 2021/)).toHaveFocus()
    })

    it('pressing the shift + page up keys from a day navigates to the same day in the previous year', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      fireEvent.keyDown(getByLabelText(/^20 January 2021/), {
        key: 'PageUp',
        shiftKey: true,
      })
      expect(getByLabelText(/^20 January 2020/)).toHaveFocus()
    })

    it('pressing the shift + page up keys from February 29th of a leap year navigates to February 28th in the previous year', () => {
      const { getByLabelText } = render(
        <Calendar {...testProps} date={new Date('February 29 2020')} />
      )

      fireEvent.keyDown(getByLabelText(/^29 February 2020/), {
        key: 'PageUp',
        shiftKey: true,
      })
      expect(getByLabelText(/^28 February 2019/)).toHaveFocus()
    })

    it('pressing tab cycles through the focusable elements within the date picker', () => {
      const { getByLabelText, getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('previous-year')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('previous-month')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('select-month')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('select-year')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('next-month')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('next-year')).toHaveFocus()
      userEvent.tab()
      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
    })

    it('pressing tab+shift cycles backwards through the focusable elements within the date picker', () => {
      const { getByLabelText, getByTestId } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('next-year')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('next-month')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('select-year')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('select-month')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('previous-month')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('previous-year')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
    })

    it('pressing tab only cycles through elements that are not disabled', () => {
      const { getByLabelText, getByTestId } = render(
        <Calendar
          {...testProps}
          date={new Date('January 20 2021')}
          minDate={new Date('January 01 2021')}
        />
      )

      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
      expect(getByTestId('previous-year')).toBeDisabled()
      expect(getByTestId('previous-month')).toBeDisabled()

      userEvent.tab()
      expect(getByTestId('select-month')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('select-year')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('next-month')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('next-year')).toHaveFocus()
      userEvent.tab()
      expect(getByLabelText(/^20 January 2021/)).toHaveFocus()
    })
  })

  describe('month selection', () => {
    it('clicking the selected month shows month selection', () => {
      const { queryByTestId, getByTestId } = render(<Calendar {...testProps} />)
      userEvent.click(getByTestId('select-month'))
      expect(queryByTestId('calendar-date-picker')).not.toBeInTheDocument()
      expect(getByTestId('calendar-month-picker')).toBeInTheDocument()
    })

    it('clicking a select month button selects that month and hides month selection', async () => {
      const { getByTestId, queryByTestId, getByText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )
      userEvent.click(getByTestId('select-month'))
      userEvent.click(getByText('May'))
      expect(getByTestId('select-month')).toHaveTextContent('May')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
      expect(getByTestId('calendar-date-picker')).toBeInTheDocument()
      expect(queryByTestId('calendar-month-picker')).not.toBeInTheDocument()

      await waitFor(() => {
        expect(getByText('20')).toHaveFocus()
      })
    })
  })

  describe('year selection', () => {
    it('clicking the selected year shows year selection', () => {
      const { queryByTestId, getByTestId } = render(<Calendar {...testProps} />)
      userEvent.click(getByTestId('select-year'))
      expect(queryByTestId('calendar-date-picker')).not.toBeInTheDocument()
      expect(getByTestId('calendar-year-picker')).toBeInTheDocument()
    })

    it('clicking a select year button selects that year and hides year selection', async () => {
      const { getByTestId, queryByTestId, getByText } = render(
        <Calendar {...testProps} date={new Date('January 20 2021')} />
      )
      userEvent.click(getByTestId('select-year'))
      userEvent.click(getByText('2017'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2017')
      expect(getByTestId('calendar-date-picker')).toBeInTheDocument()
      expect(queryByTestId('calendar-year-picker')).not.toBeInTheDocument()

      await waitFor(() => {
        expect(getByText('20')).toHaveFocus()
      })
    })
  })
})
