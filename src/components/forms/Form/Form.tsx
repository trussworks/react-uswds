import React from 'react'
import classnames from 'classnames'

interface FormProps {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  className?: string
  large?: boolean
  search?: boolean
}

export const Form = (
  props: FormProps & React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement => {
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
