import React from 'react'
import classnames from 'classnames'
import Link from '../../Link/Link.js'
import Button from '../../Button/Button.js'

export type PaginationPageProps = {
  pathname: string
  page: number
  isCurrent?: boolean
  onClickPageNumber?: (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => void
} & JSX.IntrinsicElements['li']

const PaginationPage = ({
  page,
  isCurrent,
  pathname,
  onClickPageNumber,
  className,
  ...props
}: PaginationPageProps) => {
  const classes = classnames(
    'usa-pagination__item usa-pagination__page-no',
    className
  )
  const linkClasses = classnames('usa-pagination__button', {
    'usa-current': isCurrent,
  })

  return (
    <li key={`pagination_page_${page}`} className={classes} {...props}>
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
