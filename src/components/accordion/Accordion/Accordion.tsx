import React, { forwardRef, useMemo, useState } from 'react'

import AccordionItem, {
  AccordionItemProps,
} from '../AccordionItem/AccordionItem'
import AccordionBase, {
  AccordionBaseRef,
  AccordionBaseProps,
} from '../AccordionBase/AccordionBase'

export interface BaseAccordionProps {
  multiselectable?: boolean
  /**
   * `expanded` property in `items` only considered on initial render
   */
  items: Omit<AccordionItemProps, 'handleToggle'>[]
  className?: string
  __onChange?: (openIds: string[]) => void
}

export type AccordionProps = React.ComponentPropsWithRef<typeof Accordion>

export type AccordionRef = React.ComponentRef<typeof Accordion>

export const AccordionForwardRef: React.ForwardRefRenderFunction<
  AccordionBaseRef,
  BaseAccordionProps & React.PropsWithoutRef<AccordionBaseProps>
> = (
  { items, multiselectable = false, __onChange, ...props },
  ref
): React.ReactElement => {
  // not needed once expanded property removed
  const fixedItems = useMemo(
    () =>
      items.map(({ expanded, isOpen, ...i }) => ({
        ...i,
        isOpen: isOpen ?? expanded,
      })),
    [items]
  )

  const [openItems, setOpenItems] = useState(
    fixedItems.filter((i) => !!i.isOpen).map((i) => i.id)
  )
  const toggleItem = (itemId: string): void => {
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
    <AccordionBase
      ref={ref}
      data-allow-multiple={multiselectable || undefined}
      {...props}>
      {fixedItems.map((item, i) => (
        <AccordionItem
          key={`accordionItem_${i}`}
          {...item}
          isOpen={openItems.indexOf(item.id) > -1}
          handleToggle={(): void => {
            toggleItem(item.id)
          }}
        />
      ))}
    </AccordionBase>
  )
}

const Accordion = forwardRef(AccordionForwardRef)

export default Accordion
