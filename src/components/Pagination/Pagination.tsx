/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import classnames from 'classnames'
import { IconNavigateBefore, IconNavigateNext } from '../Icon/Icons'

export interface PaginationProps {
  id: string
  className?: string
  previousClassName?: string
  nextClassName?: string
  pageClassName?: string
  totalPageCount: number
  initialSelected?: number
  onPageChange?: (args: { selected: number }) => void
}

export const Pagination = ({
  id,
  className,
  previousClassName,
  nextClassName,
  pageClassName,
  totalPageCount,
  initialSelected = 0,
  onPageChange,
}: PaginationProps): React.ReactElement => {
  const [selected, setSelected] = useState(initialSelected)
  const pageRangeDisplayed = 3
  const totalSlots = 7

  const paginationClasses = classnames('usa-pagination', className)
  const nextClasses = classnames(
    'usa-pagination__link',
    'usa-pagination__next-page',
    nextClassName
  )
  const prevClasses = classnames(
    'usa-pagination__link',
    'usa-pagination__previous-page',
    previousClassName
  )

  const getPageElement = (index: number) => {
    const page = index + 1
    const linkClassNames = classnames(
      'usa-pagination__button',
      {
        'usa-current': index == selected,
      },
      pageClassName
    )
    const ariaLabel =
      page == totalPageCount ? `last page, page ${page}` : `Page ${page}`
    return (
      <li key={index} className="usa-pagination__item usa-pagination__page-no">
        <a
          href={void 0}
          className={linkClassNames}
          aria-label={ariaLabel}
          aria-current={index == selected ? 'page' : undefined}
          onClick={() => handlePageSelect(index)}
          tabIndex={0}
        >
          {page}
        </a>
      </li>
    )
  }

  const getBreakElement = (index: number) => {
    const breakClasses = classnames(
      'usa-pagination__item',
      'usa-pagination__overflow'
    )

    return (
      <li key={index} className={breakClasses} role="presentation">
        <span> ... </span>
      </li>
    )
  }

  const pagination = () => {
    const paginationItems = []

    if (totalPageCount <= totalSlots) {
      for (let i = 0; i < totalPageCount; i++) {
        paginationItems.push(getPageElement(i))
      }
    } else {
      let leftSide = pageRangeDisplayed / 2
      let rightSide = pageRangeDisplayed - leftSide

      // If the selected element is at the beginning of the set, show extra pages to the right
      // If the selected element is at the end of the set, show extra pages to the left
      if (selected > totalPageCount - 4) {
        rightSide = totalPageCount - selected
        leftSide = pageRangeDisplayed - rightSide + 2
      } else if (selected < 3) {
        leftSide = selected
        rightSide = pageRangeDisplayed - leftSide + 1
      }

      // Determine if page or break
      let breakView
      const pageOrBreak: {
        type: string
        index: number
        display: JSX.Element
      }[] = []
      for (let index = 0; index < totalPageCount; index++) {
        const page = index + 1

        // Always push the first and last page
        if (page == 1 || page == totalPageCount) {
          pageOrBreak.push({
            type: 'page',
            index,
            display: getPageElement(index),
          })
          continue
        }

        // Add pages to the left and right of the selected page
        if (index >= selected - leftSide && index <= selected + rightSide) {
          pageOrBreak.push({
            type: 'page',
            index,
            display: getPageElement(index),
          })
          continue
        }

        // Add a break if the previous item added was not a break
        if (
          pageRangeDisplayed > 0 &&
          pageOrBreak.length > 0 &&
          pageOrBreak[pageOrBreak.length - 1].display !== breakView
        ) {
          breakView = getBreakElement(index)
          pageOrBreak.push({ type: 'break', index, display: breakView })
        }
      }
      // Replace breaks containing one page to the actual page.
      pageOrBreak.forEach((pageElement, i) => {
        let pageElementToAdd = pageElement
        if (
          pageElement.type === 'break' &&
          pageOrBreak[i - 1] &&
          pageOrBreak[i - 1].type === 'page' &&
          pageOrBreak[i + 1] &&
          pageOrBreak[i + 1].type === 'page' &&
          pageOrBreak[i + 1].index - pageOrBreak[i - 1].index <= 2
        ) {
          pageElementToAdd = {
            type: 'page',
            index: pageElement.index,
            display: getPageElement(pageElement.index),
          }
        }
        paginationItems.push(pageElementToAdd.display)
      })
    }
    return paginationItems
  }

  const handleNext = () => {
    if (selected < totalPageCount - 1) {
      const nextPage = selected + 1
      setSelected(nextPage)
      callCallback(nextPage)
    }
  }

  const handlePrev = () => {
    if (selected > 0) {
      const prevPage = selected - 1
      setSelected(prevPage)
      callCallback(prevPage)
    }
  }

  const handlePageSelect = (index: number) => {
    if (index > -1 && index < totalPageCount) {
      setSelected(index)
      callCallback(index)
    }
  }

  const callCallback = (index: number) => {
    if (onPageChange !== undefined && typeof onPageChange === 'function') {
      onPageChange({ selected: index })
    }
  }

  return (
    <nav
      id={id}
      data-testid={id}
      aria-label={`${id} pagination`}
      className={paginationClasses}
    >
      <ul className="usa-pagination__list">
        {selected > 0 ? (
          <li key="prev" className="usa-pagination__item usa-pagination__arrow">
            <a
              href={void 0}
              className={prevClasses}
              aria-label="Previous page"
              onClick={handlePrev}
              tabIndex={0}
            >
              <IconNavigateBefore />
              <span className="usa-pagination__link-text"> Previous </span>
            </a>
          </li>
        ) : null}
        {pagination()}
        {selected < totalPageCount - 1 ? (
          <li key="next" className="usa-pagination__item usa-pagination__arrow">
            <a
              href={void 0}
              className={nextClasses}
              aria-label="Next page"
              onClick={handleNext}
              tabIndex={0}
            >
              <span className="usa-pagination__link-text"> Next </span>

              <IconNavigateNext />
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Pagination
