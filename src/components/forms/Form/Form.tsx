import React from 'react'
import classnames from 'classnames'

interface RequiredFormProps {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

interface CustomFormProps {
  className?: string
  large?: boolean
  search?: boolean
}

export type OptionalFormProps = CustomFormProps & JSX.IntrinsicElements['form']

type FormProps = RequiredFormProps & OptionalFormProps

export const Form = (props: FormProps): React.ReactElement => {
  const { onSubmit, children, className, large, search, ...formProps } = props

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
