import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierIdentity } from './IdentifierIdentity'
import { Link } from '../../Link/Link'

describe('IdentifierIdentity component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IdentifierIdentity domain="domain.edu.mil.gov">
        <span aria-hidden="true">An</span>
        {` official website of the `}
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
        <span aria-hidden="true">An</span>
        {` official website of the `}
        <Link href="#">Test Agency Name</Link>
      </IdentifierIdentity>
    )
    const testIdQuery = queryByTestId('identifierIdentity')
    expect(testIdQuery).toHaveClass('usa-identifier__identity custom-class')
    expect(testIdQuery).toHaveAttribute('aria-label', 'Test aria label')
  })
})
