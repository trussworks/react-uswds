import React from 'react'
import classnames from 'classnames'

export type CollectionMetaProps = JSX.IntrinsicElements['ul']

export const CollectionMeta = ({
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
