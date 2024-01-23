import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseFormProps = {
  large?: boolean
  search?: boolean
}

export type RequiredFormProps = Required<
  Pick<JSX.IntrinsicElements['form'], 'children' | 'onSubmit'>
>

export type FormProps = BaseFormProps &
  RequiredFormProps &
  Omit<JSX.IntrinsicElements['form'], 'children' | 'onSubmit'>

export const FormForwardRef: React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = ({
  onSubmit,
  children,
  className,
  large,
  search,
  ...formProps
}, ref): React.ReactElement => {
  const classes = classnames(
    {
      'usa-form': !search,
      'usa-form--large': large,
    },
    className
  )

  return (
    <form
      ref={ref}
      data-testid="form"
      className={classes}
      onSubmit={onSubmit}
      {...formProps}>
      {children}
    </form>
  )
}

export const Form = forwardRef(FormForwardRef)

export default Form