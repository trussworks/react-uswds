import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BannerIconProps = JSX.IntrinsicElements['img']

export const BannerIconForwardRef: React.ForwardRefRenderFunction<
  HTMLImageElement,
  BannerIconProps
> = ({ src, alt, className, ...imgProps }, ref): ReactElement => {
  const classes = classNames('usa-banner__icon usa-media-block__img', className)

  return (
    <img
      ref={ref}
      className={classes}
      src={src}
      alt={alt}
      aria-hidden="true"
      {...imgProps}
    />
  )
}

const BannerIcon = forwardRef(BannerIconForwardRef)

export default BannerIcon
