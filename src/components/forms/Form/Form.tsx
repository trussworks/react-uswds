import React from 'react'
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

export const Form = ({
  onSubmit,
  children,
  className,
  large,
  search,
  ...formProps
}: FormProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-form': !search,
      'usa-form--large': large,
    },
    className
  )

  return (
    <form
      data-testid="form"
      className={classes}
      onSubmit={onSubmit}
      {...formProps}>
      {children}
    </form>
  )
}
