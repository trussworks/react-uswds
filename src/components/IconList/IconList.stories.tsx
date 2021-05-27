import React from 'react'

import { IconList } from './IconList'

export default {
  title: 'Components/IconList',
  component: IconList,
  parameters: {
    docs: {
      description: {
        component: `
###USWDS 2.0 IconList component
Source: https://designsystem.digital.gov/components/icon-list/
`,
      },
    },
  },
}

export const defaultIconList = (): React.ReactElement => (
  <IconList>list item</IconList>
)

export const simpleContent = (): React.ReactElement => (
  <IconList>simple content</IconList>
)

export const richContent = (): React.ReactElement => (
  <IconList>rich content</IconList>
)

export const customSize = (): React.ReactElement => (
  <IconList>custom size</IconList>
)

export const customSizeRichContent = (): React.ReactElement => (
  <IconList>custom size rich content</IconList>
)
