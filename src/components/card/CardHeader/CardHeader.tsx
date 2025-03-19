import React, { type JSX } from 'react'
import classnames from 'classnames'

export const CardHeader = ({
  exdent,
  children,
  className,
  ...headerProps
}: {
  exdent?: boolean
} & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames(
    'usa-card__header',
    {
      'usa-card__header--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...headerProps} data-testid="CardHeader">
      {children}
    </div>
  )
}

export default CardHeader
