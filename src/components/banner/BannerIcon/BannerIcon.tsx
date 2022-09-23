import React, { ReactElement } from 'react'
import classNames from 'classnames'

export const BannerIcon = ({
  src,
  alt,
  className,
  ...imgProps
}: JSX.IntrinsicElements['img']): ReactElement => {
  const classes = classNames('usa-banner__icon usa-media-block__img', className)

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <img
      className={classes}
      src={src}
      role="img"
      alt={alt}
      aria-hidden="true"
      {...imgProps}
    />
  )
}
