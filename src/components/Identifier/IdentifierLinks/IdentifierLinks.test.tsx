import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierLinks />)
    expect(queryByTestId('identifierLinks')).toBeInTheDocument()
  })

  it('renders nav attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierLinks aria-label="Important links" />
    )
    expect(queryByTestId('identifierLinks')).toHaveAttribute('aria-label')
  })
})
