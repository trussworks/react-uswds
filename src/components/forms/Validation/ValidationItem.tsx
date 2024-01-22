import React from 'react'
import classnames from 'classnames'

export interface BaseValidationItemProps {
  isValid: boolean
}

export type RequiredValidationItemProps = Required<
  Pick<JSX.IntrinsicElements['li'], 'children' | 'id'>
>

export type ValidationItemProps = BaseValidationItemProps &
  RequiredValidationItemProps &
  Omit<JSX.IntrinsicElements['li'], 'children' | 'id'>

export const ValidationItem = ({
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
