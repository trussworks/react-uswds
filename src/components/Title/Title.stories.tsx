import React from 'react'
import { Title } from './Title'

export default {
  title: 'Title',
  parameters: {
    info: `
USWDS 2.0 Title component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testTitle = 'Test Title'
const testLink = '#testLinkOne'

export const defaultTitle = (): React.ReactElement => (
  <Title title={testTitle} link={testLink}></Title>
)
