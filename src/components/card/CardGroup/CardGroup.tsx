import React from 'react'
import classnames from 'classnames'

export const CardGroup = (
  props: JSX.IntrinsicElements['ul']
): React.ReactElement => {
  const { children, className, ...ulProps } = props

  const classes = classnames('usa-card-group', className)

  return (
    <ul className={classes} data-testid="CardGroup" {...ulProps}>
      {children}
    </ul>
  )
}

export default CardGroup
