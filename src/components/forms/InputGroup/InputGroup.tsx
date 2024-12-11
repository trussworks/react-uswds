import classnames from 'classnames'

export interface InputGroupProps {
  children: React.ReactNode
  className?: string
  error?: boolean
}

export const InputGroup = ({
  children,
  className,
  error,
}: InputGroupProps): React.ReactElement => {
  const classes = classnames(
    'usa-input-group',
    { 'usa-input-group--error': error },
    className
  )

  return (
    <div data-testid="inputGroup" className={classes}>
      {children}
    </div>
  )
}
