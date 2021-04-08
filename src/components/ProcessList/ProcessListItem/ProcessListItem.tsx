import React from 'react'
import classnames from 'classnames'

export interface ProcessListItemProps {
  heading: string
  className?: string
  headerClassName?: string
}

export const ProcessListItem = ({
  heading,
  className,
  headerClassName,
  ...liProps
}: ProcessListItemProps & JSX.IntrinsicElements['li']): React.ReactElement => {
  const liClasses = classnames('usa-process-list__item', className)
  const headerClasses = classnames('', headerClassName)
  return (
    <li className={liClasses} {...liProps}>
      {heading && <h4 className={headerClasses}>{heading}</h4>})
    </li>
  )
}

export default ProcessListItem
