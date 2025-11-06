import React, { type JSX, ReactNode } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

export type SummaryBoxHeadingProps = {
  children: ReactNode
  className?: string
  headingLevel: HeadingLevel
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export const SummaryBoxHeading = ({
  children,
  className,
  headingLevel,
  ...h3Props
}: SummaryBoxHeadingProps): JSX.Element => {
  const classes = classnames('usa-summary-box__heading', className)
  const Heading = headingLevel
  return (
    <Heading className={classes} {...h3Props}>
      {children}
    </Heading>
  )
}

export default SummaryBoxHeading
