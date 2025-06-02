import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CardHeaderProps = JSX.IntrinsicElements['div'] & {
  exdent?: boolean
}

export const CardHeader = ({
  exdent,
  children,
  className,
  ...headerProps
}: CardHeaderProps): JSX.Element => {
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
