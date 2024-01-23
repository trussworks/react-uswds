import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type CollectionMetaItemProps = JSX.IntrinsicElements['li']

export const CollectionMetaItemForwardRef: React.ForwardRefRenderFunction<HTMLLIElement, CollectionMetaItemProps> = ({
  className,
  children,
  ...props
}, ref): React.ReactElement => {
  const classes = classnames('usa-collection__meta-item', className)

  return (
    <li ref={ref} className={classes} {...props}>
      {children}
    </li>
  )
}

export const CollectionMetaItem = forwardRef(CollectionMetaItemForwardRef)

export default CollectionMetaItem