import React, { type JSX } from 'react'
import classname from 'classnames'

export type CollectionDescriptionProps = JSX.IntrinsicElements['p']

export const CollectionDescription = ({
  className,
  children,
  ...props
}: CollectionDescriptionProps): JSX.Element => {
  const classes = classname('usa-collection__description', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
