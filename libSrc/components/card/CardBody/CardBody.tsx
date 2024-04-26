import React from 'react'
import classnames from 'classnames'

export interface BaseCardBodyProps {
  exdent?: boolean
}

export type CardBodyProps = BaseCardBodyProps & JSX.IntrinsicElements['div']

const CardBody = ({
  exdent,
  children,
  className,
  ...bodyProps
}: CardBodyProps): React.ReactElement => {
  const classes = classnames(
    'usa-card__body',
    {
      'usa-card__body--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...bodyProps} data-testid="CardBody">
      {children}
    </div>
  )
}

export default CardBody
