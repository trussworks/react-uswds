import React, { ReactElement, ReactNode } from 'react'
import classnames from 'classnames'

export type IconListItemProps = {
  className?: string
  children: ReactNode
} & JSX.IntrinsicElements['li']

const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

export default IconListItem
