import React, { forwardRef, useState } from 'react'
import classnames from 'classnames'

import AccordionItem, {
  AccordionItemProps,
} from '../AccordionItem/AccordionItem'

export type BaseAccordionProps = {
  bordered?: boolean
  multiselectable?: boolean
  /**
   * `expanded` property only considered on initial render
   */
  items: Omit<AccordionItemProps, 'handleToggle'>[]
  className?: string
  __onChange?: (openIds: string[]) => void
}

export type AccordionProps = React.ComponentPropsWithRef<typeof Accordion>

export type AccordionRef = React.ComponentRef<typeof Accordion>

export const AccordionForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAccordionProps & React.ComponentPropsWithoutRef<'div'>
> = (
  { bordered, items, className, multiselectable = false, __onChange, ...props },
  ref
): React.ReactElement => {
  const [openItems, setOpenItems] = useState(
    items.filter((i) => !!i.expanded).map((i) => i.id)
  )

  const classes = classnames(
    'usa-accordion',
    {
      'usa-accordion--bordered': bordered,
    },
    className
  )

  const toggleItem = (itemId: AccordionItemProps['id']): void => {
    const newOpenItems = [...openItems]
    const itemIndex = openItems.indexOf(itemId)
    const isMultiselectable = multiselectable

    if (itemIndex > -1) {
      newOpenItems.splice(itemIndex, 1)
    } else {
      if (isMultiselectable) {
        newOpenItems.push(itemId)
      } else {
        newOpenItems.splice(0, newOpenItems.length)
        newOpenItems.push(itemId)
      }
    }
    setOpenItems(newOpenItems)
    __onChange?.(newOpenItems)
  }

  return (
    <div
      ref={ref}
      className={classes}
      data-testid="accordion"
      data-allow-multiple={multiselectable || undefined}
      {...props}>
      {items.map((item, i) => (
        <AccordionItem
          key={`accordionItem_${i}`}
          {...item}
          expanded={openItems.indexOf(item.id) > -1}
          handleToggle={(): void => {
            toggleItem(item.id)
          }}
        />
      ))}
    </div>
  )
}

const Accordion = forwardRef(AccordionForwardRef)

export default Accordion
