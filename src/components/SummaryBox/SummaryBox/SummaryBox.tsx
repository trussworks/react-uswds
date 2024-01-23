import React, { forwardRef } from 'react'

import classnames from 'classnames'

export type SummaryBoxProps = JSX.IntrinsicElements['div']

export const SummaryBoxForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SummaryBoxProps
> = ({ children, className, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div ref={ref} className={classes} data-testid="summary-box" {...divProps}>
      <div className="usa-summary-box__body">{children}</div>
    </div>
  )
}

export const SummaryBox = forwardRef(SummaryBoxForwardRef)

export default SummaryBox
