import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker } from './DatePicker'
import { today } from './utils'
import { DAY_OF_WEEK_LABELS, MONTH_LABELS } from './constants'

/* TODO
elements to render:
- internal input (text) - DONE
- external input (text) - DONE
- toggle button - DONE
- date picker calendar dialog - DONE
  states:
  - calendar closed - DONE
  - calendar open
    - date selection - DONE
    - month selection - DONE
    - year selection - DONE
- status text - DONE

PROPS
- input name (internal input) - DONE
- input ID (external input) - DONE
- label & hint IDs (for aria describedby)
- passes required prop to input
- passes disabled prop to input
- handles default value - DONE
- min date - DONE
- max date - DONE
- range date - DONE

METHODS
toggle
  SHOW CALENDAR:
    - gets date to display (keep between min/max, default to today)
    - render calendar with date to display
    - focus on date - ?
    - set status text
  HIDE CALENDAR: - DONE
    - remove active class
    - set hidden to true
    - set status text to ''
validate - DONE
navigate - DONE

EVENTS
- click button toggles calendar - DONE
- click date selects date - DONE
- click month selects month - DONE
- click year selects year - DONE
- click previous month displays previous month - DONE
- click next month displays next month - DONE
- click previous year displays previous year - DONE
- click next year displays next year - DONE
- click previous year chunk displays previous year chunk - DONE
- click next year chunk displays next year chunk - DONE
- click month selection displays select month - DONE
- click year selection displays select year - DONE

  - keydown on calendar date handles up/down/left/right, home, end, pageup, pagedown, shift+pageup, shift+pagedown - DONE
  - keydown on calendar month handles up/down/left/right, home, end, pageup, pagedown - DONE
- keydown on calendar year handles up/down/left/right, home, end, pageup, pagedown - DONE

- keydown on calendar date picker handles tab, shift+tab - DONE
- keydown on calendar month picker handles tab, shift+tab - DONE
- keydown on calendar year picker handles tab, shift+tab - DONE

- keydown on date picker handles escape - DONE

- keyup on date picker calendar prevents default if keyCode !== keydown (?)
  - keydown on date picker calendar sets keydown (see keyup)

- handle mouse move from date/month/year if not mobile - DONE

- focus out on date picker hides calendar if outside - DONE
- input on date picker external input calls reconcileInputValues, update calendar if visible - DONE

OUTSTANDING:
- focus out on date picker external input validates
- keydown on date picker input validates if keycode is enter
 */

