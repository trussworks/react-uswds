import React, { forwardRef } from 'react'

import { HeadingLevel } from '../../../types/headingLevel'
import AccordionItemHeading, {
  AccordionItemHeadingRef,
} from '../AccordionItemHeading/AccordionItemHeading'
import { AccordionItemButtonRef } from '../AccordionItemButton/AccordionItemButton'
import AccordionItemContent, {
  AccordionItemContentRef,
} from '../AccordionItemContent/AccordionItemContent'

export interface BaseAccordionItemProps {
  title: React.ReactNode
  /**
   * @deprecated Use children instead
   */
  content: React.ReactNode
  className?: string
  expanded?: boolean
  id: string
  headingLevel: HeadingLevel
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
  __buttonRef?: React.Ref<AccordionItemButtonRef>
  __headingRef?: React.Ref<AccordionItemHeadingRef>
}

export type AccordionItemProps = React.ComponentPropsWithRef<
  typeof AccordionItem
>

export type AccordionItemRef = React.ComponentRef<typeof AccordionItem>

export const AccordionItemForwardRef: React.ForwardRefRenderFunction<
  AccordionItemContentRef,
  BaseAccordionItemProps & Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>
> = (
  {
    title,
    id,
    content,
    expanded,
    headingLevel,
    handleToggle,
    children,
    __buttonRef,
    __headingRef,
    ...props
  },
  ref
): React.ReactElement => {
  return (
    <>
      <AccordionItemHeading
        ref={__headingRef}
        headingLevel={headingLevel}
        itemId={id}
        title={title}
        handleToggle={handleToggle}
        expanded={expanded}
        __buttonRef={__buttonRef}
      />
      <AccordionItemContent id={id} ref={ref} expanded={expanded} {...props}>
        {children ?? content}
      </AccordionItemContent>
    </>
  )
}

const AccordionItem = forwardRef(AccordionItemForwardRef)

export default AccordionItem
