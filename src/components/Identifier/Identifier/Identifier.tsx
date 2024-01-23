import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierProps = JSX.IntrinsicElements['div']

export const IdentifierForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IdentifierProps
> = ({ className, children, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-identifier', className)
  return (
    <div ref={ref} data-testid="identifier" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export const Identifier = forwardRef(IdentifierForwardRef)

export default Identifier
