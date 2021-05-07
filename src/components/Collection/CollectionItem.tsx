import React from 'react'
import classnames from 'classnames'

interface CollectionItemProps {
  variantComponent?: React.ReactNode
}

export const CollectionItem = ({
  className,
  children,
  variantComponent,
  ...props
}: CollectionItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
  const classes = classnames('usa-collection__item', className)

  return (
    <li className={classes} {...props}>
      {variantComponent}
      <div className="usa-collection__body">{children}</div>
    </li>
  )
}
