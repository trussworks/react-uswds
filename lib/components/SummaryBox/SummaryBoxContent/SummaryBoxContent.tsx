import React from 'react'
import classnames from 'classnames'

export type SummaryBoxTextProps = {
  children?: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['div']

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
