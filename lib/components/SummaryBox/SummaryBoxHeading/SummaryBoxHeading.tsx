import React, { ReactNode } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel.js'

export type SummaryBoxHeadingProps = {
  children: ReactNode
  className?: string
  headingLevel: HeadingLevel
} & JSX.IntrinsicElements['h1']

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
