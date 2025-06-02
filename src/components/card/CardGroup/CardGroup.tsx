import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CardGroupProps = JSX.IntrinsicElements['ul']

export const CardGroup = ({
  children,
  className,
  ...ulProps
}: CardGroupProps): JSX.Element => {
  const classes = classnames('usa-card-group', className)

  return (
    <ul className={classes} data-testid="CardGroup" {...ulProps}>
      {children}
    </ul>
  )
}

export default CardGroup
