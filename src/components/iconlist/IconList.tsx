import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IconListPropsInterface {
  children: React.ReactNode
  className?: string
}

export type IconListProps = IconListPropsInterface & JSX.IntrinsicElements['ul']

export const IconList = ({
  children,
  className,
}: IconListProps): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul className={classes} data-testid="iconList">
      {children}
    </ul>
  )
}

export default IconList
