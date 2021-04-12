import React from 'react'
import classnames from 'classnames'

interface Topic {
  type: 'new' | 'default'
  label: string
}

export interface CollectionItemBodyProps {
  heading: string
  href: string
  description?: string
  authors?: string[]
  dateTime?: string
  topics?: Topic[]
}

const MONTH_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const CollectionItemBody = ({
  heading,
  href,
  description,
  authors = [],
  dateTime = '',
  topics = [],
}: CollectionItemBodyProps): React.ReactElement => {
  const authorsList = [
    authors.slice(0, -1).join(', '),
    authors.slice(-1)[0],
  ].join(authors.length >= 2 ? ' and ' : '')
  const dateObj = new Date(dateTime)
  let formattedDate = ''
  if (dateObj && dateObj.getTime && !isNaN(dateObj.getTime())) {
    formattedDate = `${
      MONTH_LABELS[dateObj.getMonth()]
    } ${dateObj.getDate()}, ${dateObj.getFullYear()}`
  }

  return (
    <div className="usa-collection__body" data-testid="collection-body">
      <h3 className="usa-collection__heading">
        <a className="usa-link" href={href}>
          {heading}
        </a>
      </h3>
      {description && (
        <p
          className="usa-collection__description"
          data-testid="collection-description">
          {description}
        </p>
      )}
      {authors.length > 0 && formattedDate && (
        <ul className="usa-collection__meta" aria-label="More Information">
          {authors.length > 0 && (
            <li
              className="usa-collection__meta-item"
              data-testid="collection-authors">
              {`By ${authorsList}`}
            </li>
          )}
          {formattedDate && (
            <li
              className="usa-collection__meta-item"
              data-testid="collection-date">
              <time dateTime={dateTime}>{formattedDate}</time>
            </li>
          )}
        </ul>
      )}
      {topics.length > 0 && (
        <ul className="usa-collection__meta" aria-label="Topics">
          {topics.map((tag) => (
            <li
              key={tag.label}
              className={classnames('usa-collection__meta-item', 'usa-tag', {
                'usa-tag--new': tag.type === 'new',
              })}>
              {tag.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
