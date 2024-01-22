import React from 'react'
import classname from 'classnames'

export type CollectionDescriptionProps = JSX.IntrinsicElements['p']

export const CollectionDescription = ({
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
