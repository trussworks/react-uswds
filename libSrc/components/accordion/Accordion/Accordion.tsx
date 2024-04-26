import React, { useState } from 'react'
import classnames from 'classnames'
import AccordionItem, {
  type AccordionItemProps,
} from '../AccordionItem/AccordionItem.js'

export type AccordionProps = {
  bordered?: boolean
  multiselectable?: boolean
  items: AccordionItemProps[]
  className?: string
} & JSX.IntrinsicElements['div']

const Accordion = ({
  bordered,
  items,
  className,
  multiselectable = false,
  ...props
}: AccordionProps): React.ReactElement => {
  const [openItems, setOpenState] = useState(
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
    setOpenState(newOpenItems)
  }

  return (
    <div
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

export default Accordion
