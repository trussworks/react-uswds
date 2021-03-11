import React from 'react'

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

export const defaultIdentifier = (): React.ReactElement => <Identifier />

/* 
what Storybook examples do we need?
- default
- default (spanish)
- multiple parents and logos
- multiple parents and logos (spanish)
- no logos
- taxpayer disclaimer
- taxpayer disclaimer (spanish)
*/
