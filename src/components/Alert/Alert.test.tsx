import React from 'react'
import { render } from '@testing-library/react'

import { Alert } from './Alert'

describe('Alert component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })
})
