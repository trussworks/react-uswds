import classnames from 'classnames'
import React, { ReactNode, type JSX } from 'react'

interface IconListIconPropsInterface {
  className?: string
  children: ReactNode
}

export type IconListIconProps = IconListIconPropsInterface &
  JSX.IntrinsicElements['div']

export const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListIconProps): JSX.Element => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIconProps
