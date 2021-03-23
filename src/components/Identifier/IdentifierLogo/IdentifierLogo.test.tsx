import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierLogo } from './IdentifierLogo'

describe('IdentifierLogo component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <IdentifierLogo
        src={dotGovIcon}
        agencyUrl="#"
        agencyName="Test Agency Name"
      />
    )
    expect(getByRole('link')).toHaveClass('usa-identifier__logo')
    expect(getByRole('img')).toHaveClass('usa-identifier__logo-img')
  })

  it('passes properties properly to the respective elements', () => {
    const { getByRole } = render(
      <IdentifierLogo
        src={dotGovIcon}
        agencyUrl="#"
        agencyName="Test Agency Name"
      />
    )
    expect(getByRole('img')).toHaveProperty('alt', 'Test Agency Name logo')
    expect(getByRole('link')).toHaveProperty('href')
  })
})
