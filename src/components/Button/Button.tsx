import React, { type JSX } from 'react'
import classnames from 'classnames'

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  secondary?: boolean
  base?: boolean
  accentStyle?: 'cool' | 'warm'
  outline?: boolean
  inverse?: boolean
  size?: 'big'
  unstyled?: boolean
} & JSX.IntrinsicElements['button']

export const Button = ({
  type,
  children,
  secondary,
  base,
  accentStyle,
  outline,
  inverse,
  size,
  unstyled,
  onClick,
  className,
  ...defaultProps
}: ButtonProps): JSX.Element => {
  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': secondary,
      'usa-button--base': base,
      'usa-button--accent-cool': accentStyle === 'cool',
      'usa-button--accent-warm': accentStyle === 'warm',
      'usa-button--outline': outline,
      'usa-button--inverse': inverse,
      'usa-button--big': size === 'big',
      'usa-button--unstyled': unstyled,
    },
    className
  )

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      data-testid="button"
      {...defaultProps}>
      {children}
    </button>
  )
}

export default Button
