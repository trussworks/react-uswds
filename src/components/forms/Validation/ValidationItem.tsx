import React from 'react'
import classnames from 'classnames'

type ValidationItemProps = {
  children: React.ReactNode
  id: string
  isValid: boolean
  dataValidationIncomplete?: string
  dataValidationComplete?: string
}

export const ValidationItem = ({
  children,
  className,
  isValid,
  dataValidationIncomplete = '',
  dataValidationComplete = '',
  ...liProps
}: ValidationItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
  const classes = classnames(
    'usa-checklist__item',
    { 'usa-checklist__item--checked': isValid },
    className
  )

  const customAriaLabel = isValid
    ? dataValidationComplete
    : dataValidationIncomplete

  const ariaLabel = `${children} status ${isValid ? 'complete' : 'incomplete'}`

  return (
    <li
      className={classes}
      {...liProps}
      aria-label={liProps['aria-label'] || customAriaLabel || ariaLabel}>
      {children}
    </li>
  )
}

export default ValidationItem
