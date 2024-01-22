import React from 'react'
import classnames from 'classnames'

export interface BaseCollectionMetaItemTagProps {
  tagStyle?: 'new' | 'default'
}

export type CollectionMetaItemTagProps = BaseCollectionMetaItemTagProps &
  JSX.IntrinsicElements['li']

export const CollectionMetaItemTag = ({
  className,
  children,
  tagStyle,
  ...props
}: CollectionMetaItemTagProps): React.ReactElement => {
  const classes = classnames(
    'usa-collection__meta-item',
    'usa-tag',
    { 'usa-tag--new': tagStyle === 'new' },
    className
  )

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}
