import React from 'react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator, StepStatusText } from '../StepIndicator/StepIndicator'

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
  statusText: StepStatusText
}

export const DefaultStepIndicator = (
  args: StorybookArguments
): React.ReactElement => (
  <StepIndicator
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const NoLabels = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    showLabels={false}
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const Centered = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    centered
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const Counters = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    counters="default"
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const SmallCounters = (args: StorybookArguments): React.ReactElement => (
  <StepIndicator
    counters="small"
    headingLevel="h4"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)

export const DifferentHeadingLevel = (
  args: StorybookArguments
): React.ReactElement => (
  <StepIndicator
    headingLevel="h2"
    ofText={args.ofText}
    stepText={args.stepText}
    statusText={args.statusText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>
)
