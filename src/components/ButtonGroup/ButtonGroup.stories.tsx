import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button groups',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 ButtonGroup component

Source: https://designsystem.digital.gov/components/button-groups/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup type="default">
      <Link href="#" className="usa-button usa-button--outline">
        Back
      </Link>
      <Button type="button">Continue</Button>
    </ButtonGroup>
  ),
}

export const Segmented: Story = {
  render: () => (
    <ButtonGroup type="segmented">
      <Button type="button">Map</Button>
      <Button type="button" outline>
        Satellite
      </Button>
      <Button type="button" outline>
        Hybrid
      </Button>
    </ButtonGroup>
  ),
}
