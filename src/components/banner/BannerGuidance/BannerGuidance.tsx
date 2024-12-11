import React, { ReactElement } from 'react'
import classNames from 'classnames'
import { JSX } from 'react'

export const BannerGuidance = ({
  children,
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): ReactElement => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div className={divClasses} {...divProps}>
      {children}
    </div>
  )
}
