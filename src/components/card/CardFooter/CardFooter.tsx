import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCardFooterProps {
  exdent?: boolean
}

export type CardFooterProps = BaseCardFooterProps & JSX.IntrinsicElements['div']

export const CardFooterForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardFooterProps
> = (
  { exdent, children, className, ...footerProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-card__footer',
    {
      'usa-card__footer--exdent': exdent,
    },
    className
  )

  return (
    <div
      ref={ref}
      className={classes}
      {...footerProps}
      data-testid="CardFooter">
      {children}
    </div>
  )
}

export const CardFooter = forwardRef(CardFooterForwardRef)

export default CardFooter
