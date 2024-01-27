import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseIdentifierIdentityProps {
  domain: string
}

export type IdentifierIdentityProps = BaseIdentifierIdentityProps &
  JSX.IntrinsicElements['div']

export const IdentifierIdentityForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IdentifierIdentityProps
> = ({ children, domain, className, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-identifier__identity', className)
  return (
    <div
      ref={ref}
      data-testid="identifierIdentity"
      className={classes}
      {...divProps}>
      <p className="usa-identifier__identity-domain">{domain}</p>
      <p className="usa-identifier__identity-disclaimer">{children}</p>
    </div>
  )
}

const IdentifierIdentity = forwardRef(IdentifierIdentityForwardRef)

export default IdentifierIdentity
