import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IdentifierLogosProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLogos = ({
  children,
  className,
  ...divProps
}: IdentifierLogosProps & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames('usa-identifier__logos', className)
  return (
    <div data-testid="identifierLogos" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default IdentifierLogos
