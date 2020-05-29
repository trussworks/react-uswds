import React from 'react'
import classnames from 'classnames'

interface CardProps {
  header: React.ReactNode
  media?: React.ReactNode
  footer: React.ReactNode
  layout: 'standardDefault' | 'headerFirst' | 'flagDefault' | 'flagMediaRight'
}

export const Card = (
  props: CardProps & React.HTMLAttributes<HTMLDivElement>
): React.ReactElement => {
  const {
    header,
    media,
    footer,
    layout,
    children,
    className,
    ...divProps
  } = props

  // TODO determine how to implement the tablet:grid-col-4 class properly, should this be li class?
  const classes = classnames(
    'usa-card',
    {
      'usa-card--header-first': layout === 'headerFirst',
      'usa-card--flag': layout === 'flagDefault' || layout === 'flagMediaRight',
      'usa-card--media-right': layout === 'flagMediaRight',
    },
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
