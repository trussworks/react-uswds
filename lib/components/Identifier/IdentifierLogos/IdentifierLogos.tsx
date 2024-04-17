import React from 'react'
import classnames from 'classnames'

export type IdentifierLogosProps = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['div']

const IdentifierLogos = ({
  children,
  className,
  ...divProps
}: IdentifierLogosProps): React.ReactElement => {
  const classes = classnames('usa-identifier__logos', className)
  return (
    <div data-testid="identifierLogos" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default IdentifierLogos
