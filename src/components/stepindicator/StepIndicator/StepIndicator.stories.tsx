import React from 'react'
import { Step } from '../Step/Step'
import { StepIndicator } from '../StepIndicator/StepIndicator'

export default {
  title: 'Components/Step Indicator',
  component: StepIndicator,
  parameters: {
    info: `
    ### USWDS 2.0 Step Indicator component
    Source: https://designsystem.digital.gov/components/step-indicator/

    Updates users on their progress through a multi-step process.
    `,
  },
}

export const defaultStepIndicator = (): React.ReactElement => (
  <StepIndicator>
    <Step status="complete">Personal information</Step>
    <Step status="complete">Household status</Step>
    <Step status="current">Supporting documents</Step>
    <Step>Signature</Step>
    <Step>Review and submit</Step>
  </StepIndicator>
)
