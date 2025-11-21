import { InPageNavigation } from './InPageNavigation'
import {
  CONTENT,
  MINIMUM_CONTENT,
  NESTED_CONTENT,
  SELECT_CONTENT,
  SELECT_HEADERS,
} from './content'
import type { Meta, StoryObj } from '@storybook/react-vite'

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
    headingElements: {
      control: 'check',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    minimumHeadingCount: {
      control: { type: 'number', min: 0, max: 12 },
    },
    contentSelector: {
      control: 'text',
    },
    content: {
      control: { disable: true },
    },
  },
  args: {
    mainProps: { className: 'usa-prose' },
    headingLevel: 'h4',
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,
    title: 'On this page',
    headingElements: ['h2', 'h3'],
    minimumHeadingCount: 2,
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
} satisfies Meta<typeof InPageNavigation>

type Story = StoryObj<typeof InPageNavigation>

export const Default: Story = {
  args: {
    content: CONTENT,
  },
}

// Storybook seems to force anchor links to open in a new window,
// so this story is just to demonstrate how the scroll offset works
export const ScrollOffset: Story = {
  args: {
    content: CONTENT,
    scrollOffset: '2rem',
  },
}

export const ContentSelector: Story = {
  args: {
    content: SELECT_CONTENT,
    contentSelector: '.main-content',
    minimumHeadingCount: 1,
  },
}

export const HeaderSelector: Story = {
  args: {
    content: SELECT_HEADERS,
  },
}

export const MinimumHeaders: Story = {
  args: {
    content: MINIMUM_CONTENT,
    minimumHeadingCount: 4,
  },
}

export const NestedContent: Story = {
  args: {
    content: NESTED_CONTENT,
  },
}
