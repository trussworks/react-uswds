import React, { type JSX } from 'react'
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

export const DefaultTag = (): JSX.Element => <Tag>My Tag</Tag>

export const CustomBg = (): JSX.Element => (
  <Tag background="#d83933">My Tag</Tag>
)

export const CustomClass = (): JSX.Element => (
  <Tag className="bg-secondary">My Tag</Tag>
)
