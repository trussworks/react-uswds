import React from 'react'
import classnames from 'classnames'

export interface BaseCollectionMetaProps {}

export type CollectionMetaProps = BaseCollectionMetaProps &
  JSX.IntrinsicElements['ul']

const CollectionMeta = ({
  className,
  children,
  ...props
}: CollectionMetaProps): React.ReactElement => {
  const classes = classnames('usa-collection__meta', className)

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

export default CollectionMeta
