import React from 'react'
import classnames from 'classnames'

export interface ProcessListItemProps {
  className?: string
  children?: React.ReactNode
}

export const ProcessListItem = ({
  className,
  children,
  ...liProps
}: ProcessListItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
  const liClasses = classnames('usa-process-list__item', className)
  return (
    <li className={liClasses} {...liProps}>
      {children}
    </li>
  )
}

export default ProcessListItem
