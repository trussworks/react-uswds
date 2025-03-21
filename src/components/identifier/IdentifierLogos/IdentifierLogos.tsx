import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IdentifierLogosPropsInterface {
  children: React.ReactNode
  className?: string
}

export type IdentifierLogosProps = IdentifierLogosPropsInterface &
  JSX.IntrinsicElements['div']

export const IdentifierLogos = ({
  children,
  className,
  ...divProps
}: IdentifierLogosProps): JSX.Element => {
  const classes = classnames('usa-identifier__logos', className)
  return (
    <div data-testid="identifierLogos" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default IdentifierLogos
