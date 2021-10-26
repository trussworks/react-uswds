import React, { ReactElement, ReactNode } from 'react'
import classnames from 'classnames'

interface IconListItemProps {
  className?: string
  children: ReactNode
}

export const IconListItem = ({
  className,
  children,
}: IconListItemProps & JSX.IntrinsicElements['li']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return <li className={classes}>{children}</li>
}

export default IconListItem
