import React, { forwardRef, ReactElement, ReactNode } from 'react'
import classnames from 'classnames'

export type BaseTooltipBodyProps = {
  title?: string
  position?: 'top' | 'bottom' | 'left' | 'right' | undefined
  className?: string
  children: ReactNode
  isVisible?: boolean
  isShown?: boolean
  wrapTooltip?: boolean
}

export type TooltipProps = React.ComponentPropsWithRef<typeof TooltipBody>

export type TooltipRef = React.ComponentRef<typeof TooltipBody>

export const TooltipForwardRef: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BaseTooltipBodyProps & React.ComponentPropsWithoutRef<'span'>
> = (
  {
    isVisible,
    position,
    wrapTooltip,
    isShown,
    title,
    children,
    className,
    ...props
  },
  ref
): ReactElement => {
  const classes = classnames(
    'usa-tooltip__body',
    {
      'is-set': isVisible,
      'usa-tooltip__body--top': position === 'top',
      'usa-tooltip__body--bottom': position === 'bottom',
      'usa-tooltip__body--right': position === 'right',
      'usa-tooltip__body--left': position === 'left',
      'is-visible': isShown, // isShown is set after positioning updated, to prevent jitter when position changes
      'usa-tooltip__body--wrap': isVisible && wrapTooltip,
    },
    className
  )

  return (
    <span
      ref={ref}
      data-testid="tooltipBody"
      title={title ?? (typeof children === 'string' ? children : undefined)}
      className={classes}
      role="tooltip"
      aria-hidden={!isVisible}
      {...props}>
      {children}
    </span>
  )
}

const TooltipBody = forwardRef(TooltipForwardRef)

export default TooltipBody
