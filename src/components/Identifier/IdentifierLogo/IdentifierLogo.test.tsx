import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierLogo } from './IdentifierLogo'

const testIdentifierLogo = (
  <img
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Test Agency Name logo"
  />
)

const testIdentifierLogoSpanish = (
  <img
    src={dotGovIcon}
    className="usa-identifier__logo-img"
    alt="Logo de Test Agency Name"
  />
)

describe('IdentifierLogo component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLogo agencyUrl="#">{testIdentifierLogo}</IdentifierLogo>
    )
    expect(getByRole('link')).toHaveClass('usa-identifier__logo')
    expect(getByRole('img')).toHaveClass('usa-identifier__logo-img')
  })

  it('passes properties properly to the respective elements', () => {
    const { getByRole } = render(
      <IdentifierLogo
        agencyUrl="#"
        className="usa-identifier__logo-custom-class-name">
        {testIdentifierLogo}
      </IdentifierLogo>
    )
    expect(getByRole('img')).toHaveProperty('alt', 'Test Agency Name logo')
    expect(getByRole('link')).toHaveProperty('href')
  })

  // it('renders ')
})
