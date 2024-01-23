import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCardHeaderProps {
  exdent?: boolean
}

export type CardHeaderProps = BaseCardHeaderProps &
  JSX.IntrinsicElements['header']

export const CardHeaderFowardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  CardHeaderProps
> = (
  { exdent, children, className, ...headerProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-card__header',
    {
      'usa-card__header--exdent': exdent,
    },
    className
  )

  return (
    <header
      ref={ref}
      className={classes}
      {...headerProps}
      data-testid="CardHeader">
      {children}
    </header>
  )
}

export const CardHeader = forwardRef(CardHeaderFowardRef)

export default CardHeader
