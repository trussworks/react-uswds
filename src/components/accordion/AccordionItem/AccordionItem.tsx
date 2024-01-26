import React, { forwardRef } from 'react'

import { HeadingLevel } from '../../../types/headingLevel'
import AccordionHeading, {
  AccordionHeadingProps,
} from '../AccordionHeading/AccordionHeading'
import AccordionButton, {
  AccordionButtonProps,
} from '../AccordionButton/AccordionButton'
import AccordionItemContent, {
  AccordionItemContentRef,
} from '../AccordionItemContent/AccordionItemContent'

export interface BaseAccordionItemProps {
  title: React.ReactNode
  /**
   * @deprecated Use `children` instead
   */
  content?: React.ReactNode
  className?: string
  /**
   * @deprecated Use `isOpen` instead
   */
  expanded?: boolean
  isOpen?: boolean
  id: string
  headingLevel: HeadingLevel
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonProps?: AccordionButtonProps
  headingProps?: { itemId?: string } & Omit<
    AccordionHeadingProps,
    'itemId' | 'headingLevel'
  >
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
    isOpen = expanded,
    headingLevel,
    handleToggle,
    children,
    buttonProps,
    headingProps,
    ...props
  },
  ref
): React.ReactElement => {
  return (
    <>
      <AccordionHeading
        headingLevel={headingLevel}
        itemId={id}
        {...headingProps}>
        <AccordionButton
          itemId={id}
          isOpen={isOpen}
          onClick={handleToggle}
          {...buttonProps}>
          {title}
        </AccordionButton>
      </AccordionHeading>
      <AccordionItemContent id={id} ref={ref} isOpen={isOpen} {...props}>
        {children ?? content}
      </AccordionItemContent>
    </>
  )
}

const AccordionItem = forwardRef(AccordionItemForwardRef)

export default AccordionItem
