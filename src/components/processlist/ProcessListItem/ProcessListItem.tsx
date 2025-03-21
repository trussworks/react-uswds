import React, { type JSX } from 'react'
import classnames from 'classnames'

export interface ProcessListItemPropsInterface {
  className?: string
  children?: React.ReactNode
}

export type ProcessListItemProps = ProcessListItemPropsInterface &
  JSX.IntrinsicElements['li']

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
