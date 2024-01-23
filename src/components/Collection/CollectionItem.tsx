import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCollectionItemProps {
  variantComponent?: React.ReactNode
}

export type CollectionItemProps = BaseCollectionItemProps &
  JSX.IntrinsicElements['li']

export const CollectionItemForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  CollectionItemProps
> = (
  { className, children, variantComponent, ...props },
  ref
): React.ReactElement => {
  const classes = classnames('usa-collection__item', className)

  return (
    <li ref={ref} className={classes} {...props}>
      {variantComponent}
      <div className="usa-collection__body">{children}</div>
    </li>
  )
}

export const CollectionItem = forwardRef(CollectionItemForwardRef)

export default CollectionItem
