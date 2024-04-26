import React from 'react'
import classnames from 'classnames'

export interface BaseInputSuffixProps {
  className?: string
  children: React.ReactNode
}

export type InputSuffixProps = BaseInputSuffixProps &
  JSX.IntrinsicElements['div']

const InputSuffix = ({
  className,
  children,
  ...divProps
}: InputSuffixProps): React.ReactElement => {
  const classes = classnames('usa-input-suffix', className)

  return (
    <div
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputSuffix">
      {children}
    </div>
  )
}

export default InputSuffix
