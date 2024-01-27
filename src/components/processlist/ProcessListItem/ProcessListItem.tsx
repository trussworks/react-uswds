import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type ProcessListItemProps = JSX.IntrinsicElements['li']

export const ProcessListItemForwardRef: React.ForwardRefRenderFunction<
  HTMLLIElement,
  ProcessListItemProps
> = ({ className, children, ...liProps }, ref): React.ReactElement => {
  const liClasses = classnames('usa-process-list__item', className)
  return (
    <li ref={ref} className={liClasses} {...liProps}>
      {children}
    </li>
  )
}

const ProcessListItem = forwardRef(ProcessListItemForwardRef)

export default ProcessListItem
