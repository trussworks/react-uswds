import React, { JSX } from 'react'
import classnames from 'classnames'
import { ProcessListItemProps } from '../ProcessListItem/ProcessListItem'

type ProcessListProps = {
  className?: string
  children: React.ReactElement<ProcessListItemProps>[]
}

export const ProcessList = ({
  className,
  children,
  ...listProps
}: ProcessListProps & JSX.IntrinsicElements['ol']): React.ReactElement => {
  const classes = classnames('usa-process-list', className)
  return (
    <ol className={classes} {...listProps}>
      {children}
    </ol>
  )
}

export default ProcessList
