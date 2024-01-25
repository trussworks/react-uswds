import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type AlertContentProps = React.ComponentPropsWithRef<typeof AlertContent>

export type AlertContentRef = React.ComponentRef<typeof AlertContent>

export const AlertContentForwardRef: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
> = (
  {
    className,
    ...props
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    "usa-alert__text",
    className
  )

  return (
      <p ref={ref} className={classes} data-testid="alertContent" {...props} />
  )
}

const AlertContent = forwardRef(AlertContentForwardRef)

export default AlertContent
