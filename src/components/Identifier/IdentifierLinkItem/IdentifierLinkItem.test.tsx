import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinkItem } from './IdentifierLinkItem'

describe('IdentifierLinkItem', () => {
  it('renders a list item', () => {
    const { getByRole } = render(
      <IdentifierLinkItem>
        <div>renders list item</div>
      </IdentifierLinkItem>
    )
    // getAllByRole( ‘heading’, {name: ‘My heading’} )
    expect(getByRole('listitem')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-identifier__required-links-item'
    )
  })

  it('renders its children', () => {
    const { getByTestId } = render(
      <IdentifierLinkItem>
        {/* <IdentifierLink /> */}
        {/* <a href="www.google.com">some text</a> */}
        <div>renders its children</div>
      </IdentifierLinkItem>
    )
    expect(getByTestId('identifierLinks-list-item-a')).toBeInTheDocument()
  })
})
