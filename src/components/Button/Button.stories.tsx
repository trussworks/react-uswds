import React from 'react'
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

export const DefaultButton = (): React.ReactElement<any> => (
  <Button type="button">Click Me</Button>
)

export const Secondary = (): React.ReactElement<any> => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const AccentCool = (): React.ReactElement<any> => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const AccentWarm = (): React.ReactElement<any> => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const Base = (): React.ReactElement<any> => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const Outline = (): React.ReactElement<any> => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const Inverse = (): React.ReactElement<any> => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const Big = (): React.ReactElement<any> => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const Unstyled = (): React.ReactElement<any> => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const CustomClass = (): React.ReactElement<any> => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const Disabled = (): React.ReactElement<any> => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
