import React from 'react'
import { render } from '@testing-library/react'
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
    - month selection
    - year selection
- status text

PROPS
- input name (internal input) - DONE
- input ID (external input) - DONE
- label & hint IDs (for aria describedby)
- passes required prop to input
- passes disabled prop to input
- handles default value - DONE
- min date - DONE
- max date - DONE
- range date (?)

METHODS
toggle
  SHOW CALENDAR:
    - gets date to display (keep between min/max, default to today)
    - render calendar with date to display
    - focus on date
  HIDE CALENDAR:
    - remove active class
    - set hidden to true
    - set status text to ''
validate
navigate

EVENTS
- click button toggles calendar - DONE
- click date selects date - DONE
- click month selects month
- click year selects year
- click previous month displays previous month
- click next month displays next month
- click previous year displays previous year
- click next year displays next year
- click previous year chunk displays previous year chunk
- click next year chunk displays next year chunk
- click month focuses month
- click year focuses year
- keyup on date picker calendar prevents default if keyCode !== keydown (?)
  - keydown on date picker calendar sets keydown (see keyup)
- keydown on date picker input validates if keycode is enter
- keydown on calendar date handles up/down/left/right, home, end, pageup, pagedown, shift+pageup, shift+pagedown
- keydown on calendar date picker handles tab, shift+tab
- keydown on calendar month handles up/down/left/right, home, end, pageup, pagedown
- keydown on calendar month picker handles tab, shift+tab
- keydown on calendar year handles up/down/left/right, home, end, pageup, pagedown
- keydown on calendar year picker handles tab, shift+tab
- keydown on date picker handles escape
- focus out on date picker external input validates
- focus out on date picker hides calendar if outside
- input on date picker external input calls reconcileInputValues, update calendar if visible
- handle mouse move from date/month/year if not mobile
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
    })

    it('defaults to today if there is no value', () => {
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
    })
  })
})
