import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CardFooterProps = JSX.IntrinsicElements['div'] & {
  exdent?: boolean
}

export const CardFooter = ({
  exdent,
  children,
  className,
  ...footerProps
}: CardFooterProps): JSX.Element => {
  const classes = classnames(
    'usa-card__footer',
    {
      'usa-card__footer--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...footerProps} data-testid="CardFooter">
      {children}
    </div>
  )
}

export default CardFooter
