import React from 'react'
import { render } from '@testing-library/react'

import { DateInput } from './DateInput'

describe('DateInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<DateInput />)
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })
})
