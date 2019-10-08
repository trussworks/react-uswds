import React, { useState } from 'react'
import classnames from 'classnames'

interface AccordionItem {
  title: React.ReactNode | string
  content: React.ReactNode
  expanded: boolean
  id: string
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface AccordionProps {
  bordered?: boolean
  items: AccordionItem[]
}

export const AccordionItem = (props: AccordionItem): React.ReactElement => {
  const { title, id, content, expanded, handleToggle } = props

  return (
    <>
      <h2 className="usa-accordion__heading">
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
        className="usa-accordion__content usa-prose"
        hidden={!expanded}>
        {content}
      </div>
    </>
  )
}

export const Accordion = (props: AccordionProps): React.ReactElement => {
  const { bordered, items } = props

  const [openItem, setOpenState] = useState(items[0].id)

  const classes = classnames('usa-accordion', {
    'usa-accordion--bordered': bordered,
  })

  return (
    <div className={classes} data-testid="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={`accordionItem_${i}`}
          {...item}
          expanded={openItem === item.id}
          handleToggle={(): void => {
            setOpenState(item.id)
          }}
        />
      ))}
    </div>
  )
}
