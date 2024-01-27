import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseCollectionProps = {
  condensed?: boolean
}

export type CollectionProps = BaseCollectionProps & JSX.IntrinsicElements['ul']

export const CollectionForwardRef: React.ForwardRefRenderFunction<
  HTMLUListElement,
  CollectionProps
> = (
  { children, className, condensed, ...ulProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-collection',
    { 'usa-collection--condensed': condensed },
    className
  )
  return (
    <ul ref={ref} className={classes} data-testid="collection" {...ulProps}>
      {children}
    </ul>
  )
}

const Collection = forwardRef(CollectionForwardRef)

export default Collection
