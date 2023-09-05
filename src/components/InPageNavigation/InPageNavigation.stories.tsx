import React from 'react'
import { InPageNavigation } from './InPageNavigation'
import { CONTENT } from './content'
import { HeadingLevel } from '../../types/headingLevel'

export default {
  title: 'Components/In-Page Navigation',
  component: InPageNavigation,
  argTypes: {
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    rootMargin: {
      control: 'text',
    },
    scrollOffset: {
      control: 'text',
    },
    threshold: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
    title: {
      control: 'text',
    },
  },
  args: {
    headingLevel: 'h4',
    rootMargin: '0px 0px 0px 0px',
    scrollOffset: '0',
    threshold: 1,
    title: 'On this page',
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 In-Page Navigation component

Source: https://designsystem.digital.gov/components/in-page-navigation/
`,
      },
    },
  },
}

type StorybookArguments = {
  headingLevel: HeadingLevel
  rootMargin: string
  scrollOffset: string
  threshold: number
  title: string
}

export const Default = (argTypes: StorybookArguments): React.ReactElement => (
  <InPageNavigation
    content={CONTENT}
    headingLevel={argTypes.headingLevel}
    rootMargin={argTypes.rootMargin}
    scrollOffset={argTypes.scrollOffset}
    threshold={argTypes.threshold}
    title={argTypes.title}
  />
)
