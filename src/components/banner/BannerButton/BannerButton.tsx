import React, { type JSX } from 'react'
import classNames from 'classnames'

type BannerButtonProps = {
  isOpen: boolean
  spanProps?: JSX.IntrinsicElements['span']
}

export const BannerButton = ({
  isOpen,
  children,
  className,
  spanProps,
  ...buttonProps
}: BannerButtonProps & JSX.IntrinsicElements['button']): JSX.Element => {
  const classes = classNames(
    'usa-accordion__button usa-banner__button',
    className
  )

  const { className: spanClassName, ...remainingSpanProps } = spanProps || {}
  const spanClasses = classNames('usa-banner__button-text', spanClassName)

  return (
    <button
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
