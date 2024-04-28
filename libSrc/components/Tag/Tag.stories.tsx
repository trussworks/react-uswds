import React from 'react'

import Tag from './Tag.js'

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
  <Tag background="#e44608">My Tag</Tag>
)

export const CustomClass = (): React.ReactElement => (
  <Tag className="custom-class">My Tag</Tag>
)
