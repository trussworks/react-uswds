import React from 'react'
import { queryByTestId, render } from '@testing-library/react'

import { IdentifierIdentity } from './IdentifierIdentity'

const testData = [
  <p className="usa-identifier__identity-disclaimer" key="one">
    {`An official website of the `}
    <a href="#slsf">Test Agency Name</a>
  </p>,
]
describe('IdentifierIdentity component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <IdentifierIdentity domain="domain.edu.mil.gov">
        {testData}
      </IdentifierIdentity>
    )

    expect(queryByText('Test Agency Name')).toBeInTheDocument()
  })

  it('can apply attributes passed in as props', () => {
    const { queryByTestId } = render(
      <IdentifierIdentity
        className="custom-class"
        aria-label="Test aria label"
        domain="a.domain">
        {testData}
      </IdentifierIdentity>
    )
    const testIdQuery = queryByTestId('identifierIdentity')
    expect(testIdQuery).toHaveClass('usa-identifier__identity custom-class')
    expect(testIdQuery).toHaveAttribute('aria-label', 'Test aria label')
  })
})
