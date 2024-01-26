import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseAccordionButtonProps {
  className?: string
  itemId: string
  isOpen?: boolean
  children: React.ReactNode
}

export type AccordionButtonProps = React.ComponentPropsWithRef<
  typeof AccordionButton
>

export type AccordionButtonRef = React.ComponentRef<typeof AccordionButton>

export const AccordionButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  BaseAccordionButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({ className, itemId, isOpen, ...props }, ref) => {
  const classNames = classnames('usa-accordion__button', className)

  return (
    <button
      ref={ref}
      type="button"
      className={classNames}
      data-testid={`accordionButton_${itemId}`} // Kept the same from when inlined inside Accordion
      aria-expanded={isOpen}
      aria-controls={itemId}
      {...props}
    />
  )
}

const AccordionButton = forwardRef(AccordionButtonForwardRef)

export default AccordionButton
