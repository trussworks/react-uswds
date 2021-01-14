import React from 'react'
import { render } from '@testing-library/react'

import { DatePicker } from './DatePicker'

describe('DatePicker component', () => {
  it('renders witout errors', () => {
    const { getByTestId } = render(<DatePicker />)
    expect(getByTestId('date-picker')).toBeInTheDocument()
  })
})
