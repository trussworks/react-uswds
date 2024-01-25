import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerBaseProps = React.ComponentPropsWithRef<typeof BannerBase>

export type BannerBaseRef = React.ComponentRef<typeof BannerBase>

export const BannerBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  React.ComponentPropsWithoutRef<'section'>
> = ({ className, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner', className)

  return (
    <section ref={ref} className={classes} data-testid="banner" {...props} />
  )
}

const BannerBase = forwardRef(BannerBaseForwardRef)

export default BannerBase
