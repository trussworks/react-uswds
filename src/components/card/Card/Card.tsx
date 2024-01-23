import React, { forwardRef } from 'react'
import classnames from 'classnames'

import { GridLayoutProp, applyGridClasses } from '../../grid/Grid/Grid'

export type BaseCardProps = {
  layout?: 'standardDefault' | 'flagDefault' | 'flagMediaRight'
  headerFirst?: boolean
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export type CardProps = BaseCardProps &
  JSX.IntrinsicElements['li'] &
  GridLayoutProp

export const CardForwardRef: React.ForwardRefRenderFunction<HTMLLIElement, CardProps> = ({
  layout = 'standardDefault',
  headerFirst,
  children,
  className,
  gridLayout,
  containerProps,
  ...liProps
}, ref): React.ReactElement => {
  const { className: containerClass, ...restContainerProps } =
    containerProps || {}

  const gridClasses = gridLayout && applyGridClasses(gridLayout)

  const classes = classnames(
    'usa-card',
    {
      'usa-card--header-first': headerFirst,
      'usa-card--flag': layout === 'flagDefault' || layout === 'flagMediaRight',
      'usa-card--media-right': layout === 'flagMediaRight',
    },
    gridClasses,
    className
  )

  const containerClasses = classnames('usa-card__container', containerClass)

  return (
    <li ref={ref} className={classes} data-testid="Card" {...liProps}>
      <div className={containerClasses} {...restContainerProps}>
        {children}
      </div>
    </li>
  )
}

export const Card = forwardRef(CardForwardRef)

export default Card
