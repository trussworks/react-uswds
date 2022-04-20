import React from 'react'
import classnames from 'classnames'

type InputPrefixProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

export const InputPrefix = ({
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
      data-testid="InputPrefix"
    >
      {children}
    </div>
  )
}
