import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type AlertBodyProps = React.ComponentPropsWithRef<typeof AlertBody>

export type AlertBodyRef = React.ComponentRef<typeof AlertBody>

export const AlertBodyForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-alert__body', className)

  return (
    <div ref={ref} className={classes} data-testid="alertBody" {...props} />
  )
}

const AlertBody = forwardRef(AlertBodyForwardRef)

export default AlertBody
