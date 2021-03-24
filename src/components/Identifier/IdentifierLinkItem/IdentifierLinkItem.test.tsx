import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'

describe('IdentifierLinkItem component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinkItem>Test Page</IdentifierLinkItem>
    )
    expect(queryByText('Test Page')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
  })

  it('renders properly with IdentifierLink', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinkItem>
        <IdentifierLink href="#">Test Page</IdentifierLink>
      </IdentifierLinkItem>
    )
    expect(queryByText('Test Page')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
  })
})
