import { Tag } from './Tag'

export default {
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
}

export const DefaultTag = (): React.ReactElement => <Tag>My Tag</Tag>

export const CustomBg = (): React.ReactElement => (
  <Tag background="#d83933">My Tag</Tag>
)

export const CustomClass = (): React.ReactElement => (
  <Tag className="bg-secondary">My Tag</Tag>
)
