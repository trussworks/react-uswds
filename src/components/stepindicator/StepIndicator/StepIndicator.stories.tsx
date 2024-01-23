import React from 'react'
import StepIndicatorStep from '../StepIndicatorStep/StepIndicatorStep'
import StepIndicator from '../StepIndicator/StepIndicator'

export default {
  title: 'Components/Step Indicator',
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Step Indicator component

Source: https://designsystem.digital.gov/components/step-indicator/

Updates users on their progress through a multi-step process.
    `,
      },
    },
  },
  argTypes: {
    stepText: {
      control: 'text',
    },
    ofText: {
      control: 'text',
    },
  },
  args: {
    stepText: 'Step',
    ofText: 'of',
  },
}

type StorybookArguments = {
  stepText: string
  ofText: string
}

export const defaultStepIndicator = (
  args: StorybookArguments
): React.ReactElement => (
  <StepIndicator
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const noLabels = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    showLabels={false}
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const centered = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    centered
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const counters = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    counters="default"
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const smallCounters = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    counters="small"
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const differentHeadingLevel = (
  args: StorybookArguments
): React.ReactElement => (
  <StepIndicator
    headingLevel="h2"
    ofText={args.ofText}
    stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)
