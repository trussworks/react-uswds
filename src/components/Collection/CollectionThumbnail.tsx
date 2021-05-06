import React from 'react'
import classnames from 'classnames'

export const CollectionThumbnail = ({
  className,
  src,
  alt,
  ...props
}: JSX.IntrinsicElements['img']): React.ReactElement => {
  const classes = classnames('usa-collection__img', className)

  return <img className={classes} src={src} alt={alt} {...props} />
}
