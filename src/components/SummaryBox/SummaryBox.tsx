import React from 'react'

import classnames from 'classnames'

interface SummaryBoxProps {
  heading: string
  children?: React.ReactNode
  className?: string
}

export const SummaryBox = ({
  heading,
  children,
  className,
  ...props
}: SummaryBoxProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div className={classes} {...props}>
      <div className="usa-summary-box__body">
        <h3 className="usa-summary-box__heading">{heading}</h3>
        {children}
      </div>
    </div>
  )
}

export default SummaryBox
