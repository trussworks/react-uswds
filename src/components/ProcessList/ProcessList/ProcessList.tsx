import React from 'react'
import classnames from 'classnames'
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem'

export type ProcessListProps = {
  className?: string
  children: React.ReactElement<ProcessListItemProps>[]
} & JSX.IntrinsicElements['ol']

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
