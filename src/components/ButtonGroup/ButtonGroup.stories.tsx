import React from 'react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  parameters: {
    info: `
USWDS 2.0 ButtonGroup component

Source: https://designsystem.digital.gov/components/button-groups/
`,
  },
}

export const Default = (): React.ReactElement => (
  <ButtonGroup type="default">
    <Link href="#" className="usa-button usa-button--outline">
      Back
    </Link>
    <Button type="button">Continue</Button>
  </ButtonGroup>
)

export const Segmented = (): React.ReactElement => (
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
