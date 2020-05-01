import React from 'react'
import classnames from 'classnames'

interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

export const Header = (props: HeaderProps): React.ReactElement => {
  const { children, className } = props

  const classes = classnames('usa-header usa-header--basic', className)

  return (
    <header data-testid="header" className={classes}>
      {children}
    </header>
  )
}
