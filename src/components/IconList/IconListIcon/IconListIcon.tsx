import classnames from 'classnames'
import React, { ReactNode, type JSX } from 'react'

interface IconListIconProps {
  className?: string
  children: ReactNode
}

export const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListIconProps & JSX.IntrinsicElements['div']): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIconProps
