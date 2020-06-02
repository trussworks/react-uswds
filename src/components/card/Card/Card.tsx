import React from 'react'
import classnames from 'classnames'

import { GridLayoutProp, applyGridClasses } from '../../grid/Grid/Grid'

interface CardProps {
  layout: 'standardDefault' | 'flagDefault' | 'flagMediaRight'
  headerFirst?: boolean
}

export const Card = (
  props: CardProps & React.HTMLAttributes<HTMLDivElement> & GridLayoutProp
): React.ReactElement => {
  const {
    layout,
    headerFirst,
    children,
    className,
    gridLayout,
    ...divProps
  } = props

  // TODO determine how to implement the tablet:grid-col-4 class properly, should this be li class?
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

  return (
    <li className={classes} data-testid="Card">
      <div className="usa-card__container" {...divProps}>
        {children}
      </div>
    </li>
  )
}

export default Card
