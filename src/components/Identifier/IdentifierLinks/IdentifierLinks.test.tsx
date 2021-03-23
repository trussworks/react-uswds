/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */

import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'

const links = Array(8).fill(
  <a className="usa-identifier__required-link" href="#">
    required link
  </a>
)

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<IdentifierLinks links={links} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })
})
