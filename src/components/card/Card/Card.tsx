import React from 'react'
import classnames from 'classnames'

interface CardProps {
  header?: React.ReactNode
  media?: React.ReactNode
  footer?: React.ReactNode
  standardLayout?: 'default' | 'headerFirst'
  flagLayout?: 'default' | 'mediaOnRight'
}

export const Card = (
  props: CardProps & React.HTMLAttributes<HTMLDivElement>
): React.ReactElement => {
  const {
    header,
    media,
    footer,
    standardLayout,
    flagLayout,
    children,
    className,
    ...divProps
  } = props

  // TODO determine how to implement the tablet:grid-col-4 class properly, should this be li class?
  const classes = classnames(
    'usa-card',
    {
      'usa-card--header-first': standardLayout == 'headerFirst',
      'usa-card--flag': flagLayout != null,
      'usa-card--media-right': flagLayout == 'mediaOnRight',
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
