import React from 'react'
import { render } from '@testing-library/react'

import { Link } from '../../Link/Link'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'

const testPageName = 'Test Page'

describe('IdentifierLinkItem component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinkItem>{testPageName}</IdentifierLinkItem>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
  })

  it('renders properly with IdentifierLink', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinkItem>
        <IdentifierLink href="#">{testPageName}</IdentifierLink>
      </IdentifierLinkItem>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
  })
})
