import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type CollectionThumbnailProps = JSX.IntrinsicElements['img']

export const CollectionThumbnailFowardRef: React.ForwardRefRenderFunction<HTMLImageElement, CollectionThumbnailProps> = ({
  className,
  src,
  alt,
  ...props
}, ref): React.ReactElement => {
  const classes = classnames('usa-collection__img', className)

  return <img ref={ref} className={classes} src={src} alt={alt} {...props} />
}

export const CollectionThumbnail = forwardRef(CollectionThumbnailFowardRef)

export default CollectionThumbnail