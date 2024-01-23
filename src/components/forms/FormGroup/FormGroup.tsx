import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseFormGroupProps = {
  error?: boolean
}

export type FormGroupProps = BaseFormGroupProps & JSX.IntrinsicElements['div']

export const FormGroupForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, FormGroupProps> = ({
  children,
  className,
  error,
  ...props
}, ref): React.ReactElement => {
  const classes = classnames(
    'usa-form-group',
    { 'usa-form-group--error': error },
    className
  )

  return (
    <div ref={ref} data-testid="formGroup" className={classes} {...props}>
      {children}
    </div>
  )
}

export const FormGroup = forwardRef(FormGroupForwardRef)

export default FormGroup