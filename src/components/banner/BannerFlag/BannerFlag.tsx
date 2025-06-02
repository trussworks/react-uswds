import React, { type JSX } from 'react'
import classNames from 'classnames'

export type BannerFlagProps = JSX.IntrinsicElements['img']

export const BannerFlag = ({
  alt,
  className,
  ...imgProps
}: BannerFlagProps): JSX.Element => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img className={classes} alt={alt} {...imgProps} />
}
