import { NavMenuButton } from './NavMenuButton'

export default {
  title: 'Components/Header/NavMenuButton',
  component: NavMenuButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 NavMenuButton used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export const DefaultMenuNavMenuButton = (): React.ReactElement => (
  <NavMenuButton label="Menu" />
)
