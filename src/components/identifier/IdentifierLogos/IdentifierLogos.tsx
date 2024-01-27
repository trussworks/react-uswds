import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type IdentifierLogosProps = JSX.IntrinsicElements['div']

export const IdentifierLogosForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IdentifierLogosProps
> = ({ children, className, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-identifier__logos', className)
  return (
    <div
      ref={ref}
      data-testid="identifierLogos"
      className={classes}
      {...divProps}>
      {children}
    </div>
  )
}

const IdentifierLogos = forwardRef(IdentifierLogosForwardRef)

export default IdentifierLogos
