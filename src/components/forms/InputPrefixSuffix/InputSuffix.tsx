import React from 'react'
import classnames from 'classnames'
import { InputAffixProps } from './types'

export const InputSuffix = ({
  className,
  children,
}: InputAffixProps): React.ReactElement => {
  const classes = classnames('usa-input-suffix', className)

  return (
    <div className={classes} aria-hidden="true" data-testid="InputSuffix">
      {children}
    </div>
  )
}
