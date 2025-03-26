import React, { type JSX } from 'react'
import classnames from 'classnames'

export type ProcessListItemProps = {
  className?: string
  children?: React.ReactNode
} & JSX.IntrinsicElements['li']

export const ProcessListItem = ({
  className,
  children,
  ...liProps
}: ProcessListItemProps): JSX.Element => {
  const liClasses = classnames('usa-process-list__item', className)
  return (
    <li className={liClasses} {...liProps}>
      {children}
    </li>
  )
}

export default ProcessListItem
