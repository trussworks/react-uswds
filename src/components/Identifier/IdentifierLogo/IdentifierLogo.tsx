import React from 'react'
import classnames from 'classnames'

export interface IdentifierLogoProps {
  src: string
  agencyUrl: string
  agencyName: string
  anchorProps?: JSX.IntrinsicElements['a']
  imgProps?: JSX.IntrinsicElements['img']
  className?: string
  anchorClassName?: string
  imgClassName?: string
}

export const IdentifierLogo = ({
  src,
  agencyUrl,
  agencyName,
  anchorProps,
  imgProps,
  className,
  anchorClassName,
  imgClassName,
}: IdentifierLogoProps): React.ReactElement => {
  const anchorClasses = classnames(
    'usa-identifier__logo',
    className,
    anchorClassName
    // should anchorClasses include both className and anchorClassName?
  )
  const imgClasses = classnames('usa-identifier__logo-img', imgClassName)
  return (
    <a href={agencyUrl} className={anchorClasses} {...anchorProps}>
      <img
        src={src}
        className={imgClasses}
        alt={`${agencyName} logo`}
        {...imgProps}
      />
    </a>
  )
}
