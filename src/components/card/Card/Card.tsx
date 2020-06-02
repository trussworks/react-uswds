import React from 'react'
import classnames from 'classnames'

import { GridLayoutProp, applyGridClasses } from '../../grid/Grid/Grid'

interface CardProps {
  header: React.ReactNode
  media?: React.ReactNode
  footer: React.ReactNode
  layout: 'standardDefault' | 'headerFirst' | 'flagDefault' | 'flagMediaRight'
}

export const Card = (
  props: CardProps & React.HTMLAttributes<HTMLDivElement> & GridLayoutProp
): React.ReactElement => {
  const {
    header,
    media,
    footer,
    layout,
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
      'usa-card--header-first': layout === 'headerFirst',
      'usa-card--flag': layout === 'flagDefault' || layout === 'flagMediaRight',
      'usa-card--media-right': layout === 'flagMediaRight',
    },
    gridClasses,
    className
  )

  return (
    <li className={classes} data-testid="Card">
      <div className="usa-card__container" {...divProps}>
        {header}
        {media}
        {children}
        {footer}
      </div>
    </li>
  )
}

export default Card
