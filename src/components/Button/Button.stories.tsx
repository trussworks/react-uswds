import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: { type: 'button', children: 'Click Me' },
}

export const Secondary: Story = {
  args: { type: 'button', secondary: true, children: 'Click Me' },
}

export const AccentCool: Story = {
  args: { type: 'button', accentStyle: 'cool', children: 'Click Me' },
}

export const AccentWarm: Story = {
  args: { type: 'button', accentStyle: 'warm', children: 'Click Me' },
}

export const Base: Story = {
  args: { type: 'button', base: true, children: 'Click Me' },
}

export const Outline: Story = {
  args: { type: 'button', outline: true, children: 'Click Me' },
}

export const Inverse: Story = {
  args: { type: 'button', inverse: true, children: 'Click Me' },
}

export const Big: Story = {
  args: { type: 'button', size: 'big', children: 'Click Me' },
}

export const Unstyled: Story = {
  args: { type: 'button', unstyled: true, children: 'Click Me' },
}

export const CustomClass: Story = {
  args: { type: 'button', className: 'custom-class', children: 'Click Me' },
}

export const Disabled: Story = {
  args: { type: 'button', disabled: true, children: 'Click Me' },
}
