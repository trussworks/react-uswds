import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseButtonProps = {
  secondary?: boolean
  base?: boolean
  accentStyle?: 'cool' | 'warm'
  outline?: boolean
  inverse?: boolean
  size?: 'big'
  unstyled?: boolean
}

export type ButtonProps = React.ComponentPropsWithRef<typeof Button>

export type ButtonRef = React.ComponentRef<typeof Button>

export const ButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  BaseButtonProps & React.ComponentPropsWithoutRef<'button'>
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
    ...props
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
      {...props}>
      {children}
    </button>
  )
}

const Button = forwardRef(ButtonForwardRef)

export default Button
