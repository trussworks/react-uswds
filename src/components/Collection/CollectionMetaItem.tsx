import React from 'react'
import classnames from 'classnames'

export type CollectionMetaItemProps = JSX.IntrinsicElements['li']

export const CollectionMetaItem = ({
  className,
  children,
  ...props
}: CollectionMetaItemProps): React.ReactElement => {
  const classes = classnames('usa-collection__meta-item', className)

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}
