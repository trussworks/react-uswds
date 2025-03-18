import React, { type JSX } from 'react'
import { Address } from './Address'

export default {
  title: 'Components/Footer/Address',
  component: Address,
  parameters: {
    docs: {
      description: {
        component: `
Display address items (most likely links or simple text) in a row, wrapped in address tag.  Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`,
      },
    },
  },
}

export const WithLinks = (): JSX.Element => (
  <Address
    items={[
      <a key="phone" href="tel:123-456-7890">
        (123) 456 - 7890
      </a>,
      <a key="email" href="mailto:thisnotfake@emailaddress.com">
        thisnotfake@emailaddress.com
      </a>,
    ]}
  />
)
