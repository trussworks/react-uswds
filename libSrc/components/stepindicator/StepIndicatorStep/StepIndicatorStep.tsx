import classnames from 'classnames'
import React from 'react'

import type { StepStatusText } from '../StepIndicator/StepIndicator.js'

export interface BaseStepIndicatorStepProps {
  label: string
  status?: 'complete' | 'current' | 'incomplete'
  statusText?: StepStatusText
  className?: string
}

export type StepIndicatorStepProps = BaseStepIndicatorStepProps &
  JSX.IntrinsicElements['li']

const StepIndicatorStep = ({
  label,
  status = 'incomplete',
  statusText = { complete: 'completed', incomplete: 'not completed' },
  className,
  ...liProps
}: StepIndicatorStepProps): React.ReactElement => {
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

export default StepIndicatorStep
