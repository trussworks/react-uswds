import React from 'react'
import classname from 'classnames'

export interface BaseCollectionDescriptionProps {}

export type CollectionDescriptionProps = BaseCollectionDescriptionProps &
  JSX.IntrinsicElements['p']

const CollectionDescription = ({
  className,
  children,
  ...props
}: CollectionDescriptionProps): React.ReactElement => {
  const classes = classname('usa-collection__description', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

export default CollectionDescription
