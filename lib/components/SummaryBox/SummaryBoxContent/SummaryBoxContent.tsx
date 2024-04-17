import React from 'react'
import classnames from 'classnames'

export interface SummaryBoxTextProps {
  children?: React.ReactNode
  className?: string
}

const SummaryBoxContent = ({
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
