import React from 'react'
import { render } from '@testing-library/react'

import { Calendar } from './Calendar'
import { today } from './utils'
import { MONTH_LABELS } from './constants'

describe('Calendar', () => {
  const mockSelectDate = jest.fn()

  it('renders calendar navigation', () => {
    const { getByTestId } = render(
      <Calendar handleSelectDate={mockSelectDate} />
    )
    expect(getByTestId('previous-year')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('previous-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-month')).toBeInstanceOf(HTMLButtonElement)
    expect(getByTestId('next-year')).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders the selected month and year', () => {
    const { getByTestId } = render(
      <Calendar
        handleSelectDate={mockSelectDate}
        date={new Date('January 2021')}
      />
    )
    expect(getByTestId('select-month')).toHaveTextContent('January')
    expect(getByTestId('select-year')).toHaveTextContent('2021')
  })

  it('defaults to the current month and year', () => {
    const todayDate = today()
    const { getByTestId } = render(
      <Calendar handleSelectDate={mockSelectDate} />
    )
    expect(getByTestId('select-month')).toHaveTextContent(
      MONTH_LABELS[todayDate.getMonth()]
    )
    expect(getByTestId('select-year')).toHaveTextContent(
      `${todayDate.getFullYear()}`
    )
  })
})
