import React from 'react'
import classnames from 'classnames'
import type { ProcessListItemProps } from '../ProcessListItem/ProcessListItem.js'

export interface BaseProcessListProps {
  className?: string
  children: React.ReactElement<ProcessListItemProps>[]
}

export type ProcessListProps = BaseProcessListProps &
  JSX.IntrinsicElements['ol']

const ProcessList = ({
  className,
  children,
  ...listProps
}: ProcessListProps): React.ReactElement => {
  const classes = classnames('usa-process-list', className)
  return (
    <ol className={classes} {...listProps}>
      {children}
    </ol>
  )
}

export default ProcessList
