import React, { type JSX } from 'react'
import classnames from 'classnames'

export interface IdentifierLogoProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLogo = ({
  children,
  className,
  ...anchorProps
}: IdentifierLogoProps & JSX.IntrinsicElements['a']): JSX.Element => {
  const classes = classnames('usa-identifier__logo', className)
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  )
}
