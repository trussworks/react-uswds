import React from 'react'
import { render } from '@testing-library/react'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

import { IdentifierMasthead } from './IdentifierMasthead'
import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'

// const testParentAgency = {
//   url: '#',
//   name: 'Test Parent Agency Name',
//   logo: dotGovIcon,
// }

const testAgency = {
  url: '#', // prob can pass url directly
  name: 'Test Agency Name', // prob can pass name directly
  ariaLabelAgencyIdentifier: 'Agency identifier',
  ariaLabelAgencyDescription: 'Agency description',
  identityDisclaimer: 'An official website of the',
  logo: dotGovIcon, // prob can pass logo directly
}

const testAgencySpanish = {
  url: '#',
  name: 'Test Agency Name Spanish',
  ariaLabelAgencyIdentifier: 'Identificador de la agencia',
  ariaLabelAgencyDescription: 'Descripción de la agencia',
  identityDisclaimer: 'Un sitio web oficial de',
  logo: dotGovIcon,
}

const testAgencyNoLogos = {
  url: '#',
  name: 'Test Parent Agency Name',
  ariaLabelAgencyIdentifier: 'Agency identifier',
  ariaLabelAgencyDescription: 'Agency description',
  identityDisclaimer: 'An official website of the',
}

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead domain="aGovDomain.gov" agencyInfo={testAgency}>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })

  it('renders section attributes passed in by props', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead
        aria-label="custom aria-label value"
        domain="aGovDomain.gov"
        agencyInfo={testAgency}>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toHaveAttribute(
      'aria-label',
      'custom aria-label value'
    )
  })

  it('renders with a custom className passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead
        className="usa-identifier__custom-class-name"
        domain="aGovDomain.gov"
        agencyInfo={testAgency}>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead')).toHaveClass(
      'usa-identifier__section usa-identifier__section--masthead usa-identifier__custom-class-name'
    )
  })

  it('renders with a logo passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead domain="aGovDomain.gov" agencyInfo={testAgency}>
        <IdentifierLogo
          agencyUrl={testAgency.url}
          agencyName={testAgency.name}
          src={testAgency.logo}
        />
      </IdentifierMasthead>
    )
    expect(queryByTestId('identifierMasthead-logo')).toBeInTheDocument
  })

  it('renders without a logo passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead
        domain="aGovDomain.gov"
        agencyInfo={testAgencyNoLogos}
      />
    )
    expect(queryByTestId('identifierMasthead-logo')).not.toBeInTheDocument()
  })
})
