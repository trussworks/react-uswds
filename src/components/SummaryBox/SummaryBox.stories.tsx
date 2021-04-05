import React from 'react'
import { SummaryBox } from './SummaryBox'

export default {
  title: 'Components/SummaryBox',
  component: SummaryBox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SummaryBox component

Source: https://designsystem.digital.gov/components/summary-box
`,
      },
    },
  },
}

export const SummaryBoxDefault = (): React.ReactElement => (
  <SummaryBox heading="Example heading">some text</SummaryBox>
)
