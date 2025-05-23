import React, { type JSX } from 'react'
import classnames from 'classnames'

type RequiredFormProps = {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

type CustomFormProps = {
  className?: string
  large?: boolean
  search?: boolean
}

export type OptionalFormProps = CustomFormProps & JSX.IntrinsicElements['form']

export type FormProps = RequiredFormProps & OptionalFormProps

export const Form = ({
  onSubmit,
  children,
  className,
  large,
  search,
  ...formProps
}: FormProps): JSX.Element => {
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
