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

  it('renders without a hint', () => {
    const { container, getByTestId } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
    )

    expect(container.querySelector('.usa-hint')).not.toBeInTheDocument()
    expect(getByTestId('textInput')).not.toHaveAttribute('aria-describedby')
  })

  it('renders a screen reader hint', () => {
    const { getByText, getByTestId } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
        srHint="Enter 1 or 2 digits for the day."
      />
    )

    const hint = getByText('Enter 1 or 2 digits for the day.')
    expect(hint).toHaveClass('usa-hint usa-sr-only')
    expect(hint).toHaveAttribute('id', 'testDateInput-hint')
    expect(hint.nextElementSibling).toBe(getByTestId('textInput'))
    expect(getByTestId('textInput')).toHaveAttribute(
      'aria-describedby',
      'testDateInput-hint'
    )
  })

  it('combines aria-describedby with the screen reader hint id', () => {
    const { getByTestId } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
        srHint="Enter 1 or 2 digits for the day."
        aria-describedby="testDateInput-error"
      />
    )

    expect(getByTestId('textInput')).toHaveAttribute(
      'aria-describedby',
      'testDateInput-hint testDateInput-error'
    )
  })

  it('sets aria-describedby when no screen reader hint exists', () => {
    const { getByTestId } = render(
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
        aria-describedby="testDateInput-error"
      />
    )

    expect(getByTestId('textInput')).toHaveAttribute(
      'aria-describedby',
      'testDateInput-error'
    )
  })
})
