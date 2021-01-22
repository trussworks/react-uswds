import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { YearPicker } from './YearPicker'
import { parseDateString } from './utils'

describe('YearPicker', () => {
  const testProps = {
    date: new Date('January 20 2021'),
    minDate: parseDateString('0000-01-01') as Date,
    handleSelectYear: jest.fn(),
    setStatuses: jest.fn(),
  }

  it('renders a button for each year in the current chunk', () => {
    const { getByText } = render(<YearPicker {...testProps} />)

    const years = [
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
    ]

    years.forEach((year) => {
      const button = getByText(year)
      expect(button).toBeInstanceOf(HTMLButtonElement)
      expect(button).toHaveAttribute('data-value', `${year}`)
    })
  })

  it('each button implements an onClick handler to select the year', () => {
    const mockSelectYear = jest.fn()
    const { getByText } = render(
      <YearPicker {...testProps} handleSelectYear={mockSelectYear} />
    )

    const years = [
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
    ]

    years.forEach((year) => {
      const button = getByText(year)
      expect(button).toBeInstanceOf(HTMLButtonElement)
      userEvent.click(button)
      expect(mockSelectYear).toHaveBeenCalledWith(year)
    })
  })

  it('renders a button to navigate to the previous and next chunks of years', () => {
    const { getByTestId } = render(<YearPicker {...testProps} />)
    expect(getByTestId('previous-year-chunk')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-year-chunk')).toBeInstanceOf(HTMLButtonElement)
  })

  it('disables the previous button if the min date is in the displayed year chunk', () => {
    const { getByTestId } = render(
      <YearPicker
        {...testProps}
        minDate={parseDateString('2021-01-01') as Date}
      />
    )
    expect(getByTestId('previous-year-chunk')).toBeDisabled()
    expect(getByTestId('next-year-chunk')).not.toBeDisabled()
  })

  it('disables the next button if the max date is in the displayed year chunk', () => {
    const { getByTestId } = render(
      <YearPicker
        {...testProps}
        minDate={parseDateString('1980-01-01') as Date}
        maxDate={parseDateString('2025-01-01') as Date}
      />
    )
    expect(getByTestId('next-year-chunk')).toBeDisabled()
    expect(getByTestId('previous-year-chunk')).not.toBeDisabled()
  })

  it('the currently displayed year has the selected class', () => {
    const { getByText } = render(<YearPicker {...testProps} />)
    const button = getByText('2021')
    expect(button).toHaveClass('usa-date-picker__calendar__year--selected')
    expect(button).toHaveAttribute('aria-selected', 'true')
  })

  it('focus defaults to the currently displayed year', () => {
    const { getByText } = render(<YearPicker {...testProps} />)
    const button = getByText('2021')
    expect(button).toHaveClass('usa-date-picker__calendar__year--focused')
    expect(button).toHaveFocus()
    expect(button).toHaveAttribute('tabIndex', '0')
  })

  it('disables year buttons that are outside the min and max dates', () => {
    const { getByText } = render(
      <YearPicker
        {...testProps}
        minDate={parseDateString('2021-01-01') as Date}
        maxDate={parseDateString('2025-01-01') as Date}
      />
    )
    const years = [
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
    ]

    years.forEach((year, index) => {
      if (index < 5 || index > 9) {
        expect(getByText(year)).toBeDisabled()
      } else {
        expect(getByText(year)).not.toBeDisabled()
      }
    })
  })

  describe('navigation', () => {
    it('clicking previous year chunk navigates the year picker back one chunk', () => {
      const { getByTestId, getByText } = render(<YearPicker {...testProps} />)
      userEvent.click(getByTestId('previous-year-chunk'))

      const years = [
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })
    })

    it('clicking next year chunk navigates the year picker forward one chunk', () => {
      const { getByTestId, getByText } = render(<YearPicker {...testProps} />)
      userEvent.click(getByTestId('next-year-chunk'))

      const years = [
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035,
        2036,
        2037,
        2038,
        2039,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })
    })
  })
})
