import React, { type JSX } from 'react'
import classnames from 'classnames'

export type IdentifierProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

export const Identifier = ({
  className,
  children,
  ...divProps
}: IdentifierProps): JSX.Element => {
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default Identifier
