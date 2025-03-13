import React, { type JSX } from 'react'
import classnames from 'classnames'

interface IconListProps {
  children: React.ReactNode
  className?: string
}

export const IconList = ({
  children,
  className,
}: IconListProps & JSX.IntrinsicElements['ul']): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul className={classes} data-testid="iconList">
      {children}
    </ul>
  )
}

export default IconList
