import React, { type ReactElement } from 'react'
import classNames from 'classnames'

export interface BaseBannerIconProps {}

export type BannerIconProps = BaseBannerIconProps & JSX.IntrinsicElements['img']

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
