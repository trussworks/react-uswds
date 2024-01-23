import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type CollectionMetaProps = JSX.IntrinsicElements['ul']

export const CollectionMetaForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, CollectionMetaProps> = ({
  className,
  children,
  ...props
}, ref): React.ReactElement => {
  const classes = classnames('usa-collection__meta', className)

  return (
    <ul ref={ref} className={classes} {...props}>
      {children}
    </ul>
  )
}

export const CollectionMeta = forwardRef(CollectionMetaForwardRef)

export default CollectionMeta