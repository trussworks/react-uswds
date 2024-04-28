import React from 'react'
import classnames from 'classnames'
import Icon from '../../Icon/Icon.js'

export interface BaseNavCloseButtonProps {}

export type NavCloseButtonProps = BaseNavCloseButtonProps &
  JSX.IntrinsicElements['button']

const NavCloseButton = ({
  onClick,
  className,
  ...buttonProps
}: NavCloseButtonProps): React.ReactElement => {
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

export default NavCloseButton
