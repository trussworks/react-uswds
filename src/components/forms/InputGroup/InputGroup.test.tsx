import React from 'react'
import { render } from '@testing-library/react'

import { InputGroup } from './InputGroup'

describe('InputGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<InputGroup>My Input Group</InputGroup>)
    expect(queryByTestId('inputGroup')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<InputGroup>My Input Group</InputGroup>)
    expect(queryByText('My Input Group')).toBeInTheDocument()
  })
})
