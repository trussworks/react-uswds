import React from 'react'
import { CollectionItemBody } from './CollectionItemBody'

interface Topic {
  type: 'new' | 'default'
  label: string
}

interface Thumbnail {
  src: string
  alt: string
}

interface ThumbnailCollectionItemProps {
  heading: string
  href: string
  description: string
  authors: string[]
  dateTime: string
  topics: Topic[]
  thumbnail: Thumbnail
}

export const ThumbnailCollectionItem = ({
  heading,
  href,
  description,
  authors,
  dateTime,
  topics,
  thumbnail,
}: ThumbnailCollectionItemProps): React.ReactElement => {
  return (
    <li className="usa-collection__item">
      <img
        className="usa-collection__img"
        src={thumbnail.src}
        alt={thumbnail.alt}
      />
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
