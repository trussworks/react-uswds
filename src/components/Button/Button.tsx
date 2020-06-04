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
  size?: 'big' | 'small'
  /**
   * @deprecated since 1.5.0, use size
   */
  big?: boolean
  /**
   * @deprecated since 1.5.0, use size
   */
  small?: boolean
  icon?: boolean
  unstyled?: boolean
}

export const Button = (
  props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const {
    type,
    disabled,
    children,
    secondary,
    base,
    accent,
    outline,
    inverse,
    size,
    big,
    small,
    icon,
    unstyled,
    onClick,
    className,
  } = props

  let isBig = big || false
  let isSmall = small || false
  if (size === 'big') {
    isBig = true
  }
  if (size === 'small') {
    isSmall = true
  }
  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': secondary,
      'usa-button--base': base,
      'usa-button--accent-cool': accent,
      'usa-button--outline': outline,
      'usa-button--inverse': inverse,
      'usa-button--big': isBig,
      'usa-button--small': isSmall,
      'usa-button--icon': icon,
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
