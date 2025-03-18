import React, { type JSX } from 'react'
import classNames from 'classnames'

export const BannerIcon = ({
  src,
  alt,
  className,
  ...imgProps
}: JSX.IntrinsicElements['img']): JSX.Element => {
  const classes = classNames('usa-banner__icon usa-media-block__img', className)

  return (
    <img
      className={classes}
      src={src}
      alt={alt}
      aria-hidden="true"
      {...imgProps}
    />
  )
}
