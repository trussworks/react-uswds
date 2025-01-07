import React, { JSX } from 'react'
import classnames from 'classnames'

type ValidationItemProps = {
  children: React.ReactNode
  id: string
  isValid: boolean
}

export const ValidationItem = ({
  children,
  className,
  isValid,
  ...liProps
}: ValidationItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
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
