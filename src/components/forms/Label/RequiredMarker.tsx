import classNames from 'classnames'
import React, { forwardRef } from 'react'

export type RequiredMarkerProps = JSX.IntrinsicElements['abbr']

export const RequiredMarkerForwardRef: React.ForwardRefRenderFunction<HTMLElement, RequiredMarkerProps> = ({className, ...props}, ref): React.ReactElement => {
  const classname = classNames("usa-hint usa-hint--required", className)

  return (
    <abbr ref={ref} title="required" className={classname} {...props}>
      *
    </abbr>
  )
}

export const RequiredMarker = forwardRef(RequiredMarkerForwardRef)

export default RequiredMarker
