import React from 'react'
import classnames from 'classnames'

interface ExtendedHeaderProps {
  children: React.ReactNode
  className?: string
}

export const ExtendedHeader = (
  props: ExtendedHeaderProps
): React.ReactElement => {
  const { children, className } = props

  const classes = classnames('usa-header usa-header--extended', className)

  return (
    <header data-testid="header" className={classes}>
      {children}
    </header>
  )
}
