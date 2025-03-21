import React, { type JSX } from 'react'
import classNames from 'classnames'

export type BannerGuidanceProps = JSX.IntrinsicElements['div']

export const BannerGuidance = ({
  children,
  className,
  ...divProps
}: BannerGuidanceProps): JSX.Element => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div className={divClasses} {...divProps}>
      {children}
    </div>
  )
}
