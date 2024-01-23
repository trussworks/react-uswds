import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BaseBannerContentProps = {
  isOpen: boolean
}

export type BannerContentProps = BaseBannerContentProps &
  JSX.IntrinsicElements['div']

export const BannerContentForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BannerContentProps
> = ({ children, isOpen, className, ...divProps }, ref): ReactElement => {
  const classes = classNames(
    'usa-banner__content usa-accordion__content',
    className
  )

  return (
    <div ref={ref} className={classes} hidden={!isOpen} {...divProps}>
      {children}
    </div>
  )
}

export const BannerContent = forwardRef(BannerContentForwardRef)

export default BannerContent
