import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MonthPicker } from './MonthPicker'
import { MONTH_LABELS } from './constants'
import { parseDateString } from './utils'

describe('MonthPicker', () => {
  const testProps = {
    date: new Date('January 20 2021'),
    minDate: parseDateString('0000-01-01') as Date,
  }

  it('renders a button for each month', () => {
    const { getByText } = render(<MonthPicker {...testProps} />)

    MONTH_LABELS.forEach((month) => {
      const button = getByText(month)
      expect(button).toBeInstanceOf(HTMLButtonElement)
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
})
