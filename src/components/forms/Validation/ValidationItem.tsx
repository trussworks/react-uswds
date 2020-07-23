import React from 'react'
import classnames from 'classnames'

interface ValidationItemProps {
  children: React.ReactNode
  validator: string // unique string representing validation concern- e.g. 'uppercase', 'numerical', 'length'
  isValid: boolean
}

export const ValidationItem = ({
  children,
  className,
  validator,
  isValid,
  ...liProps
}: ValidationItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
  const classes = classnames(
    'usa-checklist__item',
    { 'usa-checklist__item--checked': isValid },
    className
  )

  return (
    <li data-validator={validator} className={classes} {...liProps}>
      {children}
    </li>
  )
}

export default ValidationItem
