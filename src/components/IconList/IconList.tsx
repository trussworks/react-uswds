import React, { ReactElement, forwardRef } from 'react'
import classnames from 'classnames'

export type IconListProps = JSX.IntrinsicElements['ul']

export const IconListForwardRef: React.ForwardRefRenderFunction<
  HTMLUListElement,
  IconListProps
> = ({ children, className, ...props }, ref): ReactElement => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul ref={ref} className={classes} data-testid="iconList" {...props}>
      {children}
    </ul>
  )
}

export const IconList = forwardRef(IconListForwardRef)

export default IconList
