import React from 'react'
import classnames from 'classnames'

export const CardHeader = (
  props: React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { children, className, ...headerProps } = props

  const classes = classnames('usa-card__header', className)

  return (
    <header className={classes} {...headerProps} data-testid="CardHeader">
      {children}
    </header>
  )
}

export default CardHeader
