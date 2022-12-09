import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from './Search'

const sampleLocalization = {
  buttonText: 'Buscar',
}

describe('Search component', () => {
  it('renders without errors', () => {
    const mockSubmit = jest.fn()
    const { queryByTestId, queryByRole } = render(
      <Search onSubmit={mockSubmit}></Search>
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
    expect(queryByRole('button')).toHaveTextContent('Search')
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(<Search onSubmit={mockSubmit}></Search>)

    fireEvent.submit(getByTestId('textInput'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })

  it('renders a placeholder', () => {
    const mockSubmit = jest.fn()
    const placeholder = 'Search here'
    const { queryByTestId } = render(
      <Search onSubmit={mockSubmit} placeholder={placeholder}></Search>
    )
    expect(queryByTestId('textInput')).toHaveAttribute(
      'placeholder',
      placeholder
    )
  })

  it('renders a default value', () => {
    const mockSubmit = jest.fn()
    const defaultValue = 'Search here'
    const { queryByTestId } = render(
      <Search onSubmit={mockSubmit} defaultValue={defaultValue}></Search>
    )
    expect(queryByTestId('textInput')).toHaveAttribute(
      'value',
      defaultValue
    )
  })

  it('renders a label', () => {
    const mockSubmit = jest.fn()
    const { queryByLabelText } = render(
      <Search
        onSubmit={mockSubmit}
        label="Buscar"
        i18n={sampleLocalization}></Search>
    )

    expect(queryByLabelText('Buscar')).toBeInTheDocument()
  })

  it('does not render button text when small', () => {
    const mockSubmit = jest.fn()
    const { queryByRole } = render(
      <Search size="small" onSubmit={mockSubmit}></Search>
    )

    expect(queryByRole('button')).not.toHaveTextContent('Search')
  })

  describe('renders size classes', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it.each([
      ['big', 'usa-search--big'],
      ['small', 'usa-search--small'],
    ])('when size is %s should include class %s', (sizeString, uswdsClass) => {
      const size = sizeString as 'big' | 'small'
      const mockSubmit = jest.fn()
      const { container } = render(<Search onSubmit={mockSubmit} size={size} />)
      expect(container.querySelector('form')).toHaveClass(uswdsClass)
    })
  })
})
