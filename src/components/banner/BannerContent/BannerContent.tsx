import React, { ReactElement } from 'react'
import classNames from 'classnames'

export type BaseBannerContentProps = {
  isOpen: boolean
}

export type BannerContentProps = BaseBannerContentProps &
  JSX.IntrinsicElements['div']

export const BannerContent = ({
  children,
  isOpen,
  className,
  ...divProps
}: BannerContentProps): ReactElement => {
  const classes = classNames(
    'usa-banner__content usa-accordion__content',
    className
  )

  return (
    <div className={classes} hidden={!isOpen} {...divProps}>
      {children}
    </div>
  )
}
