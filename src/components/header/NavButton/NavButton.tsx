import React from 'react'
import classnames from 'classnames'

export const NavButton = (
  props: React.HTMLAttributes<HTMLButtonElement>
): React.ReactElement => {
  const { children, onClick, className, ...buttonProps } = props

  const classes = classnames(className)

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid="navButton"
      {...buttonProps}>
      {children}
    </button>
  )
}
