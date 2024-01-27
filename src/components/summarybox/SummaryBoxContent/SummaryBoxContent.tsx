import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type SummaryBoxTextProps = JSX.IntrinsicElements['div']

export const SummaryBoxContentForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SummaryBoxTextProps
> = ({ children, className, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div ref={ref} className={classes} {...divProps}>
      {children}
    </div>
  )
}

const SummaryBoxContent = forwardRef(SummaryBoxContentForwardRef)

export default SummaryBoxContent
