import React from 'react'
import classnames from 'classnames'
import { InputPrefixSuffixProps } from './types'

export const InputPrefix = ({
  className,
  children,
}: InputPrefixSuffixProps): React.ReactElement => {
  const classes = classnames('usa-input-prefix', className)

  return (
    <div className={classes} aria-hidden="true" data-testid="InputPrefix">
      {children}
    </div>
  )
}
