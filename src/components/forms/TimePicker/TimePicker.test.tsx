import React from 'react'
import { render } from '@testing-library/react'

import { TimePicker } from './TimePicker'
import userEvent from '@testing-library/user-event'

describe('TimePicker Component', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const testProps = {
    id: 'appointment-time',
    name: 'appointment-time',
    onChange: jest.fn(),
  }

  it('renders without errors', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const timePickerComboBox = getByTestId('combo-box')

    expect(timePickerComboBox).toBeInTheDocument()
    expect(timePickerComboBox).toHaveClass('usa-combo-box usa-time-picker')
  })

  it('allows the user to select a time', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-00:00')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxClearButton).not.toBeVisible()

    // Click on the TimePicker input
    userEvent.click(comboBoxTextInput)
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()

    // Select a time
    jest.clearAllMocks()

    userEvent.hover(elementToSelect)
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')

    userEvent.click(elementToSelect)
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--selected')
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows the user to clear the input', () => {
    const { getByTestId } = render(
      <TimePicker {...testProps} defaultValue="00:00" />
    )

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxClearButton).toBeVisible()
    expect(comboBoxTextInput).toHaveValue('12:00am')

    //Clear the input
    jest.clearAllMocks()

    userEvent.click(comboBoxClearButton)
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(comboBoxClearButton).not.toBeVisible()
    expect(comboBoxTextInput).not.toHaveValue()
  })
})
