import React from 'react'
import classnames from 'classnames'

interface ProcessListItemHeaderProps {
  children: React.ReactNode
  // variant?:
  //   | 'heading1'
  //   | 'heading2'
  //   | 'heading3'
  //   | 'heading4'
  //   | 'heading5'
  //   | 'heading6'
  //   | 'paragraph'
  className?: string
}

export const ProcessListItemHeader = ({
  children,
  // variant,
  className,
  ...props
}: ProcessListItemHeaderProps): React.ReactElement => {
  const classes = classnames('usa-process-list__heading', className)

  // switch (variant) {
  //   case 'heading1':
  //     return (
  //       <h1 data-testid="listItemHeader" className={classes} {...props}>
  //         {children}
  //       </h1>
  //     )
  //   case 'heading2':
  //     return (
  //       <h2 data-testid="listItemHeader" className={classes} {...props}>
  //         {children}
  //       </h2>
  //     )
  //   case 'heading3':
  //     return (
  //       <h3 data-testid="listItemHeader" className={classes} {...props}>
  //         {children}
  //       </h3>
  //     )
  // }

  return (
    <h1 data-testid="listItemHeader" className={classes} {...props}>
      {children}
    </h1>
  )
}

export default ProcessListItemHeader
