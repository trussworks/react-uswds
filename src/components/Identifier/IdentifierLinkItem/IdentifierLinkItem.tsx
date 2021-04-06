import React from 'react'
import classnames from 'classnames'

export interface IdentifierLinkItemProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLinkItem = ({
  children,
  className,
  ...listItemProps
}: IdentifierLinkItemProps &
  JSX.IntrinsicElements['li']): React.ReactElement => {
  const classes = classnames('usa-identifier__required-links-item', className)
  return (
    <li className={classes} {...listItemProps}>
      {children}
    </li>
  )
}
