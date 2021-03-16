import React from 'react'
import { Title } from './Title'

export default {
  title: 'Components/Header/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Title component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

const testTitle = <a href="#testlink">Project Title</a>

export const defaultTitle = (): React.ReactElement => <Title>{testTitle}</Title>
