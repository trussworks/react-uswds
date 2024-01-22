import React from 'react'
import classnames from 'classnames'

export type IdentifierProps = JSX.IntrinsicElements['div']

export const Identifier = ({
  className,
  children,
  ...divProps
}: IdentifierProps): React.ReactElement => {
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default Identifier
