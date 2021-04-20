/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierIdentity } from './IdentifierIdentity'
import { Link } from '../../Link/Link'

describe('IdentifierIdentity component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
      </IdentifierIdentity>
    )

    const testIdQuery = queryByTestId('identifierIdentity')
    expect(testIdQuery).toBeInTheDocument()
    expect(testIdQuery).toHaveClass('usa-identifier__identity')
  })

  it('can apply attributes passed in as props', () => {
    const { queryByTestId } = render(
      <IdentifierIdentity
        className="custom-class"
        aria-label="Test aria label"
        domain="a.domain">
        {`An official website of the `}
        <Link href="#">Test Agency Name</Link>
      </IdentifierIdentity>
    )
    const testIdQuery = queryByTestId('identifierIdentity')
    expect(testIdQuery).toHaveClass('usa-identifier__identity custom-class')
    expect(testIdQuery).toHaveAttribute('aria-label', 'Test aria label')
  })
})
