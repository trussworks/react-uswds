import React from 'react'
import classnames from 'classnames'

export type CardHeaderProps = {
  exdent?: boolean
} & JSX.IntrinsicElements['header']

const CardHeader = ({
  exdent,
  children,
  className,
  ...headerProps
}: CardHeaderProps): React.ReactElement => {
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
