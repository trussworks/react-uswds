import React from 'react'
import classnames from 'classnames'

export interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  secondary?: boolean
  base?: boolean
  accentStyle?: 'cool' | 'warm'
  outline?: boolean
  inverse?: boolean
  size?: 'big'
  unstyled?: boolean
}

export type ButtonProps = BaseButtonProps & JSX.IntrinsicElements['button']

function Button(
  {
    type = 'button',
    children,
    secondary,
    base,
    accentStyle,
    outline,
    inverse,
    size,
    unstyled,
    className,
    ...defaultProps
  }: ButtonProps,
  ref?: React.ForwardedRef<HTMLButtonElement>
): React.ReactElement {
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
      data-testid="button"
      ref={ref}
      {...defaultProps}>
      {children}
    </button>
  )
}

export default Button
