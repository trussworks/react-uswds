import React from 'react'
import classnames from 'classnames'
import { StepProps } from '../Step/Step'

//TODO: Localizations

interface StepIndicatorProps {
  showLabels?: boolean
  counters?: true | false | 'small'
  centered?: boolean
  children: React.ReactElement<StepProps>[]
  className?: string
  divProps?: JSX.IntrinsicElements['div']
  listProps?: JSX.IntrinsicElements['ol']
}
export const StepIndicator = (
  props: StepIndicatorProps
): React.ReactElement => {
  const {
    showLabels = true,
    counters = false,
    centered = false,
    children,
    className,
    divProps,
    listProps,
  } = props

  const classes = classnames(
    'usa-step-indicator',
    {
      'usa-step-indicator--no-labels': !showLabels,
      'usa-step-indicator--counters': counters === true,
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
    <div className={classes} data-testid="step-indicator" {...divProps}>
      <ol className="usa-step-indicator__segments" {...listProps}>
        {children}
      </ol>
      <div className="usa-step-indicator__header">
        <h2 className="usa-step-indicator__heading">
          <span className="usa-step-indicator__heading-counter">
            <span className="usa-sr-only">Step</span>
            <span className="usa-step-indicator__current-step">
              {currentStepNumber}
            </span>
            <span className="usa-step-indicator__total-steps">{`of ${totalNumberOfSteps}`}</span>
          </span>
          <span className="usa-step-indicator__heading-text">
            {currentStepLabel}
          </span>
        </h2>
      </div>
    </div>
  )
}
