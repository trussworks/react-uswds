import React from 'react'
import classnames from 'classnames'
import Button, { ButtonProps } from '../../Button/Button.js'

export type LanguageSelectorButtonProps = {
  label: string
  labelAttr?: string
  isOpen?: boolean
  onToggle: () => void
} & Omit<ButtonProps, 'children'>

const LanguageSelectorButton = ({
  label,
  labelAttr,
  isOpen,
  onToggle,
  className,
  ...buttonProps
}: LanguageSelectorButtonProps): React.ReactElement => {
  const classes = classnames('usa-language__link', className)
  const buttonContents = labelAttr ? (
    <span lang={labelAttr}>{label}</span>
  ) : (
    label
  )
  return (
    <Button
      data-testid="languageSelectorButton"
      className={classes}
      aria-expanded={isOpen}
      aria-controls="language-options"
      onClick={(): void => onToggle()}
      type="button"
      {...buttonProps}>
      {buttonContents}
    </Button>
  )
}

export default LanguageSelectorButton
