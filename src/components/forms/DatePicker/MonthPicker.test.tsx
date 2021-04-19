import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MonthPicker } from './MonthPicker'
import { MONTH_LABELS } from './constants'
import { parseDateString } from './utils'
import { sampleLocalization } from './i18n'

describe('MonthPicker', () => {
  const testProps = {
    date: new Date('January 20 2021'),
    minDate: parseDateString('0000-01-01') as Date,
    handleSelectMonth: jest.fn(),
  }

  it('renders a button for each month', () => {
    const { getByText } = render(<MonthPicker {...testProps} />)

    MONTH_LABELS.forEach((month, index) => {
      const button = getByText(month)
      expect(button).toBeInstanceOf(HTMLButtonElement)
      expect(button).toHaveAttribute('data-value', `${index}`)
      expect(button).toHaveAttribute('data-label', month)
    })
  })

  it('each button implements an onClick handler to select the month', () => {
    const mockSelectMonth = jest.fn()
    const { getByText } = render(
      <MonthPicker {...testProps} handleSelectMonth={mockSelectMonth} />
    )

    MONTH_LABELS.forEach((month, index) => {
      const button = getByText(month)
      expect(button).toBeInstanceOf(HTMLButtonElement)
      userEvent.click(button)
      expect(mockSelectMonth).toHaveBeenCalledWith(index)
    })
  })

  it('the currently displayed month has the selected class', () => {
    const { getByText } = render(<MonthPicker {...testProps} />)
    const button = getByText('January')
    expect(button).toHaveClass('usa-date-picker__calendar__month--selected')
    expect(button).toHaveAttribute('aria-selected', 'true')
  })

  it('focus defaults to the currently displayed month', () => {
    const { getByText } = render(<MonthPicker {...testProps} />)
    const button = getByText('January')
    expect(button).toHaveClass('usa-date-picker__calendar__month--focused')
    expect(button).toHaveFocus()
    expect(button).toHaveAttribute('tabIndex', '0')
  })

  it('disables month buttons that are outside the min and max dates', () => {
    const { getByText } = render(
      <MonthPicker
        {...testProps}
        minDate={parseDateString('2021-04-01') as Date}
        maxDate={parseDateString('2021-08-01') as Date}
      />
    )

    MONTH_LABELS.forEach((month, index) => {
      if (index < 3 || index > 7) {
        expect(getByText(month)).toBeDisabled()
      } else {
        expect(getByText(month)).not.toBeDisabled()
      }
    })
  })

  describe('focusing on hover', () => {
    it('focuses on a month when hovered over', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByText('January')).toHaveFocus()
      fireEvent.mouseMove(getByText('March'))
      expect(getByText('March')).toHaveFocus()
    })

    it('does not focus on a disabled month when hovered over', () => {
      const { getByText } = render(
        <MonthPicker
          {...testProps}
          date={new Date('January 20 2021')}
          maxDate={new Date('April 2021')}
        />
      )

      expect(getByText('January')).toHaveFocus()
      expect(getByText('May')).toBeDisabled()
      fireEvent.mouseMove(getByText('May'))
      expect(getByText('May')).not.toHaveFocus()
    })

    it('does not focus on a month when hovered over if on an iOS device', () => {
      jest
        .spyOn(navigator, 'userAgent', 'get')
        .mockImplementation(() => 'iPhone')

      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByText('January')).toHaveFocus()
      fireEvent.mouseMove(getByText('March'))
      expect(getByText('March')).not.toHaveFocus()
      jest.restoreAllMocks()
    })
  })

  describe('keyboard navigation', () => {
    it('pressing the up arrow key from a month navigates to 3 months before', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'ArrowUp',
      })
      expect(getByText('February')).toHaveFocus()
    })

    it('pressing the down arrow key from a month navigates to 3 months later', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'ArrowDown',
      })
      expect(getByText('August')).toHaveFocus()
    })

    it('pressing the left arrow key from a month navigates to the previous month', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'ArrowLeft',
      })
      expect(getByText('April')).toHaveFocus()
    })

    it('pressing the right arrow key from a month navigates to the next month', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'ArrowRight',
      })
      expect(getByText('June')).toHaveFocus()
    })

    it('pressing the home key from a month navigates to the first month of the selected row', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'Home',
      })
      expect(getByText('April')).toHaveFocus()
    })

    it('pressing the end key from a month navigates to the last month of the selected row', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'End',
      })
      expect(getByText('June')).toHaveFocus()
    })

    it('pressing the page down key from a month navigates to December', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'PageDown',
      })
      expect(getByText('December')).toHaveFocus()
    })

    it('pressing the page up key from a month navigates to January', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('May 20 2021')} />
      )

      fireEvent.keyDown(getByText('May'), {
        key: 'PageUp',
      })
      expect(getByText('January')).toHaveFocus()
    })

    it('pressing tab cycles through the focusable elements within the month picker', () => {
      const { getByText } = render(
        <MonthPicker {...testProps} date={new Date('January 20 2021')} />
      )

      expect(getByText('January')).toHaveFocus()
      userEvent.tab()
      expect(getByText('January')).toHaveFocus()
    })
  })

  describe('with localization props', () => {
    it('displays month translations', () => {
      const { getByText } = render(
        <MonthPicker
          {...testProps}
          date={new Date('January 20 2021')}
          i18n={sampleLocalization}
        />
      )
      sampleLocalization.months.forEach((translation) => {
        expect(getByText(translation)).toBeInTheDocument()
      })
    })
  })
})
