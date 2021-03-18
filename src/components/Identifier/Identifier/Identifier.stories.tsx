import React from 'react'

import { Identifier } from './Identifier'
// import { IdentifierGov } from '../IdentifierGov/IdentifierGov'

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    info: `
  USWDS 2.9 Identifier component
  
  Source: https://designsystem.digital.gov/components/identifier/
  `,
  },
}

export const identifierDefault = (): React.ReactElement => <Identifier />

export const identifierSpanish = (): React.ReactElement => <Identifier />

// export const identifierSpanish = (): React.ReactElement => (
//   <Identifier>
//     <IdentifierGov language="spanish" />
//   </Identifier>
// )

export const identifierMultipleLogosEnglish = (): React.ReactElement => (
  <Identifier />
)

export const identifierMultipleLogosSpanish = (): React.ReactElement => (
  <Identifier />
)

export const identifierNoLogosEnglish = (): React.ReactElement => <Identifier />

export const identifierNoLogosSpanish = (): React.ReactElement => <Identifier />

export const identifierTaxDisclaimerEnglish = (): React.ReactElement => (
  <Identifier />
)

export const identifierTaxDisclaimerSpanish = (): React.ReactElement => (
  <Identifier />
)

/* 
USWDS STORYBOOK EXAMPLES

- default
- default (spanish)

- multiple parents and logos
- multiple parents and logos (spanish)

- no logos 
// does not have an example for spanish

- taxpayer disclaimer
- taxpayer disclaimer (spanish)
*/
