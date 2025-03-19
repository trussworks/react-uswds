import React, { type JSX } from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Button component

Source: https://designsystem.digital.gov/components/button/
`,
      },
    },
  },
}

export const DefaultButton = (): JSX.Element => (
  <Button type="button">Click Me</Button>
)

export const Secondary = (): JSX.Element => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const AccentCool = (): JSX.Element => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const AccentWarm = (): JSX.Element => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const Base = (): JSX.Element => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const Outline = (): JSX.Element => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const Inverse = (): JSX.Element => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const Big = (): JSX.Element => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const Unstyled = (): JSX.Element => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const CustomClass = (): JSX.Element => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const Disabled = (): JSX.Element => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
