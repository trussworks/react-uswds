import React from 'react'
import classnames from 'classnames'

interface IdentifierLogosProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLogos = ({
  children,
  className,
}: IdentifierLogosProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-identifier__logos', className)
  return <div className={classes}>{children}</div>
}

export default IdentifierLogos
