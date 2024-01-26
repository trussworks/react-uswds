import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseButtonGroupBaseProps = {
  className?: string
  type?: 'default' | 'segmented'
}

export type ButtonGroupBaseProps = React.ComponentPropsWithRef<
  typeof ButtonGroupBase
>

export type ButtonGroupBaseRef = React.ComponentRef<typeof ButtonGroupBase>

export const ButtonGroupBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLUListElement,
  BaseButtonGroupBaseProps & React.ComponentPropsWithoutRef<'ul'>
> = ({ className, type = 'default', ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-button-group',
    {
      'usa-button-group--segmented': type == 'segmented',
    },
    className
  )

  return <ul ref={ref} className={classes} {...props} />
}

const ButtonGroupBase = forwardRef(ButtonGroupBaseForwardRef)

export default ButtonGroupBase
