import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SearchInput } from './SearchInput'

describe('SearchInput component', () => {
  it('renders without errors', () => {
    const mockSubmit = jest.fn()
    const { queryByTestId } = render(
      <SearchInput onSubmit={mockSubmit}></SearchInput>
    )
    expect(queryByTestId('searchInput')).toBeInTheDocument()
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(
      <SearchInput onSubmit={mockSubmit}></SearchInput>
    )

    fireEvent.submit(getByTestId('searchInput'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
