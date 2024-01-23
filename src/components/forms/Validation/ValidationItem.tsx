import React, { forwardRef } from 'react'
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

export const ValidationItemFowardRef: React.ForwardRefRenderFunction<HTMLLIElement, ValidationItemProps> = ({
  children,
  className,
  isValid,
  ...liProps
}, ref): React.ReactElement => {
  const classes = classnames(
    'usa-checklist__item',
    { 'usa-checklist__item--checked': isValid },
    className
  )

  return (
    <li ref={ref} className={classes} {...liProps}>
      {children}
    </li>
  )
}

export const ValidationItem = forwardRef(ValidationItemFowardRef)

export default ValidationItem
