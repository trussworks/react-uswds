import React from 'react'
import classnames from 'classnames'
import type { StepIndicatorStepProps } from '../StepIndicatorStep/StepIndicatorStep.js'
import type { HeadingLevel } from '../../../types/headingLevel.js'

export interface BaseStepIndicatorProps {
  showLabels?: boolean
  counters?: 'none' | 'default' | 'small'
  centered?: boolean
  children: React.ReactElement<StepIndicatorStepProps>[]
  className?: string
  divProps?: JSX.IntrinsicElements['div']
  listProps?: JSX.IntrinsicElements['ol']
  headingProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
  headingLevel: HeadingLevel
  stepText?: string
  ofText?: string
}

export type StepIndicatorProps = BaseStepIndicatorProps

const StepIndicator = ({
  showLabels = true,
  counters = 'none',
  centered = false,
  children,
  className,
  divProps,
  listProps,
  headingProps,
  headingLevel,
  stepText = 'Step',
  ofText = 'of',
}: StepIndicatorProps): React.ReactElement => {
  const Heading = headingLevel

  const { className: additionalDivClasses, ...remainingDivProps } =
    divProps || {}
  const { className: additionalListClasses, ...remainingListProps } =
    listProps || {}
  const { className: additionalHeadingClasses, ...remainingHeadingProps } =
    headingProps || {}

  const divClasses = classnames(
    'usa-step-indicator',
    {
      'usa-step-indicator--no-labels': !showLabels,
      'usa-step-indicator--counters': counters === 'default',
      'usa-step-indicator--counters-sm': counters === 'small',
      'usa-step-indicator--center': centered,
    },
    className,
    additionalDivClasses
  )

  const listClasses = classnames(
    'usa-step-indicator__segments',
    additionalListClasses
  )

  const headingClasses = classnames(
    'usa-step-indicator__heading',
    additionalHeadingClasses
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
      className={divClasses}
      data-testid="step-indicator"
      aria-label="progress"
      {...remainingDivProps}>
      <ol className={listClasses} {...remainingListProps}>
        {children}
      </ol>
      <div className="usa-step-indicator__header">
        <Heading className={headingClasses} {...remainingHeadingProps}>
          <span className="usa-step-indicator__heading-counter">
            <span className="usa-sr-only" data-testid="step-text">
              {stepText}
            </span>
            <span className="usa-step-indicator__current-step">
              {currentStepNumber}
            </span>
            &nbsp;
            <span className="usa-step-indicator__total-steps">{`${ofText} ${totalNumberOfSteps}`}</span>
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

export default StepIndicator
