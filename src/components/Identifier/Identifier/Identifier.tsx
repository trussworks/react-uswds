import React from 'react'
import classnames from 'classnames'

interface IdentifierProps {
  className?: string
  children: React.ReactNode
}

export const Identifier = ({
  className,
  children,
}: IdentifierProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes}>
      {children}
    </div>
  )
}

export default Identifier
