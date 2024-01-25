import React, { forwardRef } from 'react'

import { HeadingLevel } from '../../../types/headingLevel'
import AccordionItemHeading, {
  AccordionItemHeadingProps,
} from '../AccordionItemHeading/AccordionItemHeading'
import AccordionItemButton, {
  AccordionItemButtonProps,
} from '../AccordionItemButton/AccordionItemButton'
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
  __buttonProps?: AccordionItemButtonProps
  __headingProps?: { itemId?: string } & Omit<
    AccordionItemHeadingProps,
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
    isOpen,
    headingLevel,
    handleToggle,
    children,
    __buttonProps,
    __headingProps,
    ...props
  },
  ref
): React.ReactElement => {
  return (
    <>
      <AccordionItemHeading
        headingLevel={headingLevel}
        itemId={id}
        {...__headingProps}>
        <AccordionItemButton
          itemId={id}
          isOpen={isOpen}
          onClick={handleToggle}
          {...__buttonProps}>
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemContent
        id={id}
        ref={ref}
        isOpen={isOpen ?? expanded}
        {...props}>
        {children ?? content}
      </AccordionItemContent>
    </>
  )
}

const AccordionItem = forwardRef(AccordionItemForwardRef)

export default AccordionItem
