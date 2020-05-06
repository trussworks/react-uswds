import React from 'react'
import { Title } from './Title'

export default {
  title: 'Header/Title',
  parameters: {
    info: `
USWDS 2.0 Title component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testTitle = <a href="#testlink">Project Title</a>

export const defaultTitle = (): React.ReactElement => <Title>{testTitle}</Title>
