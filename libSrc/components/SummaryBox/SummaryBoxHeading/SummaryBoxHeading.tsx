import React, { type ReactNode } from 'react'
import classnames from 'classnames'
import type { HeadingLevel } from '../../../types/headingLevel.js'

export interface BaseSummaryBoxHeadingProps {
  children: ReactNode
  className?: string
  headingLevel: HeadingLevel
}

export type SummaryBoxHeadingProps = BaseSummaryBoxHeadingProps &
  JSX.IntrinsicElements['h1']

const SummaryBoxHeading = ({
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
