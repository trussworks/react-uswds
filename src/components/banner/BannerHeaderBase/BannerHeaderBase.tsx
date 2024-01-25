import React, { forwardRef } from 'react'
import classNames from 'classnames'

export type BaseBannerHeaderBaseProps = {
  isOpen?: boolean
}

export type BannerHeaderBaseProps = React.ComponentPropsWithRef<
  typeof BannerHeaderBase
>

export type BannerHeaderRef = React.ComponentRef<typeof BannerHeaderBase>

export const BannerHeaderBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  BaseBannerHeaderBaseProps & React.ComponentPropsWithoutRef<'header'>
> = ({ isOpen, className, ...props }, ref): React.ReactElement => {
  const classes = classNames(
    'usa-banner__header',
    {
      'usa-banner__header--expanded': isOpen,
    },
    className
  )

  return <header ref={ref} className={classes} {...props} />
}

const BannerHeaderBase = forwardRef(BannerHeaderBaseForwardRef)

export default BannerHeaderBase
