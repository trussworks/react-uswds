import React from 'react'
import classnames from 'classnames'

export interface BaseValidationItemProps {
  children: React.ReactNode
  id: string
  isValid: boolean
}

export type ValidationItemProps = BaseValidationItemProps &
  JSX.IntrinsicElements['li']

const ValidationItem = ({
  children,
  className,
  isValid,
  ...liProps
}: ValidationItemProps): React.ReactElement => {
  const classes = classnames(
    'usa-checklist__item',
    { 'usa-checklist__item--checked': isValid },
    className
  )

  return (
    <li className={classes} {...liProps}>
      {children}
    </li>
  )
}

export default ValidationItem
