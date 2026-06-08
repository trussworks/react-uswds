import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Header/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Title component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const testTitle = <a href="#testlink">Project Title</a>

export const DefaultTitle: Story = {
  render: () => <Title>{testTitle}</Title>,
}
