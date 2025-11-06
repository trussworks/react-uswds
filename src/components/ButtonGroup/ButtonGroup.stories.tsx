import React, { type JSX } from 'react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'

export default {
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

export const Default = (): JSX.Element => (
  <ButtonGroup type="default">
    <Link href="#" className="usa-button usa-button--outline">
      Back
    </Link>
    <Button type="button">Continue</Button>
  </ButtonGroup>
)

export const Segmented = (): JSX.Element => (
  <ButtonGroup type="segmented">
    <Button type="button">Map</Button>
    <Button type="button" outline>
      Satellite
    </Button>
    <Button type="button" outline>
      Hybrid
    </Button>
  </ButtonGroup>
)
