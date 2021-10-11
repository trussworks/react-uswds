import React from 'react'
import classnames from 'classnames'
import { InputAffixProps } from './types'

export const InputPrefix = ({
  className,
  children,
}: InputAffixProps): React.ReactElement => {
  const classes = classnames('usa-input-prefix', className)

  return (
    <div className={classes} aria-hidden="true" data-testid="InputPrefix">
      {children}
    </div>
  )
}
