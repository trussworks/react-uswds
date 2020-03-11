import React from 'react'
import classnames from 'classnames'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: React.ReactNode
  secondary?: boolean
  base?: boolean
  accent?: boolean
  outline?: boolean
  inverse?: boolean
  big?: boolean
  unstyled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    type,
    disabled,
    children,
    secondary,
    base,
    accent,
    outline,
    inverse,
    big,
    unstyled,
    onClick,
    className,
  } = props

  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': secondary,
      'usa-button--base': base,
      'usa-button--accent-cool': accent,
      'usa-button--outline': outline,
      'usa-button--inverse': inverse,
      'usa-button--big': big,
      'usa-button--unstyled': unstyled,
    },
    className
  )

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      data-testid="button">
      {children}
    </button>
  )
}

export default Button
