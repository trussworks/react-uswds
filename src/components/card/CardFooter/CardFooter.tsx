import React from 'react'
import classnames from 'classnames'

export interface BaseCardFooterProps {
  exdent?: boolean
}

export type CardFooterProps = BaseCardFooterProps & JSX.IntrinsicElements['div']

export const CardFooter = ({
  exdent,
  children,
  className,
  ...footerProps
}: CardFooterProps): React.ReactElement => {
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
