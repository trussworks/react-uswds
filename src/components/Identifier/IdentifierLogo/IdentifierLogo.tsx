import React from 'react'
import classnames from 'classnames'

export interface IdentifierLogoProps {
  href: string
  children: React.ReactNode
  anchorProps?: JSX.IntrinsicElements['a']
  className?: string
  anchorClassName?: string
}

export const IdentifierLogo = ({
  href,
  children,
  anchorProps,
  className,
  anchorClassName,
}: IdentifierLogoProps): React.ReactElement => {
  const anchorClasses = classnames(
    'usa-identifier__logo',
    className,
    anchorClassName
  )
  return (
    <a href={href} className={anchorClasses} {...anchorProps}>
      {children}
    </a>
  )
}
