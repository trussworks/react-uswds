import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerFlagProps = JSX.IntrinsicElements['img']

export const BannerFlagForwardRef: React.ForwardRefRenderFunction<HTMLImageElement, BannerFlagProps> = ({
  alt,
  className,
  ...imgProps
}, ref): ReactElement => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img ref={ref} className={classes} alt={alt} {...imgProps} />
}

export const BannerFlag = forwardRef(BannerFlagForwardRef)

export default BannerFlag