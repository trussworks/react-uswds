import React from 'react'

import { render } from '@testing-library/react'
import { IdentifierLogos } from './IdentifierLogos'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

const testIdentifierLogo = (
  <img
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Test Agency Name logo"
  />
)

describe('IdentifierLogos component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLogos>{testIdentifierLogo}</IdentifierLogos>
    )

    expect(getByRole('img')).toBeInTheDocument()
  })

  it('can apply attributes passed in as props', () => {
    const { queryByTestId } = render(
      <IdentifierLogos aria-label="Test aria label" className="custom-class">
        {testIdentifierLogo}
      </IdentifierLogos>
    )

    const testIdQuery = queryByTestId('identifierLogos')
    expect(testIdQuery).toHaveClass('usa-identifier__logos custom-class')
    expect(testIdQuery).toHaveAttribute('aria-label', 'Test aria label')
  })
})
