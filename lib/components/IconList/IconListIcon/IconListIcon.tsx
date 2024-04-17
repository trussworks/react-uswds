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
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIcon
