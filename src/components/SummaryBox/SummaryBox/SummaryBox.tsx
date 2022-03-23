import React from 'react'

import classnames from 'classnames'
import { SummaryBoxContent } from '../SummaryBoxContent/SummaryBoxContent'
import { SummaryBoxHeading } from '../SummaryBoxHeading/SummaryBoxHeading'

interface SummaryBoxProps {
  heading: string
  children?: React.ReactNode
  className?: string
}

export const SummaryBox = ({
  heading,
  children,
  className,
  ...divProps
}: SummaryBoxProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div className={classes} data-testid="summary-box" {...divProps}>
      <div className="usa-summary-box__body">
        <SummaryBoxHeading heading={heading} />
        <SummaryBoxContent>{children}</SummaryBoxContent>
      </div>
    </div>
  )
}

export default SummaryBox
