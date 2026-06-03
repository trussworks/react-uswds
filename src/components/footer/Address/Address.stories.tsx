import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Address } from './Address'

const meta: Meta<typeof Address> = {
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

export default meta
type Story = StoryObj<typeof meta>

export const WithLinks: Story = {
  render: () => (
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
  ),
}
