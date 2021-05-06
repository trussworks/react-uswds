import React from 'react'
import classname from 'classnames'

export const CollectionDescription = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['p']): React.ReactElement => {
  const classes = classname('usa-collection__description', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
