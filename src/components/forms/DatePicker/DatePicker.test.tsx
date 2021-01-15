import React from 'react'
import { render } from '@testing-library/react'

import { DatePicker } from './DatePicker'

/* TODO
elements to render:
- internal input (text)
- external input (text)
- toggle button
- date picker calendar dialog
  states:
  - calendar closed
  - calendar open
    - date selection
    - month selection
    - year selection
- status text

PROPS
- input name (internal input)
- input ID (external input)
- label & hint IDs (for aria describedby)
- passes required prop to input
- passes disabled prop to input
- handles default value
- min date
- max date
- range date (?)

METHODS
toggle
validate
navigate

EVENTS
- click button toggles calendar
- click date selects date
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

  it('renders a hidden "internal" input', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-internal-input')).toBeInstanceOf(
      HTMLInputElement
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'type',
      'text'
    )
    expect(getByTestId('date-picker-internal-input')).toHaveAttribute(
      'name',
      testProps.name
    )
  })

  it('renders a visible "external" input', () => {
    const { getByTestId } = render(<DatePicker {...testProps} />)
    expect(getByTestId('date-picker-external-input')).toBeInstanceOf(
      HTMLInputElement
    )
    expect(getByTestId('date-picker-external-input')).toBeVisible()

    expect(getByTestId('date-picker-external-input')).toHaveAttribute(
      'type',
      'text'
    )
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

  describe('with the disabled prop', () => {
    it('the toggle button and external inputs are disabled, and the internal input is not disabled', () => {
      const { getByTestId } = render(<DatePicker {...testProps} disabled />)
      expect(getByTestId('date-picker-button')).toBeDisabled()
      expect(getByTestId('date-picker-external-input')).toBeDisabled()
      expect(getByTestId('date-picker-internal-input')).not.toBeDisabled()
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
  })
})
