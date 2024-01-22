import React from 'react'
import classnames from 'classnames'

export type ProcessListItemProps = JSX.IntrinsicElements['li']

export const ProcessListItem = ({
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
