import React, { type JSX } from 'react'
import classnames from 'classnames'

interface CollectionMetaItemTagProps {
  tagStyle?: 'new' | 'default'
}

export const CollectionMetaItemTag = ({
  className,
  children,
  tagStyle,
  ...props
}: CollectionMetaItemTagProps & JSX.IntrinsicElements['li']): JSX.Element => {
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
