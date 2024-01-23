import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseInputPrefixProps {}

export type InputPrefixProps = BaseInputPrefixProps &
  JSX.IntrinsicElements['div']

export const InputPrefixFowardRef: React.ForwardRefRenderFunction<HTMLDivElement, InputPrefixProps> = ({
  className,
  children,
  ...divProps
}, ref): React.ReactElement => {
  const classes = classnames('usa-input-prefix', className)

  return (
    <div
      ref={ref}
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputPrefix">
      {children}
    </div>
  )
}

export const InputPrefix = forwardRef(InputPrefixFowardRef)

export default InputPrefix
