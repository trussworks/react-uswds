import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IdentifierIdentityPropsInterface {
  children: React.ReactNode
  domain: string
  className?: string
}

export type IdentifierIdentityProps = IdentifierIdentityPropsInterface &
  JSX.IntrinsicElements['div']

export const IdentifierIdentity = ({
  children,
  domain,
  className,
  ...divProps
}: IdentifierIdentityProps): JSX.Element => {
  const classes = classnames('usa-identifier__identity', className)
  return (
    <div data-testid="identifierIdentity" className={classes} {...divProps}>
      <p className="usa-identifier__identity-domain">{domain}</p>
      <p className="usa-identifier__identity-disclaimer">{children}</p>
    </div>
  )
}

export default IdentifierIdentity
