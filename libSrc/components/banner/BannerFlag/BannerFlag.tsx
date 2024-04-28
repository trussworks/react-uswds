import React, { type ReactElement } from 'react'
import classNames from 'classnames'

export interface BaseBannerFlagProps {}

export type BannerFlagProps = BaseBannerFlagProps & JSX.IntrinsicElements['img']

const BannerFlag = ({
  alt,
  className,
  ...imgProps
}: BannerFlagProps): ReactElement => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img className={classes} alt={alt} {...imgProps} />
}

export default BannerFlag
