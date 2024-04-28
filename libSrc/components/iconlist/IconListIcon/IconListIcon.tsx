import classnames from 'classnames'
import React, { type ReactElement, type ReactNode } from 'react'

export interface BaseIconListIconProps {
  className?: string
  children: ReactNode
}

export type IconListIconProps = BaseIconListIconProps &
  JSX.IntrinsicElements['div']

const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListIconProps): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} data-testid="iconListIcon" {...divProps}>
      {children}
    </div>
  )
}
export default IconListIcon
