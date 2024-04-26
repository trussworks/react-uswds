import React from 'react'

import classnames from 'classnames'

export type SummaryBoxProps = {
  children?: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['div']

const SummaryBox = ({
  children,
  className,
  ...divProps
}: SummaryBoxProps): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div className={classes} data-testid="summary-box" {...divProps}>
      <div className="usa-summary-box__body">{children}</div>
    </div>
  )
}

export default SummaryBox
