import classnames from 'classnames'
import React, { ReactElement, forwardRef } from 'react'

export type IconListIconProps = JSX.IntrinsicElements['div']

export const IconListIconForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IconListIconProps
> = ({ className, children, ...divProps }, ref): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div ref={ref} className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}

const IconListIcon = forwardRef(IconListIconForwardRef)

export default IconListIcon
