import React from 'react'
import classnames from 'classnames'

export type CollectionThumbnailProps = JSX.IntrinsicElements['img']

const CollectionThumbnail = ({
  className,
  src,
  alt,
  ...props
}: CollectionThumbnailProps): React.ReactElement => {
  const classes = classnames('usa-collection__img', className)

  return <img className={classes} src={src} alt={alt} {...props} />
}

export default CollectionThumbnail