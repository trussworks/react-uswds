import React, { type JSX } from 'react'
import classnames from 'classnames'

export interface IdentifierLinkItemPropsInterface {
  children: React.ReactNode
  className?: string
}

export type IdentifierLinkItemProps = IdentifierLinkItemPropsInterface &
  JSX.IntrinsicElements['li']

export const IdentifierLinkItem = ({
  children,
  className,
  ...listItemProps
}: IdentifierLinkItemProps): JSX.Element => {
  const classes = classnames('usa-identifier__required-links-item', className)
  return (
    <li className={classes} {...listItemProps}>
      {children}
    </li>
  )
}
