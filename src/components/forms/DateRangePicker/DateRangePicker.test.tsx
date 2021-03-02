import React from 'react'
import { render } from '@testing-library/react'

import { DateRangePicker } from './DateRangePicker'

const startDatePickerTestProps = {
  id: 'start-date',
  name: 'start-date'
}

const endDatePickerTestProps = {
  id: 'end-date',
  name: 'end-date'
}

describe("DateRangePicker component", () => {
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
    expect(getAllByTestId('date-picker')).toHaveLength(2)
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
    expect(getAllByTestId('date-picker')).toHaveLength(2)
    
    const startDateLabel = queryByText("Start Date")
    expect(startDateLabel).toBeInTheDocument()
    expect(startDateLabel).toHaveClass('usa-label')
    
    const endDateLabel = queryByText("End Date")
    expect(endDateLabel).toBeInTheDocument()
    expect(endDateLabel).toHaveClass('usa-label')
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
    
    const startDateLabel = queryByText("start date format: mm/dd/yyyy")
    expect(startDateLabel).toBeInTheDocument()
    expect(startDateLabel).toHaveClass('usa-hint')
    
    const endDateLabel = queryByText("end date format: mm/dd/yyyy")
    expect(endDateLabel).toBeInTheDocument()
    expect(endDateLabel).toHaveClass('usa-hint')
  })
})