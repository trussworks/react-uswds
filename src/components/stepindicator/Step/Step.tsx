import classnames from 'classnames'
import React from 'react'

enum Status {
  COMPLETE = 'complete',
  CURRENT = 'current',
  INCOMPLETE = 'incomplete',
}

export interface StepProps {
  label: string
  status: Status
  className: string
}

export const Step = (
  props: StepProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const { label, status = Status.INCOMPLETE, className, ...liProps } = props

  const classes = classnames(
    'usa-step-indicator__segment',
    {
      'usa-step-indicator__segment--complete': status === Status.COMPLETE,
      'usa-step-indicator__segment--current': status === Status.CURRENT,
    },
    className
  )

  return (
    <li
      className={classes}
      aria-current={status === Status.CURRENT ? 'true' : undefined}
      {...liProps}>
      <span className="usa-step-indicator__segment-label">
        {label}
        &nbsp;
        {
          status === Status.COMPLETE && (
            <span className="usa-sr-only">completed</span>
          ) /*TODO: localize and maybe use map conditional rendering: https://medium.com/@omt66/conditional-rendering-in-react-ts-240526074821*/
        }
        {
          status === Status.INCOMPLETE && (
            <span className="usa-sr-only">not completed</span>
          ) /*TODO: localize*/
        }
      </span>
    </li>
  )
}
