import React from 'react'
import classnames from 'classnames'

export const CardFooter = (
  props: { exdent?: boolean } & React.HTMLAttributes<HTMLDivElement>
): React.ReactElement => {
  const { exdent, children, className, ...footerProps } = props

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
