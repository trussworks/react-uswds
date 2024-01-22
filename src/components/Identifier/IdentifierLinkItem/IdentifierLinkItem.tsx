import React from 'react'
import classnames from 'classnames'

export type IdentifierLinkItemProps = JSX.IntrinsicElements['li']

export const IdentifierLinkItem = ({
  children,
  className,
  ...listItemProps
}: IdentifierLinkItemProps): React.ReactElement => {
  const classes = classnames('usa-identifier__required-links-item', className)
  return (
    <li className={classes} {...listItemProps}>
      {children}
    </li>
  )
}
