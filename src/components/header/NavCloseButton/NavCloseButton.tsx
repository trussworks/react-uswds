import React, { type JSX } from 'react'
import classnames from 'classnames'
// assets
import { Icon } from '../../Icon/Icons'

export const NavCloseButton = ({
  onClick,
  className,
  ...buttonProps
}: JSX.IntrinsicElements['button']): JSX.Element => {
  const classes = classnames('usa-nav__close', className)

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid="navCloseButton"
      aria-label="Close Navigation Menu"
      {...buttonProps}
      type="button">
      <Icon.Close size={3} aria-hidden="true" />
    </button>
  )
}
