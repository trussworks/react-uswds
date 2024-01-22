import React from 'react'
import classnames from 'classnames'

export interface BaseIdentifierIdentityProps {
  domain: string
}

export type IdentifierIdentityProps = BaseIdentifierIdentityProps &
  JSX.IntrinsicElements['div']

export const IdentifierIdentity = ({
  children,
  domain,
  className,
  ...divProps
}: IdentifierIdentityProps): React.ReactElement => {
  const classes = classnames('usa-identifier__identity', className)
  return (
    <div data-testid="identifierIdentity" className={classes} {...divProps}>
      <p className="usa-identifier__identity-domain">{domain}</p>
      <p className="usa-identifier__identity-disclaimer">{children}</p>
    </div>
  )
}

export default IdentifierIdentity
