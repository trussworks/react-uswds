import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Search } from './Search'

describe('Search component', () => {
  it('renders without errors', () => {
    const mockSubmit = jest.fn()
    const { queryByTestId } = render(<Search onSubmit={mockSubmit}></Search>)
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(<Search onSubmit={mockSubmit}></Search>)

    fireEvent.submit(getByTestId('textInput'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
