/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */

import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLinks>
        <IdentifierLinkItem>
          <IdentifierLink href="#">Test Agency Name</IdentifierLink>
        </IdentifierLinkItem>
      </IdentifierLinks>
    )
    expect(getByRole('listitem')).toBeInTheDocument()
  })
})
