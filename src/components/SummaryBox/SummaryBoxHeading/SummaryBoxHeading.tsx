import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

export interface BaseSummaryBoxHeadingProps {
  headingLevel: HeadingLevel
}

export type SummaryBoxHeadingProps = BaseSummaryBoxHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >

export const SummaryBoxHeading = ({
  children,
  className,
  headingLevel,
  ...h3Props
}: SummaryBoxHeadingProps): React.ReactElement => {
  const classes = classnames('usa-summary-box__heading', className)
  const Heading = headingLevel
  return (
    <Heading className={classes} {...h3Props}>
      {children}
    </Heading>
  )
}

export default SummaryBoxHeading
