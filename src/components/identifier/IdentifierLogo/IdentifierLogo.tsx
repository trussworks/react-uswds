import React, { type JSX } from 'react'
import classnames from 'classnames'

export type IdentifierLogoProps = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['a']

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
