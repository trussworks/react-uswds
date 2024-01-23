import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseLanguageSelectorButtonProps = {
  label: string
  labelAttr?: string
  isOpen?: boolean
  onToggle: () => void
}

export type LanguageSelectorButtonProps = BaseLanguageSelectorButtonProps &
  JSX.IntrinsicElements['button']

export const LanguageSelectorButtonForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, LanguageSelectorButtonProps> = ({
  label,
  labelAttr,
  isOpen,
  onToggle,
  className,
  ...buttonProps
}, ref): React.ReactElement => {
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
      aria-controls="language-options"
      onClick={(): void => onToggle()}
      type="button"
      {...buttonProps}>
      {buttonContents}
    </button>
  )
}

export const LanguageSelectorButton = forwardRef(LanguageSelectorButtonForwardRef)

export default LanguageSelectorButton
