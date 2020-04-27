import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SearchInput } from './SearchInput'

describe('SearchInput component', () => {
  it('renders without errors', () => {
    const mockSubmit = jest.fn()
    const { queryByTestId } = render(
      <SearchInput onSubmit={mockSubmit}></SearchInput>
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(
      <SearchInput onSubmit={mockSubmit}></SearchInput>
    )

    fireEvent.submit(getByTestId('textInput'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
