import React from 'react'
import classnames from 'classnames'

export interface BaseSummaryBoxTextProps {
  children?: React.ReactNode
  className?: string
}

export type SummaryBoxTextProps = BaseSummaryBoxTextProps &
  JSX.IntrinsicElements['div']

const SummaryBoxContent = ({
  children,
  className,
  ...divProps
}: SummaryBoxTextProps): React.ReactElement => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default SummaryBoxContent
