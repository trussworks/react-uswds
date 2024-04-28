import React from 'react'
import classnames from 'classnames'

export interface BaseIdentifierProps {
  className?: string
  children: React.ReactNode
}

export type IdentifierProps = BaseIdentifierProps & JSX.IntrinsicElements['div']

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