describe('DatePicker component', () => {
  const testProps = {
    id: 'birthdate',
    name: 'birthdate',
  }

  it('renders witout errors', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker')).toBeInTheDocument()
  })

  it('renders a hidden "internal" input with the name prop', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-internal-input')).toBeInstanceOf(
      HTMLInputElement
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'type',
      'text'
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'name',
      testProps.name
    )
  })

  it('renders a visible "external" input with the id prop', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-external-input')).toBeInstanceOf(
      HTMLInputElement
    )
    expect(getByTestId('date-picker-external-input')).toHaveAttribute(
      'type',
      'text'
    )
    expect(getByTestId('date-picker-external-input')).toBeVisible()
    expect(getByTestId('date-picker-external-input')).toHaveAttribute(
      'id',
      testProps.id
    )
  })

  it('renders a toggle button', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-button')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('date-picker-button')).toHaveAttribute(
      'aria-label',
      'Toggle calendar'
    )
  })

  it('renders a hidden calendar dialog element', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-calendar')).toBeInstanceOf(HTMLDivElement)
    expect(getByTestId('date-picker-calendar')).toHaveAttribute(
      'role',
      'dialog'
    )
    expect(getByTestId('date-picker-calendar')).not.toBeVisible()
  })

  it('renders a screen reader status element', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-status')).toBeInstanceOf(HTMLDivElement)
    expect(getByTestId('date-picker-status')).toHaveAttribute('role', 'status')
    expect(getByTestId('date-picker-status')).toHaveTextContent('')
  })

  describe('toggling the calendar', () => {
    it('the calendar is hidden on mount', () => {
      const { getByTestId } = render(<DatePicker {...testProps} />)
      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
      expect(getByTestId('date-picker')).not.toHaveClass(
        'usa-date-picker--active'
      )
    })

    it('shows the calendar when the toggle button is clicked and focuses on the selected date', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      expect(getByTestId('date-picker')).toHaveClass('usa-date-picker--active')
      expect(getByText('20')).toHaveFocus()
      expect(getByText('20')).toHaveClass(
        'usa-date-picker__calendar__date--selected'
      )

      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'You can navigate by day using left and right arrows'
      )
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Weeks by using up and down arrows'
      )
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Months by using page up and page down keys'
      )
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Years by using shift plus page up and shift plus page down'
      )
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Home and end keys navigate to the beginning and end of a week'
      )
    })

    it('hides the calendar when the escape key is pressed', () => {
      const { getByTestId } = render(<DatePicker {...testProps} />)
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      expect(getByTestId('date-picker')).toHaveClass('usa-date-picker--active')

      fireEvent.keyDown(getByTestId('date-picker'), { key: 'Escape' })

      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
      expect(getByTestId('date-picker')).not.toHaveClass(
        'usa-date-picker--active'
      )
      expect(getByTestId('date-picker-external-input')).toHaveFocus()
    })

    it('hides the calendar when the toggle button is clicked a second time', () => {
      const { getByTestId } = render(<DatePicker {...testProps} />)
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      expect(getByTestId('date-picker')).toHaveClass('usa-date-picker--active')
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
      expect(getByTestId('date-picker')).not.toHaveClass(
        'usa-date-picker--active'
      )
      expect(getByTestId('date-picker-status')).toHaveTextContent('')
    })

    it('focus defaults to today if there is no value', () => {
      const todayDate = today()
      const todayLabel = `${todayDate.getDate()} ${
        MONTH_LABELS[todayDate.getMonth()]
      } ${todayDate.getFullYear()} ${DAY_OF_WEEK_LABELS[todayDate.getDay()]}`

      const { getByTestId, getByLabelText } = render(
        <DatePicker {...testProps} />
      )
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByLabelText(todayLabel)).toHaveFocus()
    })

    it('adds Selected date to the status text if the selected date and the focused date are the same', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      expect(getByTestId('date-picker')).toHaveClass('usa-date-picker--active')
      expect(getByText('20')).toHaveFocus()

      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Selected date'
      )
    })

    // TODO - test this better
    it('does not add Selected date to the status text if the selected date and the focused date are not the same', () => {
      const { getByTestId } = render(<DatePicker {...testProps} />)
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      expect(getByTestId('date-picker')).toHaveClass('usa-date-picker--active')

      expect(getByTestId('date-picker-status')).not.toHaveTextContent(
        'Selected date'
      )
    })

    it('coerces the display date to a valid value', () => {
      const { getByTestId, getByLabelText } = render(
        <DatePicker
          {...testProps}
          defaultValue="2021-01-06"
          minDate="2021-01-10"
          maxDate="2021-01-20"
        />
      )
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByLabelText('6 January 2021 Wednesday')).not.toHaveFocus()
      expect(getByLabelText('10 January 2021 Sunday')).toHaveFocus()
    })

    it('hides the calendar if focus moves to another element', () => {
      const { getByTestId } = render(
        <>
          <DatePicker {...testProps} />
          <input type="text" data-testid="test-external-element" />
        </>
      )

      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).toBeVisible()
      getByTestId('test-external-element').focus()
      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
    })
  })

  describe('with the disabled prop', () => {
    it('the toggle button and external inputs are disabled, and the internal input is not disabled', () => {
      const { getByTestId } = render(<DatePicker {...testProps} disabled />)
      expect(getByTestId('date-picker-button')).toBeDisabled()
      expect(getByTestId('date-picker-external-input')).toBeDisabled()
      expect(getByTestId('date-picker-internal-input')).not.toBeDisabled()
    })

    it('does not show the calendar when the toggle button is clicked', () => {
      const { getByTestId } = render(<DatePicker {...testProps} disabled />)
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
      expect(getByTestId('date-picker')).not.toHaveClass(
        'usa-date-picker--active'
      )
    })

    it.skip('clicking a date button does not select that date', () => {
      // TODO - test if disabled happens after mount
      const { getByTestId, getByText } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      const dateButton = getByText('15')
      expect(dateButton).toHaveClass('usa-date-picker__calendar__date')
      userEvent.click(dateButton)
      expect(getByTestId('date-picker-external-input')).toHaveValue(
        '01/15/2021'
      )
      expect(getByTestId('date-picker-internal-input')).toHaveValue(
        '2021-01-15'
      )
    })
  })

  describe('with a default value prop', () => {
    it('the internal input value is the date string, and the external input value is the formatted date', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} defaultValue="1988-05-16" />
      )
      expect(getByTestId('date-picker-external-input')).toHaveValue(
        '05/16/1988'
      )
      expect(getByTestId('date-picker-internal-input')).toHaveValue(
        '1988-05-16'
      )
    })

    it('validates a valid default value', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} defaultValue="1988-05-16" />
      )
      expect(getByTestId('date-picker-external-input')).toBeValid()
    })

    it('validates an invalid default value', () => {
      const { getByTestId } = render(
        <DatePicker
          {...testProps}
          defaultValue="1990-01-01"
          minDate="2020-01-01"
        />
      )

      expect(getByTestId('date-picker-external-input')).toBeInvalid()
    })
  })

  describe('selecting a date', () => {
    it('clicking a date button selects that date and closes the calendar and focuses the external input', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      const dateButton = getByText('15')
      expect(dateButton).toHaveClass('usa-date-picker__calendar__date')
      userEvent.click(dateButton)
      expect(getByTestId('date-picker-external-input')).toHaveValue(
        '01/15/2021'
      )
      expect(getByTestId('date-picker-internal-input')).toHaveValue(
        '2021-01-15'
      )
      expect(getByTestId('date-picker-calendar')).not.toBeVisible()
      expect(getByTestId('date-picker-external-input')).toHaveFocus()
    })

    it('selecting a date and opening the calendar focuses on the selected date', () => {
      const { getByTestId, getByText } = render(<DatePicker {...testProps} />)

      // open calendar
      userEvent.click(getByTestId('date-picker-button'))

      // select date
      const dateButton = getByText('12')
      userEvent.click(dateButton)

      // open calendar again
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByText('12')).toHaveFocus()
      expect(getByText('12')).toHaveClass(
        'usa-date-picker__calendar__date--selected'
      )
    })
  })

  describe('typing in a date', () => {
    it('typing a date in the external input updates the selected date', () => {
      const { getByTestId, getByText } = render(<DatePicker {...testProps} />)
      userEvent.type(getByTestId('date-picker-external-input'), '05/16/1988')
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('select-month')).toHaveTextContent('May')
      expect(getByTestId('select-year')).toHaveTextContent('1988')
      expect(getByText('16')).toHaveFocus()
      expect(getByText('16')).toHaveClass(
        'usa-date-picker__calendar__date--selected'
      )
    })

    it('typing a date with the calendar open updates the calendar to the entered date', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      expect(getByTestId('select-month')).toHaveTextContent('January')
      expect(getByTestId('select-year')).toHaveTextContent('2021')
      userEvent.clear(getByTestId('date-picker-external-input'))
      userEvent.type(getByTestId('date-picker-external-input'), '05/16/1988')
      expect(getByTestId('select-month')).toHaveTextContent('May')
      expect(getByTestId('select-year')).toHaveTextContent('1988')
      expect(getByText('16')).toHaveClass(
        'usa-date-picker__calendar__date--selected'
      )
    })

    // TODO - this might be an outstanding difference in behavior from USWDS
    it.skip('typing in the external input does not validate until blurring', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} minDate="2021-01-20" maxDate="2021-02-14" />
      )

      const externalInput = getByTestId('date-picker-external-input')
      expect(externalInput).toBeValid()
      act(() => {
        userEvent.type(externalInput, '05/16/1988')
      })
      expect(externalInput).toBeValid()
      act(() => {
        externalInput.blur()
      })

      expect(externalInput).toBeInvalid()
    })

    it('typing in an invalid date and blurring triggers validation', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} minDate="2021-01-20" maxDate="2021-02-14" />
      )
      const externalInput = getByTestId('date-picker-external-input')

      act(() => {
        userEvent.type(externalInput, '05/16/1988')
        externalInput.blur()
      })

      expect(externalInput).toBeInvalid()
    })
  })

  describe('month selection', () => {
    it('clicking the selected month updates the status text', () => {
      const { getByTestId } = render(<DatePicker {...testProps} />)
      userEvent.click(getByTestId('date-picker-button'))
      userEvent.click(getByTestId('select-month'))
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Select a month'
      )
    })
  })

  describe('year selection', () => {
    it('clicking the selected year updates the status text', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      userEvent.click(getByTestId('select-year'))
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Showing years 2016 to 2027. Select a year.'
      )
    })

    it('clicking previous year chunk updates the status text', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      userEvent.click(getByTestId('select-year'))
      userEvent.click(getByTestId('previous-year-chunk'))
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Showing years 2004 to 2015. Select a year.'
      )
    })

    it('clicking next year chunk navigates the year picker forward one chunk', () => {
      const { getByTestId } = render(
        <DatePicker {...testProps} defaultValue="2021-01-20" />
      )
      userEvent.click(getByTestId('date-picker-button'))
      userEvent.click(getByTestId('select-year'))
      userEvent.click(getByTestId('next-year-chunk'))
      expect(getByTestId('date-picker-status')).toHaveTextContent(
        'Showing years 2028 to 2039. Select a year.'
      )
    })
  })
})
