import React from 'react'
import classnames from 'classnames'

export interface BaseIdentifierLinkItemProps {
  children: React.ReactNode
  className?: string
}

export type IdentifierLinkItemProps = BaseIdentifierLinkItemProps &
  JSX.IntrinsicElements['li']

const IdentifierLinkItem = ({
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

export default IdentifierLinkItem
