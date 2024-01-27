import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseInputGroupProps {
  error?: boolean
}

export type InputGroupProps = BaseInputGroupProps & JSX.IntrinsicElements['div']

export const InputGroupForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InputGroupProps
> = ({ children, className, error, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-input-group',
    { 'usa-input-group--error': error },
    className
  )

  return (
    <div ref={ref} data-testid="inputGroup" className={classes} {...props}>
      {children}
    </div>
  )
}

const InputGroup = forwardRef(InputGroupForwardRef)

export default InputGroup
