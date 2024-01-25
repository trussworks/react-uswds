import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseAccordionItemContentProps {
  className?: string
  expanded?: boolean
  id: string
}

export type AccordionItemContentProps = React.ComponentPropsWithRef<
  typeof AccordionItemContent
>

export type AccordionItemContentRef = React.ComponentRef<
  typeof AccordionItemContent
>

export const AccordionItemContentForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAccordionItemContentProps & React.ComponentPropsWithoutRef<'div'>
> = ({ className, id, expanded, ...props }, ref) => {
  const classes = classnames('usa-accordion__content', 'usa-prose', className)

  return (
    <div
      ref={ref}
      id={id}
      data-testid={`accordionItem_${id}`} // Kept the same from when inlined inside Accordion
      className={classes}
      hidden={!expanded}
      {...props}
    />
  )
}

const AccordionItemContent = forwardRef(AccordionItemContentForwardRef)

export default AccordionItemContent
