import React, { forwardRef } from 'react'

import classnames from 'classnames'

export type SummaryBoxBaseProps = React.ComponentPropsWithRef<
  typeof SummaryBoxBase
>

export type SummaryBoxBaseRef = React.ComponentRef<typeof SummaryBoxBase>

export const SummaryBoxForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div ref={ref} className={classes} data-testid="summary-box" {...props} />
  )
}

const SummaryBoxBase = forwardRef(SummaryBoxForwardRef)

export default SummaryBoxBase
