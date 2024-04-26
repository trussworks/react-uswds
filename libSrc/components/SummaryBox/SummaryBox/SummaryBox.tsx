import React from 'react'

import classnames from 'classnames'

export interface BaseSummaryBoxProps {
  children?: React.ReactNode
  className?: string
}

export type SummaryBoxProps = BaseSummaryBoxProps & JSX.IntrinsicElements['div']

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
