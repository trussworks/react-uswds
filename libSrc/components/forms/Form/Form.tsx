import React from 'react'
import classnames from 'classnames'

export type RequiredFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export type CustomFormProps = {
  className?: string
  large?: boolean
  search?: boolean
}

export type OptionalFormProps = CustomFormProps & JSX.IntrinsicElements['form']

export type FormProps = RequiredFormProps & OptionalFormProps

const Form = ({
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

export default Form
