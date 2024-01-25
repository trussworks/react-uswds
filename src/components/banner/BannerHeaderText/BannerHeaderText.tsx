import React, { forwardRef } from 'react'
import classNames from 'classnames'

export type BannerHeaderTextProps = React.ComponentPropsWithRef<
  typeof BannerHeaderText
>

export type BannerHeaderTextRef = React.ComponentRef<typeof BannerHeaderText>

export const BannerHeaderTextForwardRef: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classNames('usa-banner__header-text', className)

  return (
    <p
      ref={ref}
      className={classes}
      data-testid="bannerHeaderText"
      {...props}
    />
  )
}

const BannerHeaderText = forwardRef(BannerHeaderTextForwardRef)

export default BannerHeaderText
