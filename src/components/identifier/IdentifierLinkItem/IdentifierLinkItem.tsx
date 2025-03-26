import React, { type JSX } from 'react'
import classnames from 'classnames'

export type IdentifierLinkItemProps = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['li']

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
