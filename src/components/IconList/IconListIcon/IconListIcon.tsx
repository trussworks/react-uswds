import classnames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

interface IconListItemIconProps {
  className?: string
  children: ReactNode
}

export const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListItemIconProps & JSX.IntrinsicElements['div']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIcon
