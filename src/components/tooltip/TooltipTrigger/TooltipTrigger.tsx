import React, { forwardRef, useCallback } from 'react'
import classnames from 'classnames'

import Button from '../../button/Button/Button'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/asCustom'

export type BaseTooltipTriggerProps = {
  className?: string
  children?: React.ReactNode
  onTrigger?: (isActivated: boolean) => void
  title?: string
  tabIndex?: number
}

export type PolymorphicTooltipTriggerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, BaseTooltipTriggerProps>

export type TooltipTriggerProps = React.ComponentPropsWithRef<
  typeof TooltipTrigger
>

export type TooltipTriggerRef = React.ComponentRef<typeof TooltipTrigger>

export const TooltipForwardRef = <C extends React.ElementType = typeof Button>(
  {
    asCustom,
    onTrigger,
    ...props
  }: BaseTooltipTriggerProps & PolymorphicTooltipTriggerProps<C>,
  ref: PolymorphicRef<C>
): React.ReactElement => {
  const activatedHandler = useCallback(() => onTrigger?.(true), [])
  const deactivatedHandler = useCallback(() => onTrigger?.(false), [])
  const Component = asCustom ?? Button
  const { className, tabIndex = 0, title = '', ...remainingProps } = props
  const classes = classnames('usa-tooltip__trigger', className)
  return (
    <Component
      data-testid="triggerElement"
      ref={ref}
      className={classes}
      tabIndex={tabIndex}
      title={title}
      onMouseEnter={activatedHandler}
      onMouseOver={activatedHandler}
      onFocus={activatedHandler}
      onMouseLeave={deactivatedHandler}
      onBlur={deactivatedHandler}
      onKeyDown={deactivatedHandler}
      type={!asCustom ? 'button' : undefined}
      {...remainingProps}
    />
  )
}

const TooltipTrigger = forwardRef(TooltipForwardRef)

export default TooltipTrigger
