import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../../types/headingLevel.js'
import AccordionButton from '../AccordionButton/AccordionButton.js'

export interface AccordionItemProps {
  title: React.ReactNode | string
  content: React.ReactNode
  expanded: boolean
  id: string
  className?: string
  headingLevel: HeadingLevel
  handleToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AccordionItem = ({
  title,
  id,
  content,
  expanded,
  className,
  headingLevel,
  handleToggle,
}: AccordionItemProps): React.ReactElement => {
  const headingClasses = classnames('usa-accordion__heading', className)
  const contentClasses = classnames(
    'usa-accordion__content',
    'usa-prose',
    className
  )

  const Heading = headingLevel

  return (
    <>
      <Heading className={headingClasses}>
        <AccordionButton expanded={expanded} id={id} onClick={handleToggle}>
          {title}
        </AccordionButton>
      </Heading>
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

export default AccordionItem
