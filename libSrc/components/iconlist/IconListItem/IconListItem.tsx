import React, { type ReactElement, type ReactNode } from 'react'
import classnames from 'classnames'

export interface BaseIconListItemProps {
  className?: string
  children: ReactNode
}

export type IconListItemProps = BaseIconListItemProps &
  JSX.IntrinsicElements['li']

const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} data-testid="iconListItem" {...liProps}>
      {children}
    </li>
  )
}

export default IconListItem
