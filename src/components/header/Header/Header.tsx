import React from 'react'
import classnames from 'classnames'

interface HeaderProps {
  basic?: boolean
  extended?: boolean
  basicWithMegaMenu?: boolean
  children: React.ReactNode
}

export const Header = (
  props: HeaderProps & React.HtmlHTMLAttributes<HTMLElement>
): React.ReactElement => {
  const {
    basic,
    extended,
    basicWithMegaMenu,
    children,
    className,
    ...headerProps
  } = props

  const classes = classnames(
    'usa-header',
    {
      'usa-header--basic': basic,
      'usa-header--megamenu': basicWithMegaMenu,
      'usa-header--extended': extended,
    },
    className
  )

  return (
    <header data-testid="header" className={classes} {...headerProps}>
      {children}
    </header>
  )
}
