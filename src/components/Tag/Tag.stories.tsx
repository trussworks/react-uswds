import React from 'react'
import { Tag } from './Tag'

export default {
  title: 'Tag',
  parameters: {
    info: `
USWDS 2.0 Tag component

Source: https://designsystem.digital.gov/components/tag/
`,
  },
}

export const defaultTag = (): React.ReactElement => <Tag>My Tag</Tag>

export const customBg = (): React.ReactElement => (
  <Tag background="#e44608">My Tag</Tag>
)

export const customClass = (): React.ReactElement => (
  <Tag className="custom-class">My Tag</Tag>
)
