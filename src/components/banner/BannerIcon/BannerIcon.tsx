import React, { ReactElement } from 'react'
import classNames from 'classnames'

export type BannerIconProps = JSX.IntrinsicElements['img']

const BannerIcon = ({
  src,
  alt,
  className,
  ...imgProps
}: BannerIconProps): ReactElement => {
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

export default BannerIcon
