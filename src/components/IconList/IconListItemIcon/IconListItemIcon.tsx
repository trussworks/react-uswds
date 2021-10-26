import classnames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

interface IconListItemIconProps {
  className?: string
  children: ReactNode
}

export const IconListItemIcon = ({
  className,
  children,
}: IconListItemIconProps & JSX.IntrinsicElements['div']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')
  return <div className={classes}>{children}</div>
}
export default IconListItemIcon
