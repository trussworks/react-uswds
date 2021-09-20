import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
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
      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
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
      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
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
      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
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
        2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })

      expect(getByTestId('previous-year-chunk')).toHaveFocus()
    })

    it('clicking previous year chunk focuses on the year picker if the previous year chunk becomes disabled', async () => {
      const { getByTestId, getByText } = render(
        <YearPicker
          {...testProps}
          minDate={parseDateString('2004-01-01') as Date}
        />
      )
      userEvent.click(getByTestId('previous-year-chunk'))

      const years = [
        2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })

      expect(getByTestId('previous-year-chunk')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-year-picker')).toHaveFocus()
      })
    })

    it('clicking next year chunk navigates the year picker forward one chunk', () => {
      const { getByTestId, getByText } = render(<YearPicker {...testProps} />)
      userEvent.click(getByTestId('next-year-chunk'))

      const years = [
        2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })

      expect(getByTestId('next-year-chunk')).toHaveFocus()
    })

    it('clicking next year chunk focuses on the year picker if the next year chunk becomes disabled', async () => {
      const { getByTestId, getByText } = render(
        <YearPicker
          {...testProps}
          maxDate={parseDateString('2039-01-01') as Date}
        />
      )
      userEvent.click(getByTestId('next-year-chunk'))

      const years = [
        2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039,
      ]

      years.forEach((year) => {
        const button = getByText(year)
        expect(button).toBeInstanceOf(HTMLButtonElement)
        expect(button).toHaveAttribute('data-value', `${year}`)
      })

      expect(getByTestId('next-year-chunk')).toBeDisabled()

      await waitFor(() => {
        expect(getByTestId('calendar-year-picker')).toHaveFocus()
      })
    })
  })

  describe('focusing on hover', () => {
    it('focuses on a year when hovered over', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      expect(getByText('2021')).toHaveFocus()
      fireEvent.mouseMove(getByText('2017'))
      expect(getByText('2017')).toHaveFocus()
    })

    it('does not focus on a disabled year when hovered over', () => {
      const { getByText } = render(
        <YearPicker {...testProps} maxDate={new Date('April 2021')} />
      )

      expect(getByText('2021')).toHaveFocus()
      expect(getByText('2024')).toBeDisabled()
      fireEvent.mouseMove(getByText('2024'))
      expect(getByText('2024')).not.toHaveFocus()
    })

    it('does not focus on a year when hovered over if on an iOS device', () => {
      jest
        .spyOn(navigator, 'userAgent', 'get')
        .mockImplementation(() => 'iPhone')

      const { getByText } = render(<YearPicker {...testProps} />)

      expect(getByText('2021')).toHaveFocus()
      fireEvent.mouseMove(getByText('2017'))
      expect(getByText('2017')).not.toHaveFocus()
      jest.restoreAllMocks()
    })
  })

  describe('keyboard navigation', () => {
    it('pressing the up arrow key from a year navigates to 3 years before', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'ArrowUp',
      })
      expect(getByText('2018')).toHaveFocus()
    })

    it('pressing the down arrow key from a year navigates to 3 years later', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'ArrowDown',
      })
      expect(getByText('2024')).toHaveFocus()
    })

    it('pressing the left arrow key from a year navigates to the previous year', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'ArrowLeft',
      })
      expect(getByText('2020')).toHaveFocus()
    })

    it('pressing the right arrow key from a year navigates to the next year', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'ArrowRight',
      })
      expect(getByText('2022')).toHaveFocus()
    })

    it('pressing the home key from a year navigates to the first year of the selected row', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'Home',
      })
      expect(getByText('2019')).toHaveFocus()
    })

    it('pressing the end key from a year navigates to the last year of the selected row', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'End',
      })
      expect(getByText('2021')).toHaveFocus()
    })

    it('pressing the page down key from a year navigates forward a year chunk', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'PageDown',
      })
      expect(getByText('2033')).toHaveFocus()
    })

    it('pressing the page up key from a year navigates back a year chunk', () => {
      const { getByText } = render(<YearPicker {...testProps} />)

      fireEvent.keyDown(getByText('2021'), {
        key: 'PageUp',
      })
      expect(getByText('2009')).toHaveFocus()
    })

    it('pressing tab cycles through the focusable elements within the year picker', () => {
      const { getByText, getByTestId } = render(<YearPicker {...testProps} />)

      expect(getByText('2021')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('next-year-chunk')).toHaveFocus()
      userEvent.tab()
      expect(getByTestId('previous-year-chunk')).toHaveFocus()
      userEvent.tab()
      expect(getByText('2021')).toHaveFocus()
    })

    it('pressing tab+shift cycles backwards through the focusable elements within the year picker', () => {
      const { getByText, getByTestId } = render(<YearPicker {...testProps} />)

      expect(getByText('2021')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('previous-year-chunk')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByTestId('next-year-chunk')).toHaveFocus()
      userEvent.tab({ shift: true })
      expect(getByText('2021')).toHaveFocus()
    })

    it('pressing tab only cycles through elements that are not disabled', () => {
      const { getByText, getByTestId } = render(
        <YearPicker
          {...testProps}
          minDate={parseDateString('1980-01-01') as Date}
          maxDate={parseDateString('2025-01-01') as Date}
        />
      )

      expect(getByText('2021')).toHaveFocus()
      expect(getByTestId('next-year-chunk')).toBeDisabled()
      userEvent.tab()
      expect(getByTestId('previous-year-chunk')).toHaveFocus()
      userEvent.tab()
      expect(getByText('2021')).toHaveFocus()
    })
  })
})
