import React, { type JSX } from 'react'
import classnames from 'classnames'

export type ValidationItemProps = {
  children: React.ReactNode
  id: string
  isValid: boolean
} & JSX.IntrinsicElements['li']

export const ValidationItem = ({
  children,
  className,
  isValid,
  ...liProps
}: ValidationItemProps): JSX.Element => {
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
