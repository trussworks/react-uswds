import React, { type JSX } from 'react'
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

export const Default = (argTypes: StorybookArguments): JSX.Element => (
  <InPageNavigation
    content={CONTENT}
    headingLevel={argTypes.headingLevel}
    mainProps={{ className: 'usa-prose' }}
    rootMargin={argTypes.rootMargin}
    threshold={argTypes.threshold}
    title={argTypes.title}
  />
)

// Storybook seems to force anchor links to open in a new window,
// so this story is just to demonstrate how the scroll offset works
export const ScrollOffset = (argTypes: StorybookArguments): JSX.Element => (
  <InPageNavigation
    content={CONTENT}
    headingLevel={argTypes.headingLevel}
    mainProps={{ className: 'usa-prose' }}
    rootMargin={argTypes.rootMargin}
    scrollOffset="2rem"
    threshold={argTypes.threshold}
    title={argTypes.title}
  />
)
