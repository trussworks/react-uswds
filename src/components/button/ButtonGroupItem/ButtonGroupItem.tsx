import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseButtonGroupItemProps = {
  className?: string
}

export type ButtonGroupItemProps = React.ComponentPropsWithRef<
  typeof ButtonGroupItem
>

export type ButtonGroupItemRef = React.ComponentRef<typeof ButtonGroupItem>

export const ButtonGroupItemForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BaseButtonGroupItemProps & React.ComponentPropsWithoutRef<'li'>
> = ({ className, ...props }, ref): React.ReactElement => {
  const classes = classnames('usa-button-group__item', className)

  return <li ref={ref} className={classes} {...props} />
}

const ButtonGroupItem = forwardRef(ButtonGroupItemForwardRef)

export default ButtonGroupItem
