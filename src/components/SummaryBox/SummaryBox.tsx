import React from 'react'

interface SummaryBoxProps {
  heading: string
  children?: React.ReactNode
  className?: string
}
export const SummaryBox = ({
  heading,
  children,
  ...props
}: SummaryBoxProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  return (
    <div className="usa-summary-box" {...props}>
      <div className="usa-summary-box__body">
        <h3 className="usa-summary-box__heading">{heading}</h3>
        {children}
      </div>
    </div>
  )
}

export default SummaryBox
