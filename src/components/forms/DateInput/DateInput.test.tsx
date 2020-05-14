import React from 'react'
import { render } from '@testing-library/react'

import { DateInput } from './DateInput'

describe('DateInput component', () => {
  it('renders without errors', () => {
    const { getByText } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
    )
    expect(getByText('Day')).toBeInTheDocument()
  })

  it('renders the month, day and year inputs', () => {
    const { getByText } = render(
      <>
        <DateInput
          id="testDateInput"
          name="testName"
          label="Day"
          unit="day"
          maxLength={2}
          minLength={2}
        />
        <DateInput
          id="testDateInput"
          name="testName"
          label="Month"
          unit="month"
          maxLength={2}
          minLength={2}
        />
        <DateInput
          id="testDateInput"
          name="testName"
          label="Year"
          unit="year"
          maxLength={4}
          minLength={4}
        />
      </>
    )
    expect(getByText('Month')).toBeInTheDocument()
    expect(getByText('Day')).toBeInTheDocument()
    expect(getByText('Year')).toBeInTheDocument()
  })

  it('renders the correct class based on unit', () => {
    const { getByTestId } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
    )
    expect(getByTestId('formGroup')).toHaveClass('usa-form-group--day')
  })
})
