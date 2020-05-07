import React from 'react'
import classnames from 'classnames'

interface HeaderProps {
  children: React.ReactNode
}

export const Header = (
  props: HeaderProps & React.HtmlHTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { children, ...headerProps } = props

  const classes = classnames(
    'usa-header usa-header--basic',
    headerProps.className
  )

  return (
    <header data-testid="header" className={classes} {...headerProps}>
      {children}
    </header>
  )
}
