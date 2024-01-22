import React from 'react'
import classnames from 'classnames'
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem'

export type BaseProcessListProps = {
  children: React.ReactElement<ProcessListItemProps>[]
}

export type ProcessListProps = BaseProcessListProps &
  JSX.IntrinsicElements['ol']

export const ProcessList = ({
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
