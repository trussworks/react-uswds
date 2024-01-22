import classnames from 'classnames'
import React, { ReactElement } from 'react'

export type IconListIconProps = JSX.IntrinsicElements['div']

export const IconListIcon = ({
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
export default IconListIconProps
