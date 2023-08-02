import React from 'react'
import classnames from 'classnames'

type LanguageSelectorButtonProps = {
  label: string
  labelAttr?: string
  isOpen?: boolean
  onToggle: () => void
}

export const LanguageSelectorButton = ({
  label,
  labelAttr,
  isOpen,
  onToggle,
  className,
  ...buttonProps
}: LanguageSelectorButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
  const classes = classnames('usa-button', 'usa-language__link', className)
  const buttonContents = labelAttr ? (
    <span lang={labelAttr}>{label}</span>
  ) : (
    label
  )
  return (
    <button
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

export default LanguageSelectorButton
