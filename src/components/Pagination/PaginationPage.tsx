import React from 'react'
import classnames from 'classnames'
import Link from '../Link/Link'
import Button from '../Button/Button'

export type PaginationPageProps = {
  pathname: string
  page: number
  isCurrent?: boolean
  onClickPageNumber?: (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => void
}

const PaginationPage = ({
  page,
  isCurrent,
  pathname,
  onClickPageNumber,
}: PaginationPageProps) => {
  const linkClasses = classnames('usa-pagination__button', {
    'usa-current': isCurrent,
  })

  return (
    <li
      key={`pagination_page_${page}`}
      className="usa-pagination__item usa-pagination__page-no">
      {onClickPageNumber ? (
        <Button
          type="button"
          unstyled
          data-testid="pagination-page-number"
          className={linkClasses}
          aria-label={`Page ${page}`}
          aria-current={isCurrent ? 'page' : undefined}
          onClick={(event) => {
            onClickPageNumber(event, page)
          }}>
          {page}
        </Button>
      ) : (
        <Link
          href={`${pathname}?page=${page}`}
          className={linkClasses}
          aria-label={`Page ${page}`}
          aria-current={isCurrent ? 'page' : undefined}>
          {page}
        </Link>
      )}
    </li>
  )
}

export default PaginationPage
