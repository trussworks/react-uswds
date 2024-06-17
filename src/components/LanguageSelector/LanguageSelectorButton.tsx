import React from 'react'
import classnames from 'classnames'

type LanguageSelectorButtonProps = {
  label: string
  labelAttr?: string
  onToggle: () => void
}

export const LanguageSelectorButton = ({
  label,
  labelAttr,
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
      onClick={(): void => onToggle()}
      type="button"
      {...buttonProps}>
      {buttonContents}
    </button>
  )
}

export default LanguageSelectorButton
