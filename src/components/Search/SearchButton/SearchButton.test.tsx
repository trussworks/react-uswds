import React from 'react'
import { render } from '@testing-library/react'
import { SearchButton } from './SearchButton'

const sampleLocalization = {
  buttonText: 'Buscar',
}

describe('SearchButton component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(<SearchButton />)
    expect(queryByRole('button')).toHaveTextContent('Search')
  })

  it('does not render button text when small', () => {
    const { queryByRole } = render(<SearchButton size="small" />)

    expect(queryByRole('button')).not.toHaveTextContent('Search')
  })

  it('internationalization', () => {
    const { queryByText } = render(<SearchButton i18n={sampleLocalization} />)

    expect(queryByText('Buscar')).toBeInTheDocument()
  })

  describe('renders size classes', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })
    it.each([
      ['big', 'usa-search--big'],
      ['small', 'usa-search--small'],
    ])('when size is %s should include class %s', (sizeString, uswdsClass) => {
      const size = sizeString as 'big' | 'small'
      const { container } = render(<SearchButton size={size} />)
      expect(container.querySelector('div')).toHaveClass(uswdsClass)
    })
  })
})
