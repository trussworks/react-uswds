import React, { type JSX } from 'react'
import classNames from 'classnames'

export type BannerIconProps = JSX.IntrinsicElements['img']

export const BannerIcon = ({
  src,
  alt,
  className,
  ...imgProps
}: BannerIconProps): JSX.Element => {
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
