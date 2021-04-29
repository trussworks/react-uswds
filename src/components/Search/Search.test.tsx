import React from 'react'
import { render, fireEvent } from '@testing-library/react'

jest.mock('../../deprecation')
import { deprecationWarning } from '../../deprecation'
import { Search } from './Search'

const sampleLocalization = {
  buttonText: 'Buscar',
}

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
      expect(deprecationWarning).toHaveBeenCalledTimes(0)
    })

    it.each([
      ['big', 'small', 'usa-search--big'],
      ['small', 'big', 'usa-search--small'],
    ])(
      'prefers size to deprecated %s',
      (sizeString, deprecatedKey, uswdsClass) => {
        const size = sizeString as 'big' | 'small'
        const deprecatedProps: { [key: string]: boolean } = {}
        deprecatedProps[`${deprecatedKey}`] = true
        const mockSubmit = jest.fn()
        const { container } = render(
          <Search onSubmit={mockSubmit} size={size} {...deprecatedProps} />
        )
        expect(container.querySelector('form')).toHaveClass(uswdsClass)
        expect(deprecationWarning).toHaveBeenCalledTimes(1)
      }
    )
  })
})
