import React from 'react'

import { Identifier } from './Identifier'
import { IdentifierMasthead } from '../IdentifierMasthead/IdentifierMasthead'
import { IdentifierLinks } from '../IdentifierLinks/IdentifierLinks'
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

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    identifierLinkGoogle
  </a>,
  <a key="identifierLinkGoogleAgain" href="www.google.com">
    identifierLinkGoogleAgain
  </a>,
]
const identifierMastheadProps = {
  plaintextDomain: 'aGovDomain.gov',
  parentAgencyUrl: 'https://www.parentAgencyExampleUrl.gov/',
  parentAgencyName: 'Test Parent Agency Name',
}

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead {...identifierMastheadProps} />
    <IdentifierLinks links={links} />
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
    <IdentifierMasthead language="spanish" {...identifierMastheadProps} />
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
