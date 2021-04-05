import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Button component

Source: https://designsystem.digital.gov/components/button/
`,
      },
    },
  },
}

export const defaultButton = (): React.ReactElement => (
  <Button type="button">Click Me</Button>
)

export const secondary = (): React.ReactElement => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const accentCool = (): React.ReactElement => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const accentWarm = (): React.ReactElement => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const base = (): React.ReactElement => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const outline = (): React.ReactElement => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const inverse = (): React.ReactElement => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const big = (): React.ReactElement => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const unstyled = (): React.ReactElement => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const customClass = (): React.ReactElement => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const disabled = (): React.ReactElement => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
