import React from 'react'
import { InPageNavigation } from './InPageNavigation'
import { CONTENT } from './content'

export default {
  title: 'Components/In-Page Navigation',
  component: InPageNavigation,
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

export const Default = (): React.ReactElement => (
  <div className="usa-in-page-nav-container">
    <InPageNavigation
      content={CONTENT}
      headingLevel="h4"
      rootMargin="0px 0px 0px 0px"
      scrollOffset={0}
      threshold={1}
      title="On this page"
    />
    {CONTENT}
  </div>
)
