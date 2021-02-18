import React, { useState } from 'react'
import classnames from 'classnames'

interface AccordionItem {
  title: React.ReactNode | string
  content: React.ReactNode
  expanded: boolean
  id: string
  className?: string
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface AccordionProps {
  bordered?: boolean
  multiselectable?: boolean
  items: AccordionItem[]
  className?: string
}

export const AccordionItem = (props: AccordionItem): React.ReactElement => {
  const { title, id, content, expanded, className, handleToggle } = props

  const headingClasses = classnames('usa-accordion__heading', className)
  const contentClasses = classnames(
    'usa-accordion__content',
    'usa-prose',
    className
  )

  return (
    <>
      <h2 className={headingClasses}>
        <button
          type="button"
          className="usa-accordion__button"
          aria-expanded={expanded}
          aria-controls={id}
          data-testid={`accordionButton_${id}`}
          onClick={handleToggle}>
          {title}
        </button>
      </h2>
      <div
        id={id}
        data-testid={`accordionItem_${id}`}
        className={contentClasses}
        hidden={!expanded}>
        {content}
      </div>
    </>
  )
}

export const Accordion = (props: AccordionProps): React.ReactElement => {
  const { bordered, items, className, multiselectable } = props

  const [openItems, setOpenState] = useState(
    items.filter((i) => !!i.expanded).map((i) => i.id)
  )

  const classes = classnames(
    'usa-accordion',
    {
      'usa-accordion--bordered': bordered,
      'aria-multiselectable': multiselectable,
    },
    className
  )

  const toggleItem = (itemId: AccordionItem['id']): void => {
    const newOpenItems = [...openItems]
    console.log('newOpenItems: ', newOpenItems)
    const itemIndex = openItems.indexOf(itemId)
    const isMultiselectable = multiselectable

    if (itemIndex > -1) {
      // item is open, it EXISTS in the array, close it by removing it from openItems
      newOpenItems.splice(itemIndex, 1)
    } else {
      // item is closed and multiselectable is TRUE
      // we want to be able to toggle multiple items open
      // so we open item by adding it to openItems
      if (isMultiselectable) {
        newOpenItems.push(itemId)
      } else {
        // item is closed and multiselectable is FALSE
        // so we open item, adding it to openItems
        newOpenItems.push(itemId)
        // close all other openItems that are not the current item by removing them from the array
        // but how
      }
    }
    setOpenState(newOpenItems)
  }

  return (
    <div className={classes} data-testid="accordion">
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
