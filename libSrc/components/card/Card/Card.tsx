import React from 'react'
import classnames from 'classnames'

import type { GridLayoutProps } from '../../grid/Grid/Grid.js'
import { applyGridClasses } from '../../grid/Grid/utils.js'

export type CardProps = {
  layout?: 'standardDefault' | 'flagDefault' | 'flagMediaRight'
  headerFirst?: boolean
  containerProps?: React.HTMLAttributes<HTMLDivElement>
} & JSX.IntrinsicElements['li'] &
  GridLayoutProps

const Card = ({
  layout = 'standardDefault',
  headerFirst,
  children,
  className,
  gridLayout,
  containerProps,
  ...liProps
}: CardProps): React.ReactElement => {
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
