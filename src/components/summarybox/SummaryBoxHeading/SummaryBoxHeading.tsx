import React, { forwardRef } from 'react'
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

export const SummaryBoxHeadingForwardRef: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  SummaryBoxHeadingProps
> = (
  { children, className, headingLevel, ...h3Props },
  ref
): React.ReactElement => {
  const classes = classnames('usa-summary-box__heading', className)
  const Heading = headingLevel
  return (
    <Heading ref={ref} className={classes} {...h3Props}>
      {children}
    </Heading>
  )
}

const SummaryBoxHeading = forwardRef(SummaryBoxHeadingForwardRef)

export default SummaryBoxHeading
