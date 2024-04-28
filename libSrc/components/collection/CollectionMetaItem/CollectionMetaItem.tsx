import React from 'react'
import classnames from 'classnames'

export interface BaseCollectionMetaItemProps {}

export type CollectionMetaItemProps = BaseCollectionMetaItemProps &
  JSX.IntrinsicElements['li']

const CollectionMetaItem = ({
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

export default CollectionMetaItem
