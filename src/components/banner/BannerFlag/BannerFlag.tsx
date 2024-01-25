import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerFlagProps = React.ComponentPropsWithRef<typeof BannerFlag>

export type BannerFlagRef = React.ComponentRef<typeof BannerFlag>

export const BannerFlagForwardRef: React.ForwardRefRenderFunction<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<'img'>
> = ({ alt, className, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img ref={ref} className={classes} alt={alt} {...props} />
}

const BannerFlag = forwardRef(BannerFlagForwardRef)

export default BannerFlag
