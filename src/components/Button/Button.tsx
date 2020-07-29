import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../deprecation'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  secondary?: boolean
  base?: boolean
  accent?: boolean
  outline?: boolean
  inverse?: boolean
  size?: 'big' | 'small' // small is deprecated
  /**
   * @deprecated since 1.6.0, use size
   */
  big?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  small?: boolean
  /**
   * @deprecated since 1.8.0
   */
  icon?: boolean
  unstyled?: boolean
}

export const Button = (
  props: ButtonProps & JSX.IntrinsicElements['button']
): React.ReactElement => {
  const {
    type,
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
    ...defaultProps
  } = props

  if (big) {
    deprecationWarning('Button property big is deprecated.  Use size')
  }

  if (icon) {
    deprecationWarning('Button property icon is deprecated.')
  }

  const isBig = size ? size === 'big' : big
  const isSmall = size ? size === 'small' : small

  if (isSmall) {
    deprecationWarning(
      'Small button is deprecated. Use the default (do not set `size` or `small` properties).'
    )
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
      onClick={onClick}
      data-testid="button"
      {...defaultProps}>
      {children}
    </button>
  )
}

export default Button
