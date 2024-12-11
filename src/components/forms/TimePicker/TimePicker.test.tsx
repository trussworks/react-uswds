import { render, waitFor, within } from '@testing-library/react'

import { TimePicker } from './TimePicker'
import { userEvent } from '@testing-library/user-event'

describe('TimePicker Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const testProps = {
    id: 'appointment-time',
    name: 'appointment-time',
    label: 'Appointment time',
    onChange: vi.fn(),
  }

  it('renders without errors', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const timePickerComboBox = getByTestId('combo-box')

    expect(timePickerComboBox).toBeInTheDocument()
    expect(timePickerComboBox).toHaveClass('usa-combo-box usa-time-picker')
  })

  it('accepts minTime, maxTime, and step non-defaults', () => {
    const { getByTestId } = render(
      <TimePicker {...testProps} minTime="12:00" maxTime="18:00" step={60} />
    )

    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(
      within(comboBoxDropdownList).getByText('12:00pm')
    ).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('1:00pm')).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('2:00pm')).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('3:00pm')).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('4:00pm')).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('5:00pm')).toBeInTheDocument()
    expect(within(comboBoxDropdownList).getByText('6:00pm')).toBeInTheDocument()
    expect(comboBoxDropdownList.children.length).toEqual(7)
  })

  it('renders a label', () => {
    const { queryByText } = render(
      <TimePicker {...testProps} label="test label" />
    )

    const label = queryByText('test label')

    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('id', `${testProps.name}-label`)
  })

  it('renders a hint', () => {
    const { queryByText } = render(
      <TimePicker {...testProps} hint="test hint" />
    )

    const hint = queryByText('test hint')

    expect(hint).toBeInTheDocument()
    expect(hint).toHaveAttribute('id', `${testProps.name}-hint`)
  })

  it('allows the user to select a time', async () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-00:00')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxClearButton).not.toBeVisible()

    // Click on the TimePicker input
    await userEvent.click(comboBoxTextInput)
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()

    // Select a time
    await userEvent.hover(elementToSelect)
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')

    await userEvent.click(elementToSelect)
    expect(testProps.onChange).toHaveBeenCalledTimes(2) // once on mount, twice on select
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows the user to select a time using the keyboard typing an exact match', async () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-17:30')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxClearButton).not.toBeVisible()

    // Click on the TimePicker input
    await userEvent.click(comboBoxTextInput)
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()

    // Select a time
    await userEvent.type(comboBoxTextInput, '5:30pm')
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).not.toHaveFocus()

    await userEvent.type(comboBoxTextInput, '{enter}')
    expect(testProps.onChange).toHaveBeenCalledTimes(2)
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows pre-selection of an element via pattern matching', async () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxDropdownList = getByTestId('combo-box-option-list')
    const elementToSelect = getByTestId('combo-box-option-17:30')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxClearButton).not.toBeVisible()

    // Click on the TimePicker input
    await userEvent.click(comboBoxTextInput)

    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()

    // Select a time
    await userEvent.type(comboBoxTextInput, '5:3p')
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).not.toHaveFocus()

    await userEvent.type(comboBoxTextInput, '{ArrowDown}')
    expect(elementToSelect).toHaveClass('usa-combo-box__list-option--focused')
    expect(elementToSelect).toHaveFocus()

    await userEvent.type(elementToSelect, '{enter}')
    expect(testProps.onChange).toHaveBeenNthCalledWith(2, '17:30') // called twice, first time on mount
    expect(elementToSelect).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(elementToSelect.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('does not filter options from the list, but does apply styling to first match', async () => {
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
    await userEvent.click(comboBoxTextInput)
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'true')
    expect(comboBoxDropdownList).toBeVisible()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Start typing to filter by hour
    await userEvent.type(comboBoxTextInput, '5')
    expect(fiveAm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveAm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Continue typing to filter by half hour
    await userEvent.type(comboBoxTextInput, ':3')
    expect(fiveThirtyAm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyAm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Continue typing to filter by am/pm
    await userEvent.type(comboBoxTextInput, 'p')
    expect(fiveThirtyPm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyPm).not.toHaveFocus()
    expect(comboBoxDropdownList.children.length).toEqual(48)

    // Focus the element by pressing the down key
    await userEvent.type(comboBoxTextInput, '{ArrowDown}')
    expect(fiveThirtyPm).toHaveClass('usa-combo-box__list-option--focused')
    expect(fiveThirtyPm).toHaveFocus()

    // Select the element by pressing enter
    await userEvent.type(fiveThirtyPm, '{enter}')
    expect(testProps.onChange).toHaveBeenNthCalledWith(2, '17:30')
    expect(fiveThirtyPm).toHaveClass(
      'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
    )
    expect(comboBoxTextInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxDropdownList).not.toBeVisible()
    expect(comboBoxTextInput).toHaveValue(fiveThirtyPm.textContent)
    expect(comboBoxClearButton).toBeVisible()
  })

  it('allows the user to clear the input', async () => {
    const { getByTestId } = render(
      <TimePicker {...testProps} defaultValue="00:00" />
    )

    const comboBoxTextInput = getByTestId('combo-box-input')
    const comboBoxClearButton = getByTestId('combo-box-clear-button')

    expect(comboBoxClearButton).toBeVisible()
    expect(comboBoxTextInput).toHaveValue('12:00am')

    // Clear the input
    await userEvent.click(comboBoxClearButton)
    expect(comboBoxClearButton).not.toBeVisible()
    expect(comboBoxTextInput).not.toHaveValue()
    await waitFor(() => {
      expect(testProps.onChange).toHaveBeenCalledTimes(2)
    })
  })
})
