import classnames from 'classnames'
import React from 'react'

export interface BasePaginationOverflowProps {}

export type PaginationOverflowProps = BasePaginationOverflowProps &
  JSX.IntrinsicElements['li']

const PaginationOverflow = ({
  className,
  ...props
}: PaginationOverflowProps) => {
  const classes = classnames(
    'usa-pagination__item usa-pagination__overflow',
    className
  )

  return (
    <li className={classes} role="presentation" {...props}>
      <span>…</span>
    </li>
  )
}

export default PaginationOverflow
