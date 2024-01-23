import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BaseBannerButtonProps = {
  isOpen: boolean
  spanProps?: JSX.IntrinsicElements['span']
}

export type BannerButtonProps = BaseBannerButtonProps &
  JSX.IntrinsicElements['button']

export const BannerButtonForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, BannerButtonProps> = ({
  isOpen,
  children,
  className,
  spanProps,
  ...buttonProps
}, ref): ReactElement => {
  const classes = classNames(
    'usa-accordion__button usa-banner__button',
    className
  )

  const { className: spanClassName, ...remainingSpanProps } = spanProps || {}
  const spanClasses = classNames('usa-banner__button-text', spanClassName)

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      aria-expanded={isOpen}
      {...buttonProps}>
      <span className={spanClasses} {...remainingSpanProps}>
        {children}
      </span>
    </button>
  )
}

export const Banner = forwardRef(BannerButtonForwardRef)

export default Banner