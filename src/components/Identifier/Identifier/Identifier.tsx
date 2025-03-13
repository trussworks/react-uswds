import React, { type JSX } from 'react'
import classnames from 'classnames'

type IdentifierProps = {
  className?: string
  children: React.ReactNode
}

export const Identifier = ({
  className,
  children,
  ...divProps
}: IdentifierProps & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default Identifier
