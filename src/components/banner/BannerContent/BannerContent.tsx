import React, { type JSX } from 'react'
import classNames from 'classnames'

export type BannerContentProps = {
  isOpen: boolean
} & JSX.IntrinsicElements['div']

export const BannerContent = ({
  children,
  isOpen,
  className,
  ...divProps
}: BannerContentProps): JSX.Element => {
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
