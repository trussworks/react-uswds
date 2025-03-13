import React, { type JSX } from 'react'
import classnames from 'classnames'

export const CollectionMeta = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['ul']): JSX.Element => {
  const classes = classnames('usa-collection__meta', className)

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}
