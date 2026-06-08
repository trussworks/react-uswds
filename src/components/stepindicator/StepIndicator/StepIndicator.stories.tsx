import React from 'react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator, StepStatusText } from './StepIndicator'
import type { Meta, StoryObj } from '@storybook/react-vite'

type StorybookArguments = {
  stepText: string
  ofText: string
  statusText: StepStatusText
}

const meta: Meta<typeof StepIndicator> = {
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

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStepIndicator: Story = {
  render: (args) => (
    <StepIndicator
      headingLevel="h4"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}

export const NoLabels: Story = {
  render: (args) => (
    <StepIndicator
      showLabels={false}
      headingLevel="h4"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}

export const Centered: Story = {
  render: (args) => (
    <StepIndicator
      centered
      headingLevel="h4"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}

export const Counters: Story = {
  render: (args) => (
    <StepIndicator
      counters="default"
      headingLevel="h4"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}

export const SmallCounters: Story = {
  render: (args) => (
    <StepIndicator
      counters="small"
      headingLevel="h4"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}

export const DifferentHeadingLevel: Story = {
  render: (args) => (
    <StepIndicator
      headingLevel="h2"
      ofText={args.ofText}
      stepText={args.stepText}
      statusText={(args as StorybookArguments).statusText}>
      <StepIndicatorStep label="Personal information" status="complete" />
      <StepIndicatorStep label="Household status" status="complete" />
      <StepIndicatorStep label="Supporting documents" status="current" />
      <StepIndicatorStep label="Signature" />
      <StepIndicatorStep label="Review and submit" />
    </StepIndicator>
  ),
}
