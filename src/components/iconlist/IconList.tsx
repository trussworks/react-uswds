import React, { type JSX } from 'react'
import classnames from 'classnames'

export type IconListProps = {
  children: React.ReactNode
  className?: string
} & JSX.IntrinsicElements['ul']

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
