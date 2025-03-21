import React, { type JSX } from 'react'
import classnames from 'classnames'

export interface IdentifierLogoPropsInterface {
  children: React.ReactNode
  className?: string
}

export type IdentifierLogoProps = IdentifierLogoPropsInterface &
  JSX.IntrinsicElements['a']

export const IdentifierLogo = ({
  children,
  className,
  ...anchorProps
}: IdentifierLogoProps): JSX.Element => {
  const classes = classnames('usa-identifier__logo', className)
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  )
}
