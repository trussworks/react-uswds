import React from 'react'
import classnames from 'classnames'

export type IdentifierLogoProps = JSX.IntrinsicElements['a']

export const IdentifierLogo = ({
  children,
  className,
  ...anchorProps
}: IdentifierLogoProps): React.ReactElement => {
  const classes = classnames('usa-identifier__logo', className)
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  )
}
