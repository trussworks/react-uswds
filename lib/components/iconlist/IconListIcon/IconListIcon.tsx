import classnames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

export type IconListIconProps = {
  className?: string
  children: ReactNode
} & JSX.IntrinsicElements['div']

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
