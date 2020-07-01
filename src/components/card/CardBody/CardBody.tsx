import React from 'react'
import classnames from 'classnames'

export const CardBody = (
  props: { exdent?: boolean } & JSX.IntrinsicElements['div']
): React.ReactElement => {
  const { exdent, children, className, ...bodyProps } = props

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
