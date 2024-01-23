import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem'

export type BaseProcessListProps = {
  children: React.ReactElement<ProcessListItemProps>[]
}

export type ProcessListProps = BaseProcessListProps &
  JSX.IntrinsicElements['ol']

export const ProcessListForwardRef: React.ForwardRefRenderFunction<HTMLOListElement, ProcessListItemProps> = ({
  className,
  children,
  ...listProps
}, ref): React.ReactElement => {
  const classes = classnames('usa-process-list', className)
  return (
    <ol ref={ref} className={classes} {...listProps}>
      {children}
    </ol>
  )
}

export const ProcessList = forwardRef(ProcessListForwardRef)

export default ProcessList
