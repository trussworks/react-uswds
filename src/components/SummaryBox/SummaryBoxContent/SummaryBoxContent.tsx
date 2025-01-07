import React, { JSX } from 'react'
import classnames from 'classnames'

interface SummaryBoxTextProps {
  children?: React.ReactNode
  className?: string
}

export const SummaryBoxContent = ({
  children,
  className,
  ...divProps
}: SummaryBoxTextProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default SummaryBoxContent
