import React from 'react'
import classnames from 'classnames'

import { GridLayoutProp, applyGridClasses } from '../../grid/Grid/Grid'

interface CardProps {
  layout?: 'standardDefault' | 'flagDefault' | 'flagMediaRight'
  headerFirst?: boolean
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Card = (
  props: CardProps & React.HTMLAttributes<HTMLLIElement> & GridLayoutProp
): React.ReactElement => {
  const {
    layout = 'standardDefault',
    headerFirst,
    children,
    className,
    gridLayout,
    containerProps,
    ...liProps
  } = props

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
    <li className={classes} data-testid="Card" {...liProps}>
      <div className={containerClasses} {...restContainerProps}>
        {children}
      </div>
    </li>
  )
}

export default Card
