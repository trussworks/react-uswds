import React from 'react'
import { render } from '@testing-library/react'

import { DateRangePicker } from './DateRangePicker'
import userEvent from '@testing-library/user-event'

const startDatePickerTestProps = {
  id: 'start-date',
  name: 'start-date',
}

const endDatePickerTestProps = {
  id: 'end-date',
  name: 'end-date',
}

describe('DateRangePicker component', () => {
  it('renders without errors', () => {
    const { getByTestId, getAllByTestId } = render(
      <DateRangePicker
        startDatePickerProps={startDatePickerTestProps}
        endDatePickerProps={endDatePickerTestProps}
      />
    )

    const dateRangePicker = getByTestId('date-range-picker')
    expect(dateRangePicker).toBeInTheDocument()
    expect(dateRangePicker).toHaveClass('usa-date-range-picker')

    const datePickers = getAllByTestId('date-picker')
    expect(datePickers).toHaveLength(2)

    const startDatePicker = datePickers[0]
    const endDatePicker = datePickers[1]
    expect(startDatePicker).toHaveClass('usa-date-range-picker__range-start')
    expect(endDatePicker).toHaveClass('usa-date-range-picker__range-end')

    const internalInputs = getAllByTestId('date-picker-internal-input')
    expect(internalInputs).toHaveLength(2)

    const startDatePickerInternalInput = internalInputs[0]
    const endDatePickerInternalInput = internalInputs[1]
    expect(startDatePickerInternalInput).not.toHaveAttribute('aria-describedby')
    expect(endDatePickerInternalInput).not.toHaveAttribute('aria-describedby')

    const externalInputs = getAllByTestId('date-picker-external-input')
    expect(externalInputs).toHaveLength(2)

    const startDatePickerExternalInput = externalInputs[0]
    const endDatePickerExternalInput = externalInputs[1]
    expect(startDatePickerExternalInput).not.toHaveAttribute('aria-describedby')
    expect(endDatePickerExternalInput).not.toHaveAttribute('aria-describedby')
  })

  it('renders labels when specified', () => {
    const { getByTestId, getAllByTestId, queryByText } = render(
      <DateRangePicker
        startDateLabel="Start Date"
        startDatePickerProps={startDatePickerTestProps}
        endDateLabel="End Date"
        endDatePickerProps={endDatePickerTestProps}
      />
    )

    const dateRangePicker = getByTestId('date-range-picker')
    expect(dateRangePicker).toBeInTheDocument()
    expect(dateRangePicker).toHaveClass('usa-date-range-picker')

    const datePickers = getAllByTestId('date-picker')
    expect(datePickers).toHaveLength(2)

    const startDatePicker = datePickers[0]
    const endDatePicker = datePickers[1]
    expect(startDatePicker).toHaveClass('usa-date-range-picker__range-start')
    expect(endDatePicker).toHaveClass('usa-date-range-picker__range-end')

    const startDateLabel = queryByText('Start Date')
    expect(startDateLabel).toBeInTheDocument()
    expect(startDateLabel).toHaveClass('usa-label')

    const endDateLabel = queryByText('End Date')
    expect(endDateLabel).toBeInTheDocument()
    expect(endDateLabel).toHaveClass('usa-label')

    const internalInputs = getAllByTestId('date-picker-internal-input')
    expect(internalInputs).toHaveLength(2)

    const startDatePickerInternalInput = internalInputs[0]
    const endDatePickerInternalInput = internalInputs[1]
    expect(startDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-label'
    )
    expect(endDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-label'
    )

    const externalInputs = getAllByTestId('date-picker-external-input')
    expect(externalInputs).toHaveLength(2)

    const startDatePickerExternalInput = externalInputs[0]
    const endDatePickerExternalInput = externalInputs[1]
    expect(startDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-label'
    )
    expect(endDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-label'
    )
  })

  it('renders hints when specified', () => {
    const { getByTestId, getAllByTestId, queryByText } = render(
      <DateRangePicker
        startDateHint="start date format: mm/dd/yyyy"
        startDatePickerProps={startDatePickerTestProps}
        endDateHint="end date format: mm/dd/yyyy"
        endDatePickerProps={endDatePickerTestProps}
      />
    )

    const dateRangePicker = getByTestId('date-range-picker')
    expect(dateRangePicker).toBeInTheDocument()
    expect(dateRangePicker).toHaveClass('usa-date-range-picker')
    expect(getAllByTestId('date-picker')).toHaveLength(2)

    const startDateHint = queryByText('start date format: mm/dd/yyyy')
    expect(startDateHint).toBeInTheDocument()
    expect(startDateHint).toHaveClass('usa-hint')

    const endDateHint = queryByText('end date format: mm/dd/yyyy')
    expect(endDateHint).toBeInTheDocument()
    expect(endDateHint).toHaveClass('usa-hint')

    const internalInputs = getAllByTestId('date-picker-internal-input')
    expect(internalInputs).toHaveLength(2)

    const startDatePickerInternalInput = internalInputs[0]
    const endDatePickerInternalInput = internalInputs[1]
    expect(startDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-hint'
    )
    expect(endDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-hint'
    )

    const externalInputs = getAllByTestId('date-picker-external-input')
    expect(externalInputs).toHaveLength(2)

    const startDatePickerExternalInput = externalInputs[0]
    const endDatePickerExternalInput = externalInputs[1]
    expect(startDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-hint'
    )
    expect(endDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-hint'
    )
  })

  it('renders labels and hints simultaneously, properly populating the aria-describedby property on each DatePicker', () => {
    const { getByTestId, getAllByTestId, queryByText } = render(
      <DateRangePicker
        startDateLabel="Start Date"
        startDateHint="start date format: mm/dd/yyyy"
        startDatePickerProps={startDatePickerTestProps}
        endDateLabel="End Date"
        endDateHint="end date format: mm/dd/yyyy"
        endDatePickerProps={endDatePickerTestProps}
      />
    )

    const dateRangePicker = getByTestId('date-range-picker')
    expect(dateRangePicker).toBeInTheDocument()
    expect(dateRangePicker).toHaveClass('usa-date-range-picker')
    expect(getAllByTestId('date-picker')).toHaveLength(2)

    const startDateLabel = queryByText('Start Date')
    expect(startDateLabel).toBeInTheDocument()
    expect(startDateLabel).toHaveClass('usa-label')

    const endDateLabel = queryByText('End Date')
    expect(endDateLabel).toBeInTheDocument()
    expect(endDateLabel).toHaveClass('usa-label')

    const startDateHint = queryByText('start date format: mm/dd/yyyy')
    expect(startDateHint).toBeInTheDocument()
    expect(startDateHint).toHaveClass('usa-hint')

    const endDateHint = queryByText('end date format: mm/dd/yyyy')
    expect(endDateHint).toBeInTheDocument()
    expect(endDateHint).toHaveClass('usa-hint')

    const internalInputs = getAllByTestId('date-picker-internal-input')
    expect(internalInputs).toHaveLength(2)

    const startDatePickerInternalInput = internalInputs[0]
    const endDatePickerInternalInput = internalInputs[1]
    expect(startDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-label start-date-hint'
    )
    expect(endDatePickerInternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-label end-date-hint'
    )

    const externalInputs = getAllByTestId('date-picker-external-input')
    expect(externalInputs).toHaveLength(2)

    const startDatePickerExternalInput = externalInputs[0]
    const endDatePickerExternalInput = externalInputs[1]
    expect(startDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'start-date-label start-date-hint'
    )
    expect(endDatePickerExternalInput).toHaveAttribute(
      'aria-describedby',
      'end-date-label end-date-hint'
    )
  })

  it('allows a date range to be selected by using both date pickers to pick start and end dates', () => {
    const mockStartDatePickerOnChange = jest.fn()
    const mockEndDatePickerOnChange = jest.fn()
    const { getAllByTestId, getByText } = render(
      <DateRangePicker
        startDatePickerProps={{
          ...startDatePickerTestProps,
          defaultValue: '2021-01-20',
          onChange: mockStartDatePickerOnChange,
        }}
        endDatePickerProps={{
          ...endDatePickerTestProps,
          defaultValue: '2021-01-25',
          onChange: mockEndDatePickerOnChange,
        }}
      />
    )

    const datePickerButtons = getAllByTestId('date-picker-button')
    const startDatePickerButton = datePickerButtons[0]
    const endDatePickerButton = datePickerButtons[1]

    const calendars = getAllByTestId('date-picker-calendar')
    const startDatePickerCalendar = calendars[0]
    const endDatePickerCalendar = calendars[1]

    const internalInputs = getAllByTestId('date-picker-internal-input')
    const startDatePickerInternalInput = internalInputs[0]
    const endDatePickerInternalInput = internalInputs[1]

    const externalInputs = getAllByTestId('date-picker-external-input')
    const startDatePickerExternalInput = externalInputs[0]
    const endDatePickerExternalInput = externalInputs[1]

    // Select the start date from the first date picker:
    userEvent.click(startDatePickerButton)
    expect(startDatePickerCalendar).toBeVisible()
    const defaultSelectedStartDate = getByText('20')
    expect(defaultSelectedStartDate).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--selected usa-date-picker__calendar__date--range-date-start'
    )
    const newStartDateButton = getByText('21')
    expect(newStartDateButton).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--within-range'
    )
    userEvent.click(newStartDateButton)
    expect(startDatePickerExternalInput).toHaveValue('01/21/2021')
    expect(startDatePickerInternalInput).toHaveValue('2021-01-21')
    expect(startDatePickerExternalInput).toHaveFocus()
    expect(startDatePickerCalendar).not.toBeVisible()
    expect(mockStartDatePickerOnChange).toHaveBeenCalledWith('01/21/2021')

    // Select the end date from the second date picker:
    userEvent.click(endDatePickerButton)
    expect(endDatePickerCalendar).toBeVisible()
    const defaultSelectedEndDate = getByText('25')
    expect(defaultSelectedEndDate).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--selected usa-date-picker__calendar__date--range-date-end'
    )
    const newEndDateButton = getByText('24')
    expect(newEndDateButton).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--within-range'
    )
    userEvent.click(newEndDateButton)
    expect(endDatePickerExternalInput).toHaveValue('01/24/2021')
    expect(endDatePickerInternalInput).toHaveValue('2021-01-24')
    expect(endDatePickerExternalInput).toHaveFocus()
    expect(endDatePickerCalendar).not.toBeVisible()
    expect(mockEndDatePickerOnChange).toHaveBeenCalledWith('01/24/2021')
  })

  it('prevents the selection of a date range where the end date is before the start date', () => {
    const mockStartDatePickerOnChange = jest.fn()
    const mockEndDatePickerOnChange = jest.fn()
    const { getAllByTestId, getByText } = render(
      <DateRangePicker
        startDatePickerProps={{
          ...startDatePickerTestProps,
          defaultValue: '2021-01-20',
          onChange: mockStartDatePickerOnChange,
        }}
        endDatePickerProps={{
          ...endDatePickerTestProps,
          defaultValue: '2021-01-25',
          onChange: mockEndDatePickerOnChange,
        }}
      />
    )

    const datePickerButtons = getAllByTestId('date-picker-button')
    const startDatePickerButton = datePickerButtons[0]
    const endDatePickerButton = datePickerButtons[1]

    const calendars = getAllByTestId('date-picker-calendar')
    const startDatePickerCalendar = calendars[0]
    const endDatePickerCalendar = calendars[1]

    // Try to select an start date before the end date:
    userEvent.click(startDatePickerButton)
    expect(startDatePickerCalendar).toBeVisible()
    const defaultSelectedStartDate = getByText('20')
    expect(defaultSelectedStartDate).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--selected usa-date-picker__calendar__date--range-date-start'
    )
    const startDatePickerRangeEnd = getByText('25')
    expect(startDatePickerRangeEnd).toHaveClass(
      'usa-date-picker__calendar__date  usa-date-picker__calendar__date--range-date-end'
    )
    const invalidStartDateButton = getByText('26')
    expect(invalidStartDateButton).toHaveClass(
      'usa-date-picker__calendar__date'
    )
    expect(invalidStartDateButton).toBeDisabled()
    userEvent.click(invalidStartDateButton)
    expect(startDatePickerCalendar).toBeVisible()
    expect(mockEndDatePickerOnChange).not.toHaveBeenCalledWith('01/26/2021')

    // Try to select an end date before the start date:
    userEvent.click(endDatePickerButton)
    expect(endDatePickerCalendar).toBeVisible()
    const endDatePickerRangeStart = getByText('20')
    expect(endDatePickerRangeStart).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--range-date-start'
    )
    const defaultSelectedEndDate = getByText('25')
    expect(defaultSelectedEndDate).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--selected usa-date-picker__calendar__date--range-date-end'
    )
    const invalidEndDateButton = getByText('19')
    expect(invalidEndDateButton).toHaveClass('usa-date-picker__calendar__date')
    expect(invalidEndDateButton).toBeDisabled()
    userEvent.click(invalidEndDateButton)
    expect(endDatePickerCalendar).toBeVisible()
    expect(mockEndDatePickerOnChange).not.toHaveBeenCalledWith('01/19/2021')
  })

  it('clears the range-determining date of the opposite DatePicker when the input is cleared', () => {
    const mockStartDatePickerOnChange = jest.fn()
    const mockEndDatePickerOnChange = jest.fn()
    const { getAllByTestId, getByText } = render(
      <DateRangePicker
        startDateLabel="Event start date"
        startDateHint="mm/dd/yyyy"
        startDatePickerProps={{
          id: 'event-date-start',
          name: 'event-date-start',
          defaultValue: '2021-01-20',
          onChange: mockStartDatePickerOnChange,
        }}
        endDateLabel="Event end date"
        endDateHint="mm/dd/yyyy"
        endDatePickerProps={{
          id: 'event-date-end',
          name: 'event-date-end',
          defaultValue: '2021-01-25',
          onChange: mockEndDatePickerOnChange,
        }}
      />
    )

    const datePickerExternalInputs = getAllByTestId(
      'date-picker-external-input'
    )
    const startDatePickerExternalInput = datePickerExternalInputs[0]

    const datePickerButtons = getAllByTestId('date-picker-button')
    const endDatePickerButton = datePickerButtons[1]

    const calendars = getAllByTestId('date-picker-calendar')
    const endDatePickerCalendar = calendars[1]

    // Verify the end date cannot be selected before the default-selected start date:
    userEvent.click(endDatePickerButton)
    expect(endDatePickerCalendar).toBeVisible()
    const endDatePickerRangeStart = getByText('20')
    expect(endDatePickerRangeStart).toHaveClass(
      'usa-date-picker__calendar__date usa-date-picker__calendar__date--range-date-start'
    )
    const invalidEndDateButton = getByText('19')
    expect(invalidEndDateButton).toHaveClass('usa-date-picker__calendar__date')
    expect(invalidEndDateButton).toBeDisabled()
    userEvent.click(invalidEndDateButton)
    expect(endDatePickerCalendar).toBeVisible()
    expect(mockEndDatePickerOnChange).not.toHaveBeenCalledWith('01/19/2021')

    // Close the end date picker calendar:
    userEvent.click(endDatePickerButton)
    expect(endDatePickerCalendar).not.toBeVisible()

    // Clear the start picker input:
    userEvent.clear(startDatePickerExternalInput)

    // Verify an end date before the previously selected start date can be selected:
    userEvent.click(endDatePickerButton)
    expect(endDatePickerCalendar).toBeVisible()
    const noLongerRangeStart = getByText('20')
    expect(noLongerRangeStart).toHaveClass('usa-date-picker__calendar__date')
    const previouslyInvalidEndDateButton = getByText('19')
    expect(previouslyInvalidEndDateButton).toHaveClass(
      'usa-date-picker__calendar__date'
    )
    expect(previouslyInvalidEndDateButton).not.toBeDisabled()
    userEvent.click(previouslyInvalidEndDateButton)
    expect(endDatePickerCalendar).not.toBeVisible()
    expect(mockEndDatePickerOnChange).toHaveBeenCalledWith('01/19/2021')
  })
})
