import React, { forwardRef } from 'react'
import classNames from 'classnames'

export type BannerInnerProps = React.ComponentPropsWithRef<typeof BannerInner>

export type BannerInnerRef = React.ComponentRef<typeof BannerInner>

export const BannerInnerForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classNames('usa-banner__inner', className)

  return (
    <div
      ref={ref}
      className={classes}
      data-testid="banner-header-inner-div"
      {...props}
    />
  )
}

const BannerInner = forwardRef(BannerInnerForwardRef)

export default BannerInner
