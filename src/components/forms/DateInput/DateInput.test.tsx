import React from 'react'
import { render } from '@testing-library/react'

import { DateInput } from './DateInput'

describe('DateInput component', () => {
  it('renders without errors', () => {
    const { getByText } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        legend="Date of Birth"
        hint="For example: 4 08 1999"
      />
    )
    expect(getByText('Date of Birth')).toBeInTheDocument()
  })

  it('renders the month, day and year inputs', () => {
    const { getByText } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        legend="Date of Birth"
        hint="For example: 4 08 1999"
      />
    )
    expect(getByText('Month')).toBeInTheDocument()
    expect(getByText('Day')).toBeInTheDocument()
    expect(getByText('Year')).toBeInTheDocument()
  })

  it('does not render a dataInputElement when false', () => {
    const { queryByText } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        legend="Date of Birth"
        hint="For example: 4 08 1999"
        month={false}
      />
    )
    expect(queryByText('Month')).toEqual(null)
  })
})
