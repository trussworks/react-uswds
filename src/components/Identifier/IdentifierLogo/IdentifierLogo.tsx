import React from 'react'
import classnames from 'classnames'

export interface IdentifierLogoProps {
  agencyUrl: string
  children: React.ReactNode
  anchorProps?: JSX.IntrinsicElements['a']
  className?: string
  anchorClassName?: string
}

export const IdentifierLogo = ({
  agencyUrl,
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
    <a href={agencyUrl} className={anchorClasses} {...anchorProps}>
      {children}
    </a>
  )
}
