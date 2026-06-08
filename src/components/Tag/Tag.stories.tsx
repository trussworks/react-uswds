import { Tag } from './Tag'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Tag component

Source: https://designsystem.digital.gov/components/tag/
`,
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTag: Story = {
  args: { children: 'My Tag' },
}

export const CustomBg: Story = {
  args: { background: '#d83933', children: 'My Tag' },
}

export const CustomClass: Story = {
  args: { className: 'bg-secondary', children: 'My Tag' },
}
