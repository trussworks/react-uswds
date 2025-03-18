import classnames from 'classnames'
import React, { type JSX } from 'react'

import { StepStatusText } from '../StepIndicator/StepIndicator'

export interface StepIndicatorStepProps {
  label: string
  status?: 'complete' | 'current' | 'incomplete'
  statusText?: StepStatusText
  className?: string
}

export const StepIndicatorStep = (
  props: StepIndicatorStepProps & JSX.IntrinsicElements['li']
): JSX.Element => {
  const {
    label,
    status = 'incomplete',
    statusText = { complete: 'completed', incomplete: 'not completed' },
    className,
    ...liProps
  } = props

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
          <span data-testid="srStatusText" className="usa-sr-only">
            {status === 'complete'
              ? statusText.complete
              : statusText.incomplete}
          </span>
        )}
      </span>
    </li>
  )
}
