import React, { type JSX } from 'react'
import classNames from 'classnames'

export const BannerFlag = ({
  alt,
  className,
  ...imgProps
}: JSX.IntrinsicElements['img']): JSX.Element => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img className={classes} alt={alt} {...imgProps} />
}
