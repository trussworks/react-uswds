import React, { forwardRef } from 'react'

import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

export interface BaseAccordionHeadingProps {
  headingLevel: HeadingLevel
  className?: string
  itemId: string
}

export type AccordionHeadingProps = React.ComponentPropsWithRef<
  typeof AccordionHeading
>

export type AccordionHeadingRef = React.ComponentRef<typeof AccordionHeading>

export const AccordionHeadingForwardRef: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  BaseAccordionHeadingProps &
    Omit<React.ComponentPropsWithoutRef<'h1'>, 'title'>
> = ({ className, headingLevel, itemId, ...props }, ref) => {
  const Heading = headingLevel
  const classes = classnames('usa-accordion__heading', className)
  return (
    <Heading
      ref={ref}
      className={classes}
      {...props}
      data-testid={`accordionHeading_${itemId}`}
    />
  )
}

const AccordionHeading = forwardRef(AccordionHeadingForwardRef)

export default AccordionHeading
