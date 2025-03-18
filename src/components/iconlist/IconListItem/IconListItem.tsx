import React, { ReactNode, type JSX } from 'react'
import classnames from 'classnames'

interface IconListItemProps {
  className?: string
  children: ReactNode
}

export const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps & JSX.IntrinsicElements['li']): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

export default IconListItem
