import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerGuidanceProps = React.ComponentPropsWithRef<
  typeof BannerGuidance
>

export type BannerGuidanceRef = React.ComponentRef<typeof BannerGuidance>

export const BannerGuidanceForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...props }, ref): ReactElement => {
  const divClasses = classNames('usa-banner__guidance', className)

  return <div ref={ref} className={divClasses} {...props} />
}

const BannerGuidance = forwardRef(BannerGuidanceForwardRef)

export default BannerGuidance
