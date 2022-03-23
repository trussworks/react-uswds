import React from 'react'
import classnames from 'classnames'

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
