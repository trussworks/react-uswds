import React from 'react'
import classnames from 'classnames'

export type InputPrefixProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

const InputPrefix = ({
  className,
  children,
  ...divProps
}: InputPrefixProps): React.ReactElement => {
  const classes = classnames('usa-input-prefix', className)

  return (
    <div
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputPrefix">
      {children}
    </div>
  )
}

export default InputPrefix
