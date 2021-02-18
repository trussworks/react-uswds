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
    <Step label="Personal information" status="complete" />
    <Step label="Household status" status="complete" />
    <Step label="Supporting documents" status="current" />
    <Step label="Signature" />
    <Step label="Review and submit" />
  </StepIndicator>
)

export const noLabels = (): React.ReactElement => (
  <StepIndicator showLabels={false}>
    <Step label="Personal information" status="complete" />
    <Step label="Household status" status="complete" />
    <Step label="Supporting documents" status="current" />
    <Step label="Signature" />
    <Step label="Review and submit" />
  </StepIndicator>
)

export const centered = (): React.ReactElement => (
  <StepIndicator centered>
    <Step label="Personal information" status="complete" />
    <Step label="Household status" status="complete" />
    <Step label="Supporting documents" status="current" />
    <Step label="Signature" />
    <Step label="Review and submit" />
  </StepIndicator>
)

export const counters = (): React.ReactElement => (
  <StepIndicator counters>
    <Step label="Personal information" status="complete" />
    <Step label="Household status" status="complete" />
    <Step label="Supporting documents" status="current" />
    <Step label="Signature" />
    <Step label="Review and submit" />
  </StepIndicator>
)

export const smallCounters = (): React.ReactElement => (
  <StepIndicator counters="small">
    <Step label="Personal information" status="complete" />
    <Step label="Household status" status="complete" />
    <Step label="Supporting documents" status="current" />
    <Step label="Signature" />
    <Step label="Review and submit" />
  </StepIndicator>
)
