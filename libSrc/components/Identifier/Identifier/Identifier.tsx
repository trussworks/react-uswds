import React from 'react'
import classnames from 'classnames'

export type IdentifierProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

const Identifier = ({
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
