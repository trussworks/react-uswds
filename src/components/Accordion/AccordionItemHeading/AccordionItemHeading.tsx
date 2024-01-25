import React, { forwardRef } from 'react'

import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel'

export interface BaseAccordionItemHeadingProps {
  headingLevel: HeadingLevel
  className?: string
  itemId: string
}

export type AccordionItemHeadingProps = React.ComponentPropsWithRef<
  typeof AccordionItemHeading
>

export type AccordionItemHeadingRef = React.ComponentRef<
  typeof AccordionItemHeading
>

export const AccordionItemHeadingForwardRef: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  BaseAccordionItemHeadingProps &
    Omit<React.ComponentPropsWithoutRef<'h1'>, 'title'>
> = ({ className, headingLevel, itemId, ...props }, ref) => {
  const Heading = headingLevel
  const classes = classnames('usa-accordion__heading', className)
  return (
    <Heading
      ref={ref}
      className={classes}
      {...props}
      data-testid={`accordionItemHeading_${itemId}`}
    />
  )
}

const AccordionItemHeading = forwardRef(AccordionItemHeadingForwardRef)

export default AccordionItemHeading
