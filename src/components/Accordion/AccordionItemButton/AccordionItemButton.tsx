import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseAccordionItemButtonProps {
  className?: string
  itemId: string
  expanded?: boolean
  children: React.ReactNode
}

export type AccordionItemButtonProps = React.ComponentPropsWithRef<
  typeof AccordionItemButton
>

export type AccordionItemButtonRef = React.ComponentRef<
  typeof AccordionItemButton
>

export const AccordionItemButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  BaseAccordionItemButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({ className, itemId, expanded, ...props }, ref) => {
  const classNames = classnames('usa-accordion__button', className)

  return (
    <button
      ref={ref}
      type="button"
      className={classNames}
      data-testid={`accordionButton_${itemId}`} // Kept the same from when inlined inside Accordion
      aria-expanded={expanded}
      aria-controls={itemId}
      {...props}
    />
  )
}

const AccordionItemButton = forwardRef(AccordionItemButtonForwardRef)

export default AccordionItemButton
