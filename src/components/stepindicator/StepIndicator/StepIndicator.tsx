import React from 'react'
import classnames from 'classnames'
import { StepIndicatorStepProps } from '../StepIndicatorStep/StepIndicatorStep'

interface StepIndicatorProps {
  showLabels?: boolean
  counters?: 'none' | 'default' | 'small'
  centered?: boolean
  children: React.ReactElement<StepIndicatorStepProps>[]
  className?: string
  divProps?: JSX.IntrinsicElements['div']
  listProps?: JSX.IntrinsicElements['ol']
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const StepIndicator = (
  props: StepIndicatorProps
): React.ReactElement => {
  const {
    showLabels = true,
    counters = 'none',
    centered = false,
    children,
    className,
    divProps,
    listProps,
    headingLevel = 'h4',
  } = props

  const Heading = headingLevel

  const classes = classnames(
    'usa-step-indicator',
    {
      'usa-step-indicator--no-labels': !showLabels,
      'usa-step-indicator--counters': counters === 'default',
      'usa-step-indicator--counters-sm': counters === 'small',
      'usa-step-indicator--center': centered,
    },
    className
  )

  const findCurrentStepIndex = (): number => {
    const i = children.findIndex((step) => step.props.status === 'current')
    return i === -1 ? 0 : i
  }
  const currentStepIndex = findCurrentStepIndex()
  const currentStepNumber = currentStepIndex + 1
  const currentStepLabel = children[parseInt(`${currentStepIndex}`)].props.label
  const totalNumberOfSteps = children.length

  return (
    <div
      className={classes}
      data-testid="step-indicator"
      aria-label="progress"
      {...divProps}>
      <ol className="usa-step-indicator__segments" {...listProps}>
        {children}
      </ol>
      <div className="usa-step-indicator__header">
        <Heading className="usa-step-indicator__heading">
          <span className="usa-step-indicator__heading-counter">
            <span className="usa-sr-only">Step</span>
            <span className="usa-step-indicator__current-step">
              {currentStepNumber}
            </span>
            &nbsp;
            <span className="usa-step-indicator__total-steps">{`of ${totalNumberOfSteps}`}</span>
            &nbsp;
          </span>
          <span className="usa-step-indicator__heading-text">
            {currentStepLabel}
          </span>
        </Heading>
      </div>
    </div>
  )
}
