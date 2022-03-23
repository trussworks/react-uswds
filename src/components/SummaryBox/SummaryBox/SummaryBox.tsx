import React from 'react'

import classnames from 'classnames'

interface SummaryBoxProps {
  heading: string
  children?: React.ReactNode
  className?: string
}

interface SummaryBoxHeadingProps {
  heading: string
  className?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const SummaryBoxHeading = ({
  heading,
  className,
  headingLevel,
  ...h3Props
}: SummaryBoxHeadingProps &
  JSX.IntrinsicElements['h3']): React.ReactElement => {
  const classes = classnames('usa-summary-box__heading', className)
  const Heading = headingLevel || 'h3'
  return (
    <Heading className={classes} {...h3Props}>
      {heading}
    </Heading>
  )
}

interface SummaryBoxTextProps {
  children?: React.ReactNode
  className?: string
}

export const SummaryBoxContent = ({
  children,
  className,
  ...divProps
}: SummaryBoxTextProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
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
