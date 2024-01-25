import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerButtonTextProps = React.ComponentPropsWithRef<
  typeof BannerButtonText
>

export type BannerButtonTextRef = React.ComponentRef<typeof BannerButtonText>

export const BannerButtonTextForwardRef: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
> = ({ className, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner__button-text', className)

  return <span ref={ref} className={classes} {...props} />
}

const BannerButtonText = forwardRef(BannerButtonTextForwardRef)

export default BannerButtonText
