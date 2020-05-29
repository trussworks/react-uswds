import React from 'react'
import classnames from 'classnames'

export const CardFooter = (
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement => {
  const { children, className, ...footerProps } = props

  const classes = classnames('usa-card__footer', className)

  return (
    <div className={classes} {...footerProps} data-testid="CardFooter">
      {children}
    </div>
  )
}

export default CardFooter
