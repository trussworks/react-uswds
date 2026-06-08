import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'

const meta = {
  title: 'Components/Radio buttons',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Radio component

Source: https://designsystem.digital.gov/components/radio-buttons
`,
      },
    },
  },
  args: { id: 'input-radio', name: 'input-radio', label: 'My Radio Button' },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadio: Story = {}

export const Selected: Story = {
  args: { defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { indeterminate: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabelDescription: Story = {
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
  },
}

export const Tile: Story = {
  args: { tile: true },
}

export const TileWithLabelDescription: Story = {
  args: {
    labelDescription:
      'This is optional text that can be used to describe the label in more detail.',
    tile: true,
  },
}
