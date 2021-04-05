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
  const bodyClasses = classnames('usa-summary-box__body')
  return (
    <div className={classes} role="complementary" {...props}>
      <div className={bodyClasses}>
        <h3 className="usa-summary-box__heading">{heading}</h3>
        {children}
      </div>
    </div>
  )
}

export default SummaryBox
