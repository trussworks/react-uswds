import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseInputSuffixProps {}

export type InputSuffixProps = BaseInputSuffixProps &
  JSX.IntrinsicElements['div']

export const InputSuffixFowardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InputSuffixProps
> = ({ className, children, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-input-suffix', className)

  return (
    <div
      ref={ref}
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputSuffix">
      {children}
    </div>
  )
}

const InputSuffix = forwardRef(InputSuffixFowardRef)

export default InputSuffix
