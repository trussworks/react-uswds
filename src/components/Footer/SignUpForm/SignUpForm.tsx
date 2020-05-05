import React from 'react'

import { Button } from '../../Button/Button'
import { Form } from '../../forms/Form/Form'
import { Label } from '../../forms/Label/Label'
import { TextInput, TextInputProps } from '../../forms/TextInput/TextInput'

type SignUpFormProps = {
  heading: React.ReactNode
  label: React.ReactNode
  submitButtonText?: React.ReactNode
  type?: TextInputProps['type']
  onSubmit: () => void
}

export const SignUpForm = ({
  heading,
  label,
  submitButtonText = 'Sign up',
  type = 'email',
  onSubmit,
  ...elementAttributes
}: SignUpFormProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  return (
    <div {...elementAttributes} className="usa-sign-up">
      <h3 className="usa-sign-up__heading">{heading}</h3>
      <Form onSubmit={onSubmit}>
        <Label htmlFor={`signup-${type}`}>{label}</Label>
        <TextInput id={`signup-${type}`} name={`signup-${type}`} type={type} />
        <Button type="submit">{submitButtonText}</Button>
      </Form>
    </div>
  )
}
