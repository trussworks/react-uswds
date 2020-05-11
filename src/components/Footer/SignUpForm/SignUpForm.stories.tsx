import React from 'react'
import { SignUpForm } from './SignUpForm'

export default {
  title: 'Footer/SignUpForm',
  parameters: {
    info: `
      Form with a single input and submit button. Used in USWDS 2.0 Footer component.
    
    Source: https://designsystem.digital.gov/components/form-controls/#footer
    `,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}
export const Example = (): React.ReactElement => (
  <SignUpForm
    heading="Sign up"
    label="Your email address"
    onSubmit={mockSubmit}
  />
)
