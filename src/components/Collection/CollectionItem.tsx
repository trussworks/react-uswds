import React, { type JSX } from 'react'
import classnames from 'classnames'

export type CollectionItemProps = {
  variantComponent?: React.ReactNode
} & JSX.IntrinsicElements['li']

export const CollectionItem = ({
  className,
  children,
  variantComponent,
  ...props
}: CollectionItemProps): JSX.Element => {
  const classes = classnames('usa-collection__item', className)

  return (
    <li className={classes} {...props}>
      {variantComponent}
      <div className="usa-collection__body">{children}</div>
    </li>
  )
}
