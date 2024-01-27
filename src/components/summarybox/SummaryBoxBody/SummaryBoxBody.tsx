import React, { forwardRef } from 'react'

import classnames from 'classnames'

export type SummaryBoxBodyProps = React.ComponentPropsWithRef<
  typeof SummaryBoxBody
>

export type SummaryBoxBodyRef = React.ComponentRef<typeof SummaryBoxBody>

export const SummaryBoxForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-summary-box__body', className)
  return (
    <div
      ref={ref}
      className={classes}
      data-testid="summaryboxBody"
      {...props}
    />
  )
}

const SummaryBoxBody = forwardRef(SummaryBoxForwardRef)

export default SummaryBoxBody
