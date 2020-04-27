import React from 'react'
import classnames from 'classnames'

interface FormProps {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  className?: string
  large?: boolean
}

export const Form = (
  props: FormProps & React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement => {
  const { onSubmit, children, className, large, ...formProps } = props

  const classes = classnames(
    'usa-form',
    { 'usa-form--large': large },
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
