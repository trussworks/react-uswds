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
    Google
  </a>,
  <a key="identifierLinkOrWhatever" href="www.google.com">
    google but with a small g
  </a>,
]

export const identifierDefault = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierMultipleLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierMultipleLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierNoLogosEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierNoLogosSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)

export const identifierTaxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov />
  </Identifier>
)

export const identifierTaxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier>
    <IdentifierMasthead />
    <IdentifierLinks links={links} />
    <IdentifierGov language="spanish" />
  </Identifier>
)
