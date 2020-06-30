import React from 'react'
import classnames from 'classnames'

export const CardHeader = (
  props: { exdent?: boolean } & JSX.IntrinsicElements['header']
): React.ReactElement => {
  const { exdent, children, className, ...headerProps } = props

  const classes = classnames(
    'usa-card__header',
    {
      'usa-card__header--exdent': exdent,
    },
    className
  )

  return (
    <header className={classes} {...headerProps} data-testid="CardHeader">
      {children}
    </header>
  )
}

export default CardHeader
