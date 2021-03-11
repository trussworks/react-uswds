import React from 'react'
// import IdentifierGov from '../IdentifierGov/IdentifierGov'

import { Identifier } from './Identifier'

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

export const identifierDefault = (): React.ReactElement => <Identifier />

/* 
what Storybook examples do we need?

- default
**export const identifierEnglish = (): React.ReactElement => <Identifier />


- default (spanish)
export const identifierSpanish = (): React.ReactElement => <Identifier />


- multiple parents and logos
export const identifierMultipleEnglish = (): React.ReactElement => (
  <Identifier />
)


- multiple parents and logos (spanish)
export const identifierMultipleSpanish = (): React.ReactElement => (
  <Identifier />
)


- no logos
export const identifierNoLogoEnglish = (): React.ReactElement => <Identifier />
**export const identifierNoLogoSpanish = (): React.ReactElement => <Identifier />


- taxpayer disclaimer
export const identifierDisclaimerEnglish = (): React.ReactElement => <Identifier />


- taxpayer disclaimer (spanish)
export const identifierDisclaimerSpanish = (): React.ReactElement => <Identifier />
*/
