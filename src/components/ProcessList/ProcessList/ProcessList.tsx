import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem'

export type BaseProcessListProps = {
  children: React.ReactElement<ProcessListItemProps>[]
}

export type ProcessListProps = React.ComponentPropsWithRef<typeof ProcessList>

export type ProcessListRef = React.ComponentRef<typeof ProcessList>

export const ProcessListForwardRef: React.ForwardRefRenderFunction<
  HTMLOListElement,
  BaseProcessListProps & React.ComponentPropsWithoutRef<'ol'>
> = ({ className, children, ...listProps }, ref): React.ReactElement => {
  const classes = classnames('usa-process-list', className)
  return (
    <ol ref={ref} className={classes} {...listProps}>
      {children}
    </ol>
  )
}

const ProcessList = forwardRef(ProcessListForwardRef)

export default ProcessList
