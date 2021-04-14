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

// const testIdentifierLogoSpanish = (
//   <img
//     src={dotGovIcon}
//     className="usa-identifier__logo-img"
//     alt="Logo de Test Agency Name"
//   />
// )

describe('IdentifierLogos component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLogos>{testIdentifierLogo}</IdentifierLogos>
    )

    expect(getByRole('img')).toBeInTheDocument()
  })

  it('accepts a custom class name', () => {
    const { queryByTestId } = render(
      <IdentifierLogos className="custom-class">
        {testIdentifierLogo}
      </IdentifierLogos>
    )

    expect(queryByTestId('identifierLogos')).toHaveClass(
      'usa-identifier__logos custom-class'
    )
  })
})
