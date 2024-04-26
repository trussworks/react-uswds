import React, { type ReactElement } from 'react'
import classNames from 'classnames'

export type BannerGuidanceProps = JSX.IntrinsicElements['div']

const BannerGuidance = ({
  children,
  className,
  ...divProps
}: BannerGuidanceProps): ReactElement => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div className={divClasses} {...divProps}>
      {children}
    </div>
  )
}

export default BannerGuidance
