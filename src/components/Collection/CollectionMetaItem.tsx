import React from 'react'
import classnames from 'classnames'

export const CollectionMetaItem = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['li']): React.ReactElement => {
  const classes = classnames('usa-collection__meta-item', className)

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}
