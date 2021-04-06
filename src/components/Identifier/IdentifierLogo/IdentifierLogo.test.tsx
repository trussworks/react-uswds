import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierLogo } from './IdentifierLogo'

describe('IdentifierLogo component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLogo href="#">
        <img
          src={dotGovIcon}
          className="usa-identifier__logo-img"
          alt="Test Agency Name logo"
        />
      </IdentifierLogo>
    )

    expect(getByRole('link')).toHaveClass('usa-identifier__logo')
    expect(getByRole('img')).toHaveClass('usa-identifier__logo-img')
  })

  it('renders with a custom className', () => {
    const { getByRole } = render(
      <IdentifierLogo
        href="#"
        className="usa-identifier__logo-custom-class-name">
        <img
          src={dotGovIcon}
          className="usa-identifier__logo-img"
          alt="Test Agency Name logo"
        />
      </IdentifierLogo>
    )

    expect(getByRole('img')).toHaveProperty('alt', 'Test Agency Name logo')
    expect(getByRole('link')).toHaveClass(
      'usa-identifier__logo-custom-class-name'
    )
    expect(getByRole('link')).toHaveProperty('href')
  })

  it('renders a logo in Spanish', () => {
    const { getByRole } = render(
      <IdentifierLogo href="#">
        <img
          src={dotGovIcon}
          className="usa-identifier__logo-img"
          alt="Logo de Test Agency Name"
        />
      </IdentifierLogo>
    )

    expect(getByRole('img')).toHaveProperty('alt', 'Logo de Test Agency Name')
  })
})
