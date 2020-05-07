import React from 'react'
import { Address } from './Address'

export default {
  title: 'Footer/Address',
  parameters: {
    info: `
      Displays address items (most likely links or simple text) in a row, wrapped in address tag.  Used in USWDS 2.0 Footer component.
      
      Source: https://designsystem.digital.gov/components/form-controls/#footer
      `,
  },
}

export const WithLinks = (): React.ReactElement => (
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
