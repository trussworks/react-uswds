import React from 'react'
import classnames from 'classnames'

export type InputGroupProps = {
  children: React.ReactNode
  className?: string
  error?: boolean
} & JSX.IntrinsicElements['div']

const InputGroup = ({
  children,
  className,
  error,
  ...props
}: InputGroupProps): React.ReactElement => {
  const classes = classnames(
    'usa-input-group',
    { 'usa-input-group--error': error },
    className
  )

  return (
    <div data-testid="inputGroup" className={classes} {...props}>
      {children}
    </div>
  )
}

export default InputGroup
