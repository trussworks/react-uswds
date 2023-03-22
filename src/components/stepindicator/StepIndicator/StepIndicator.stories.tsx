import React from 'react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator } from '../StepIndicator/StepIndicator'

export default {
  title: 'Components/Step Indicator',
  component: StepIndicator,
  parameters: {
    info: `
    ### USWDS 3.0 Step Indicator component
    Source: https://designsystem.digital.gov/components/step-indicator/

    Updates users on their progress through a multi-step process.
    `,
  },
}

export const defaultStepIndicator = (): React.ReactElement => (
  <StepIndicator headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const noLabels = (): React.ReactElement => (
  <StepIndicator showLabels={false} headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const centered = (): React.ReactElement => (
  <StepIndicator centered headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const counters = (): React.ReactElement => (
  <StepIndicator counters="default" headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const smallCounters = (): React.ReactElement => (
  <StepIndicator counters="small" headingLevel="h4">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const differentHeadingLevel = (): React.ReactElement => (
  <StepIndicator headingLevel="h2">
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)
