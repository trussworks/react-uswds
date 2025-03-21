import React, { type JSX } from 'react'
import classnames from 'classnames'

interface SummaryBoxTextPropsInterface {
  children?: React.ReactNode
  className?: string
}

export type SummaryBoxContentProps = SummaryBoxTextPropsInterface &
  JSX.IntrinsicElements['div']

export const SummaryBoxContent = ({
  children,
  className,
  ...divProps
}: SummaryBoxContentProps): JSX.Element => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default SummaryBoxContent
