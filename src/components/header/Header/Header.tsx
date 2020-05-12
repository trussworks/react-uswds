import React from 'react'
import classnames from 'classnames'

interface HeaderProps {
  basic?: boolean
  extended?: boolean
  children: React.ReactNode
}

export const Header = (
  props: HeaderProps & React.HtmlHTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { basic, extended, children, className, ...headerProps } = props

  const classes = classnames(
    'usa-header',
    {
      'usa-header--basic': basic,
      'usa-header--extended': extended,
    },
    className
  )

  return (
    <header data-testid="header" className={classes} {...headerProps}>
      {children}
    </header>
  )

  //TODO Add tests for basic and extended classes
}
