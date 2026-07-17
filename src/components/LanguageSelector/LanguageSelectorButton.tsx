import React, { forwardRef, type JSX } from 'react'
import classnames from 'classnames'

export type LanguageSelectorButtonProps = {
  label: string
  labelAttr?: string
  isOpen?: boolean
  onToggle: () => void
  controls?: string
} & JSX.IntrinsicElements['button']

export const LanguageSelectorButton = forwardRef(
  (
    {
      label,
      labelAttr,
      isOpen,
      onToggle,
      className,
      controls,
      ...buttonProps
    }: LanguageSelectorButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    const classes = classnames('usa-button', 'usa-language__link', className)
    const buttonContents = labelAttr ? (
      <span lang={labelAttr}>{label}</span>
    ) : (
      label
    )
    return (
      <button
        ref={ref}
        data-testid="languageSelectorButton"
        className={classes}
        aria-expanded={isOpen}
        aria-controls={controls}
        onClick={(): void => onToggle()}
        type="button"
        {...buttonProps}>
        {buttonContents}
      </button>
    )
  }
)

LanguageSelectorButton.displayName = 'LanguageSelectorButton'
