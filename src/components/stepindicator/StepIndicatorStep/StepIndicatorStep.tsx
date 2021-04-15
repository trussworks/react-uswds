import classnames from 'classnames'
import React from 'react'

export interface StepIndicatorStepProps {
  label: string
  status?: 'complete' | 'current' | 'incomplete'
  className?: string
}

export const StepIndicatorStep = (
  props: StepIndicatorStepProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const { label, status = 'incomplete', className, ...liProps } = props

  const classes = classnames(
    'usa-step-indicator__segment',
    {
      'usa-step-indicator__segment--complete': status === 'complete',
      'usa-step-indicator__segment--current': status === 'current',
    },
    className
  )

  return (
    <li
      className={classes}
      aria-current={status === 'current' ? 'true' : undefined}
      {...liProps}>
      <span className="usa-step-indicator__segment-label">
        {label}
        &nbsp;
        {status !== 'current' && (
          <span className="usa-sr-only">
            {status === 'complete' ? 'completed' : 'not completed'}
          </span>
        )}
      </span>
    </li>
  )
}
