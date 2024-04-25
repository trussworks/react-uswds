import React, { ReactElement } from 'react'
import classNames from 'classnames'

export type BannerButtonProps = {
  isOpen: boolean
  spanProps?: JSX.IntrinsicElements['span']
} & JSX.IntrinsicElements['button']

const BannerButton = ({
  isOpen,
  children,
  className,
  spanProps,
  ...buttonProps
}: BannerButtonProps): ReactElement => {
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

export default BannerButton
