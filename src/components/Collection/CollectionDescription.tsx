import React, { type JSX } from 'react'
import classname from 'classnames'

export const CollectionDescription = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['p']): JSX.Element => {
  const classes = classname('usa-collection__description', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
