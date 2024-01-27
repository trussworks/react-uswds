import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseTooltipBaseProps = {
  className?: string
}

export type TooltipBaseProps = React.ComponentPropsWithRef<typeof TooltipBase>

export type TooltipBaseRef = React.ComponentRef<typeof TooltipBase>

export const TooltipBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BaseTooltipBaseProps & React.ComponentPropsWithoutRef<'span'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-tooltip', className)

  return (
    <span
      ref={ref}
      data-testid="tooltipWrapper"
      className={classes}
      {...props}
    />
  )
}

const TooltipBase = forwardRef(TooltipBaseForwardRef)

export default TooltipBase
