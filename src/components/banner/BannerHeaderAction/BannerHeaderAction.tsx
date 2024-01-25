import React, { forwardRef } from 'react'
import classNames from 'classnames'

export type BannerHeaderActionProps = React.ComponentPropsWithRef<
  typeof BannerHeaderAction
>

export type BannerHeaderActionRef = React.ComponentRef<
  typeof BannerHeaderAction
>

export const BannerHeaderActionForwardRef: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classNames('usa-banner__header-action', className)

  return <p ref={ref} className={classes} aria-hidden="true" {...props} />
}

const BannerHeaderAction = forwardRef(BannerHeaderActionForwardRef)

export default BannerHeaderAction
