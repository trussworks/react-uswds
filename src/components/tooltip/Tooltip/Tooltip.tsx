import React, { ReactNode, forwardRef, useCallback } from 'react'

import useTooltip from '../useTooltip'
import TooltipBase from '../TooltipBase/TooltipBase'
import TooltipBody from '../TooltipBody/TooltipBody'
import TooltipTrigger, {
  TooltipTriggerProps,
} from '../TooltipTrigger/TooltipTrigger'

type BaseTooltipProps = {
  label: ReactNode
  title?: string
  position?: 'top' | 'bottom' | 'left' | 'right' | undefined
  wrapperclasses?: string
  className?: string
}

const TooltipForwardRef = (
  props: BaseTooltipProps & Omit<TooltipTriggerProps, 'tooltipId'>,
  ref: React.ForwardedRef<HTMLElement>
): React.ReactElement => {
  const { position, wrapperclasses, className, title, label, children } = props
  const tt = useTooltip(position)
  console.log(tt)
  const {
    isShown,
    isVisible,
    positionStyles,
    setVisible,
    tooltipBodyRef,
    tooltipID,
    triggerElementRef,
    wrapTooltip,
    effectivePosition,
  } = tt

  const triggerHandler = useCallback(
    (isActivated: boolean) => setVisible(isActivated),
    []
  )

  return (
    <TooltipBase ref={ref} className={wrapperclasses}>
      <TooltipTrigger
        ref={triggerElementRef}
        aria-describedby={tooltipID}
        onTrigger={triggerHandler}
        {...props}>
        {children}
      </TooltipTrigger>
      <TooltipBody
        className={className}
        isShown={isShown}
        isVisible={isVisible}
        wrapTooltip={wrapTooltip}
        position={effectivePosition}
        title={title}
        id={tooltipID}
        ref={tooltipBodyRef}
        style={positionStyles}>
        {label}
      </TooltipBody>
    </TooltipBase> // the span that wraps the element with have the tooltip class
  )
}

const Tooltip = forwardRef(TooltipForwardRef)

export default Tooltip
