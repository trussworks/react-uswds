import React from 'react'
import { render } from '@testing-library/react'

import { DateInputGroup } from './DateInputGroup'

describe('DateInputGroup component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<DateInputGroup />)
    expect(getByTestId('dateInputGroup')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(<DateInputGroup>DATES</DateInputGroup>)

    expect(getByText('DATES')).toBeInTheDocument()
  })
})
