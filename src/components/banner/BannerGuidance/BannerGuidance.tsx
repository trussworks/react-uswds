import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerGuidanceProps = JSX.IntrinsicElements['div']

export const BannerGuidanceForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BannerGuidanceProps
> = ({ children, className, ...divProps }, ref): ReactElement => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div ref={ref} className={divClasses} {...divProps}>
      {children}
    </div>
  )
}

export const BannerGuidance = forwardRef(BannerGuidanceForwardRef)

export default BannerGuidance
