import React, { ReactElement, forwardRef } from 'react'
import classnames from 'classnames'

export type IconListItemProps = JSX.IntrinsicElements['li']

export const IconListItemForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  IconListItemProps
> = ({ className, children, ...liProps }, ref): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li ref={ref} className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

const IconListItem = forwardRef(IconListItemForwardRef)

export default IconListItem
