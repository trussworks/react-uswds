import React from 'react'
import classnames from 'classnames'

export type IdentifierLogoProps = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['a']

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
