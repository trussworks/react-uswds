import { NavMenuButton } from './NavMenuButton'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
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
} satisfies Meta<typeof NavMenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMenuNavMenuButton: Story = {
  args: {
    label: 'Menu',
  },
}
