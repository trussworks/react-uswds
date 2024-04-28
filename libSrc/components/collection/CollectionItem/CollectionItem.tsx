import React from 'react'
import classnames from 'classnames'

export interface BaseCollectionItemProps {
  variantComponent?: React.ReactNode
}

export type CollectionItemProps = BaseCollectionItemProps &
  JSX.IntrinsicElements['li']

const CollectionItem = ({
  className,
  children,
  variantComponent,
  ...props
}: CollectionItemProps): React.ReactElement => {
  const classes = classnames('usa-collection__item', className)

  return (
    <li className={classes} {...props}>
      {variantComponent}
      <div className="usa-collection__body">{children}</div>
    </li>
  )
}

export default CollectionItem
