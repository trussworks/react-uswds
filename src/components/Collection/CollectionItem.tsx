import React from 'react'
import { CollectionItemBody } from './CollectionItemBody'

interface Topic {
  type: 'new' | 'default'
  label: string
}

interface CollectionItemProps {
  heading: string
  href: string
  description: string
  authors: string[]
  dateTime: string
  topics: Topic[]
}

export const CollectionItem = ({
  heading,
  href,
  description,
  authors,
  dateTime,
  topics,
}: CollectionItemProps): React.ReactElement => {
  return (
    <li className="usa-collection__item">
      <CollectionItemBody
        heading={heading}
        href={href}
        description={description}
        authors={authors}
        dateTime={dateTime}
        topics={topics}
      />
    </li>
  )
}
