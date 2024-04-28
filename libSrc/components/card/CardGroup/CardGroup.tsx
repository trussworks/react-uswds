import React from 'react'
import classnames from 'classnames'

export interface BaseCardGroupProps {}

export type CardGroupProps = BaseCardGroupProps & JSX.IntrinsicElements['ul']

const CardGroup = ({
  children,
  className,
  ...ulProps
}: CardGroupProps): React.ReactElement => {
  const classes = classnames('usa-card-group', className)

  return (
    <ul className={classes} data-testid="CardGroup" {...ulProps}>
      {children}
    </ul>
  )
}

export default CardGroup
