import React from 'react'
import classnames from 'classnames'

export type CollectionMetaItemTagProps = {
  tagStyle?: 'new' | 'default'
} & JSX.IntrinsicElements['li']

const CollectionMetaItemTag = ({
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

export default CollectionMetaItemTag
