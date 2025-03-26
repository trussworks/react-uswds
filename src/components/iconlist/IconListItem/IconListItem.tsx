import React, { ReactNode, type JSX } from 'react'
import classnames from 'classnames'

export type IconListItemProps = {
  className?: string
  children: ReactNode
} & JSX.IntrinsicElements['li']

export const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

export default IconListItem
