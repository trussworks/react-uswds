import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CollectionMetaItemTagProps = {
  tagStyle?: 'new' | 'default'
} & JSX.IntrinsicElements['li']

export const CollectionMetaItemTag = ({
  className,
  children,
  tagStyle,
  ...props
}: CollectionMetaItemTagProps): JSX.Element => {
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
