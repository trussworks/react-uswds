import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseCollectionMetaItemTagProps {
  tagStyle?: 'new' | 'default'
}

export type CollectionMetaItemTagProps = BaseCollectionMetaItemTagProps &
  JSX.IntrinsicElements['li']

export const CollectionMetaItemTagForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  CollectionMetaItemTagProps
> = ({ className, children, tagStyle, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-collection__meta-item',
    'usa-tag',
    { 'usa-tag--new': tagStyle === 'new' },
    className
  )

  return (
    <li ref={ref} className={classes} {...props}>
      {children}
    </li>
  )
}

export const CollectionMetaItem = forwardRef(CollectionMetaItemTagForwardRef)

export default CollectionMetaItem
