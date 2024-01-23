import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseButtonProps = {
  type: 'button' | 'submit' | 'reset'
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

export const ButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
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
  },
  ref
): React.ReactElement => {
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
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      data-testid="button"
      {...defaultProps}>
      {children}
    </button>
  )
}

export const Button = forwardRef(ButtonForwardRef)

export default Button
