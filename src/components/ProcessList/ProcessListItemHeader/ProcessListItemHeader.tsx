import React from 'react'
import classnames from 'classnames'

interface ProcessListItemHeaderProps {
  children: React.ReactNode
  headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph'
  className?: string
}

export const ProcessListItemHeader = ({
  children,
  headerType,
  className,
  ...props
}: ProcessListItemHeaderProps): React.ReactElement => {
  const classes = classnames('usa-process-list__heading', className)

  return (
    <h1 data-testid="listItemHeader" className={classes} {...props}>
      {children}
    </h1>
  )
}

export default ProcessListItemHeader
