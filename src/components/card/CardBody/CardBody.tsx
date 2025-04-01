import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CardBodyProps = JSX.IntrinsicElements['div'] & { exdent?: boolean }

export const CardBody = ({
  exdent,
  children,
  className,
  ...bodyProps
}: CardBodyProps): JSX.Element => {
  const classes = classnames(
    'usa-card__body',
    {
      'usa-card__body--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...bodyProps} data-testid="CardBody">
      {children}
    </div>
  )
}

export default CardBody
