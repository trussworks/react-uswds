import classnames from 'classnames'
import React from 'react'
export interface StepProps {
  label: string
  status?: 'complete' | 'current' | 'incomplete'
  className?: string
}

export const Step = (
  props: StepProps & JSX.IntrinsicElements['li']
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
        {
          status === 'complete' && (
            <span className="usa-sr-only">completed</span>
          ) /*TODO: localize and maybe use map conditional rendering: https://medium.com/@omt66/conditional-rendering-in-react-ts-240526074821*/
        }
        {
          status === 'incomplete' && (
            <span className="usa-sr-only">not completed</span>
          ) /*TODO: localize*/
        }
      </span>
    </li>
  )
}
