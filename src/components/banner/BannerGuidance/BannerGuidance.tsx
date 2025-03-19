import React, { type JSX } from 'react'
import classNames from 'classnames'

export const BannerGuidance = ({
  children,
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): JSX.Element => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div className={divClasses} {...divProps}>
      {children}
    </div>
  )
}
