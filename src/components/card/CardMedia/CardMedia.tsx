import React from 'react'
import classnames from 'classnames'

interface CardMediaProps {
  exdent?: boolean
  inset?: boolean
  imageClass?: string
  children: React.ReactNode
}

export const CardMedia = ({
  exdent,
  inset,
  imageClass,
  children,
  className,
  ...mediaProps
}: CardMediaProps & JSX.IntrinsicElements['div']): React.ReactElement => {
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
    <div className={classes} {...mediaProps} data-testid="CardMedia">
      <div className={imageClasses}>{children}</div>
    </div>
  )
}

export default CardMedia
