import React, { type JSX } from 'react'
import classnames from 'classnames'

export type SummaryBoxContentProps = {
  children?: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['div']

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
