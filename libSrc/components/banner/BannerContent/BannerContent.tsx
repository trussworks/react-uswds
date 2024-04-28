import React, { type ReactElement } from 'react'
import classNames from 'classnames'

export interface BaseBannerContentProps {
  isOpen: boolean
}

export type BannerContentProps = BaseBannerContentProps &
  JSX.IntrinsicElements['div']

const BannerContent = ({
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

export default BannerContent
