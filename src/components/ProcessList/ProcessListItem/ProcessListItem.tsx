import React from 'react'
import classnames from 'classnames'

export type ProcessListItemProps = {
  className?: string
  children?: React.ReactNode
} & JSX.IntrinsicElements['li']

const ProcessListItem = ({
  className,
  children,
  ...liProps
}: ProcessListItemProps): React.ReactElement => {
  const liClasses = classnames('usa-process-list__item', className)
  return (
    <li className={liClasses} {...liProps}>
      {children}
    </li>
  )
}

export default ProcessListItem
