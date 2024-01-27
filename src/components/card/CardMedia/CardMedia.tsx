import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCardMediaProps {
  exdent?: boolean
  inset?: boolean
  imageClass?: string
  children: React.ReactNode
}

export type CardMediaProps = BaseCardMediaProps & JSX.IntrinsicElements['div']

export const CardMediaForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardMediaProps
> = (
  { exdent, inset, imageClass, children, className, ...mediaProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-card__media',
    {
      'usa-card__media--exdent': exdent,
      'usa-card__media--inset': inset,
    },
    className
  )

  const imageClasses = classnames('usa-card__img', imageClass)

  return (
    <div ref={ref} className={classes} {...mediaProps} data-testid="CardMedia">
      <div className={imageClasses}>{children}</div>
    </div>
  )
}

const CardMedia = forwardRef(CardMediaForwardRef)

export default CardMedia
