import React from 'react'
/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'
// import { IdentifierLogo } from '../IdentifierLogo/IdentifierLogo'
// import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
// import { IdentifierLink } from '../IdentifierLink/IdentifierLink'

import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    info: `
  USWDS 2.0 Identifier component
  
  Source: https://designsystem.digital.gov/components/identifier/
  `,
  },
}

const links = Array(8).fill(
  <a className="usa-identifier__required-link" href="#">
    Example Link
  </a>
)

const testParentAgency = {
  url: 'https://www.parentAgencyExampleUrl.gov/',
  name: 'Test Parent Agency Name',
  logo: dotGovIcon,
}

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov />
  </Identifier>
)

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierMultipleLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov />
  </Identifier>
)

export const identifierMultipleLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierNoLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov />
  </Identifier>
)

export const identifierNoLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierTaxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov />
  </Identifier>
)

export const identifierTaxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      domain="domain.gov.mil.edu"
      parentAgencies={[testParentAgency]}
    />
    <IdentifierLinks>{links}</IdentifierLinks>
    <IdentifierGov language="spanish" />
  </Identifier>
)
