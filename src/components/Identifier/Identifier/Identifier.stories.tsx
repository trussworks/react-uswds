import React from 'react'
/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */
import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
import { IdentifierLinkItem } from '../IdentifierLinkItem/IdentifierLinkItem'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'
import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

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
    required link
  </a>
)

const identifierMastheadProps = {
  plaintextDomain: 'aGovDomain.gov',
  parentAgencyUrl: 'https://www.parentAgencyExampleUrl.gov/',
  parentAgencyName: 'Test Parent Agency Name',
}

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead {...identifierMastheadProps} />
    <IdentifierLinks links={links}>
      <IdentifierLinkItem>
        <IdentifierLink />
      </IdentifierLinkItem>
    </IdentifierLinks>
    <IdentifierGov />
  </Identifier>
)

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead language="spanish" {...identifierMastheadProps} />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierMultipleLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      hasSecondLogo={true}
      otherAgencyName={'Other Agency'}
      {...identifierMastheadProps}
    />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierMultipleLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      hasSecondLogo={true}
      otherAgencyName={'Other Agency'}
      {...identifierMastheadProps}
    />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierNoLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead hasLogo={false} {...identifierMastheadProps} />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierNoLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead
      language="spanish"
      hasLogo={false}
      {...identifierMastheadProps}
    />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierTaxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead {...identifierMastheadProps} />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierTaxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead language="spanish" {...identifierMastheadProps} />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)
