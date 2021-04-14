import React from 'react'
import { fireEvent, render } from '@testing-library/react'

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
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows the user to select a time using the keyboard typing an exact match', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-17:30')
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

    userEvent.type(comboBoxTextInput, '5:30pm')
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).not.toHaveFocus()

    userEvent.type(comboBoxTextInput, '{enter}')
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows pre-selection of an element via pattern matching', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-17:30')
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

    userEvent.type(comboBoxTextInput, '5:3p')
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).not.toHaveFocus()

    fireEvent.keyDown(comboBoxTextInput, { key: 'ArrowDown' })
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).toHaveFocus()

    userEvent.type(elementToSelect, '{enter}')
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('does not filter options from the list, but does apply styling to first match', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const fiveAm = getByTestId('combo-box-option-05:00')
    const fiveThirtyAm = getByTestId('combo-box-option-05:30')
    const fiveThirtyPm = getByTestId('combo-box-option-17:30')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxClearButton).not.toBeVisible()

    // Click on the TimePicker input
    userEvent.click(comboBoxTextInput)
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    jest.clearAllMocks()

    // Start typing to filter by hour
    userEvent.type(comboBoxTextInput, '5')
    expect(fiveAm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveAm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Continue typing to filter by half hour
    userEvent.type(comboBoxTextInput, ':3')
    expect(fiveThirtyAm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyAm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Continue typing to filter by am/pm
    userEvent.type(comboBoxTextInput, 'p')
    expect(fiveThirtyPm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyPm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Focus the element by pressing the down key
    fireEvent.keyDown(comboBoxTextInput, { key: 'ArrowDown' })
    expect(fiveThirtyPm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyPm).toHaveFocus()

    // Select the element by pressing enter
    userEvent.type(fiveThirtyPm, '{enter}')
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(fiveThirtyPm).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(fiveThirtyPm.textContent)
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

    // Clear the input
    jest.clearAllMocks()

    userEvent.click(comboBoxClearButton)
    expect(testProps.onChange).toHaveBeenCalledTimes(1)
    expect(comboBoxClearButton).not.toBeVisible()
    expect(comboBoxTextInput).not.toHaveValue()
  })
})
