import React, { forwardRef } from 'react'
import AccordionItemButton, {
  AccordionItemButtonRef,
} from '../AccordionItemButton/AccordionItemButton'

import { HeadingLevel } from '../../../types/headingLevel'
import classnames from 'classnames'

export interface BaseAccordionItemHeadingProps {
  headingLevel: HeadingLevel
  className?: string
  itemId: string
  expanded?: boolean
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: React.ReactNode
  __buttonRef?: React.Ref<AccordionItemButtonRef>
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
> = (
  {
    className,
    expanded,
    itemId,
    headingLevel,
    handleToggle,
    title,
    __buttonRef,
    ...props
  },
  ref
) => {
  const Heading = headingLevel
  const classes = classnames('usa-accordion__heading', className)
  return (
    <Heading
      ref={ref}
      className={classes}
      {...props}
      data-testid={`accordionItemHeading_${itemId}`}>
      <AccordionItemButton
        ref={__buttonRef}
        itemId={itemId}
        expanded={expanded}
        onClick={handleToggle}>
        {title}
      </AccordionItemButton>
    </Heading>
  )
}

const AccordionItemHeading = forwardRef(AccordionItemHeadingForwardRef)

export default AccordionItemHeading
