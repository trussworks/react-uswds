import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCardBodyProps {
  exdent?: boolean
}

export type CardBodyProps = BaseCardBodyProps & JSX.IntrinsicElements['div']

export const CardBodyForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CardBodyProps> = ({
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

export const CardBody = forwardRef(CardBodyForwardRef)

export default CardBody
