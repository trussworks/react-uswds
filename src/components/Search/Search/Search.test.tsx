import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from './Search'

const sampleLocalization = {
  buttonText: 'Buscar',
}

describe('Search component', () => {
  it('renders without errors', () => {
    const mockSubmit = vi.fn()
    const { queryByTestId, queryByRole } = render(
      <Search onSubmit={mockSubmit}></Search>
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
    expect(queryByRole('button')).toHaveTextContent('Search')
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = vi.fn()
    const { getByTestId } = render(<Search onSubmit={mockSubmit}></Search>)

    fireEvent.submit(getByTestId('textInput'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })

  it('renders a placeholder', () => {
    const mockSubmit = vi.fn()
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
    const mockSubmit = vi.fn()
    const defaultValue = 'Search here'
    const { queryByTestId } = render(
      <Search onSubmit={mockSubmit} defaultValue={defaultValue}></Search>
    )
    expect(queryByTestId('textInput')).toHaveAttribute('value', defaultValue)
  })

  it('renders a label', () => {
    const mockSubmit = vi.fn()
    const { queryAllByLabelText } = render(
      <Search
        onSubmit={mockSubmit}
        label="Buscar"
        i18n={sampleLocalization}></Search>
    )

    expect(queryAllByLabelText('Buscar')).toHaveLength(2)
  })

  it('does not render button text when small', () => {
    const mockSubmit = vi.fn()
    const { queryByRole } = render(
      <Search size="small" onSubmit={mockSubmit}></Search>
    )

    expect(queryByRole('button')).not.toHaveTextContent('Search')
  })

  it('adds small class when size prop is small', () => {
    const mockSubmit = vi.fn()
    const { container } = render(<Search onSubmit={mockSubmit} size="small" />)
    expect(
      container.querySelector('div.usa-search--small button')
    ).toBeInTheDocument()
  })

  it('adds big class when size prop is big', () => {
    const mockSubmit = vi.fn()
    const { container } = render(<Search onSubmit={mockSubmit} size="big" />)
    expect(
      container.querySelector('div.usa-search--big button')
    ).toBeInTheDocument()
    expect(
      container.querySelector('div.usa-search--big input')
    ).toBeInTheDocument()
  })
})
