import React from 'react'
import classnames from 'classnames'

export interface BaseIdentifierLogoProps {
  children: React.ReactNode
  className?: string
}

export type IdentifierLogoProps = BaseIdentifierLogoProps &
  JSX.IntrinsicElements['a']

const IdentifierLogo = ({
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

export default IdentifierLogo
