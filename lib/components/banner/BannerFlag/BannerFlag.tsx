import React, { ReactElement } from 'react'
import classNames from 'classnames'

export type BannerFlagProps = JSX.IntrinsicElements['img']

const BannerFlag = ({
  alt,
  className,
  ...imgProps
}: BannerFlagProps): ReactElement => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img className={classes} alt={alt} {...imgProps} />
}

export default BannerFlag
