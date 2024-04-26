import React from 'react'
import classnames from 'classnames'

export type FormGroupProps = {
  children: React.ReactNode
  className?: string
  error?: boolean
} & JSX.IntrinsicElements['div']

const FormGroup = ({
  children,
  className,
  error,
  ...props
}: FormGroupProps): React.ReactElement => {
  const classes = classnames(
    'usa-form-group',
    { 'usa-form-group--error': error },
    className
  )

  return (
    <div data-testid="formGroup" className={classes} {...props}>
      {children}
    </div>
  )
}

export default FormGroup
