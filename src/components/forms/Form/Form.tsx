import React from 'react'
import classnames from 'classnames'

interface FormProps {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  className?: string
  large?: boolean
  srOnly?: boolean
}

export const Form = (
  props: FormProps & React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement => {
  const { onSubmit, children, className, large, srOnly, ...formProps } = props

  const classes = classnames(
    {
      'usa-form': !srOnly,
      'usa-search': srOnly,
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
