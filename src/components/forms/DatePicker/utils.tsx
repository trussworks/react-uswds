import React, { KeyboardEvent } from 'react'

import { DEFAULT_EXTERNAL_DATE_FORMAT, INTERNAL_DATE_FORMAT } from './constants'

/**
 * This file contains the USWDS DatePicker date manipulation functions converted to TypeScript
 */

/**
 * Keep date within month. Month would only be over by 1 to 3 days
 *
 * @param {Date} dateToCheck the date object to check
 * @param {number} month the correct month
 * @returns {Date} the date, corrected if needed
 */
export const keepDateWithinMonth = (dateToCheck: Date, month: number): Date => {
  if (month !== dateToCheck.getMonth()) {
    dateToCheck.setDate(0)
  }

  return dateToCheck
}

/**
 * Set date from month day year
 *
 * @param {number} year the year to set
 * @param {number} month the month to set (zero-indexed)
 * @param {number} date the date to set
 * @returns {Date} the set date
 */
export const setDate = (year: number, month: number, date: number): Date => {
  const newDate = new Date(0)
  newDate.setFullYear(year, month, date)
  return newDate
}

/**
 * todays date
 *
 * @returns {Date} todays date
 */
export const today = (): Date => {
  const newDate = new Date()
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  return setDate(year, month, day)
}

/**
 * Set date to first day of the month
 *
 * @param {Date} date the date to adjust
 * @returns {Date} the adjusted date
 */
export const startOfMonth = (date: Date): Date => {
  const newDate = new Date(0)
  newDate.setFullYear(date.getFullYear(), date.getMonth(), 1)
  return newDate
}

/**
 * Set date to last day of the month
 *
 * @param {number} date the date to adjust
 * @returns {Date} the adjusted date
 */
export const lastDayOfMonth = (date: Date): Date => {
  const newDate = new Date(0)
  newDate.setFullYear(date.getFullYear(), date.getMonth() + 1, 0)
  return newDate
}

/**
 * Add days to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
export const addDays = (date: Date, numDays: number): Date => {
  const newDate = new Date(date.getTime())
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

/**
 * Subtract days from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
export const subDays = (date: Date, numDays: number): Date =>
  addDays(date, -numDays)

/**
 * Add weeks to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export const addWeeks = (date: Date, numWeeks: number): Date =>
  addDays(date, numWeeks * 7)

/**
 * Subtract weeks from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export const subWeeks = (date: Date, numWeeks: number): Date =>
  addWeeks(date, -numWeeks)

/**
 * Set date to the start of the week (Sunday)
 *
 * @param {Date} _date the date to adjust
 * @returns {Date} the adjusted date
 */
export const startOfWeek = (date: Date): Date => {
  const dayOfWeek = date.getDay()
  return subDays(date, dayOfWeek)
}

/**
 * Set date to the end of the week (Saturday)
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export const endOfWeek = (date: Date): Date => {
  const dayOfWeek = date.getDay()
  return addDays(date, 6 - dayOfWeek)
}

/**
 * Add months to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
export const addMonths = (date: Date, numMonths: number): Date => {
  const newDate = new Date(date.getTime())
  const dateMonth = (newDate.getMonth() + 12 + numMonths) % 12
  newDate.setMonth(newDate.getMonth() + numMonths)
  keepDateWithinMonth(newDate, dateMonth)
  return newDate
}

/**
 * Subtract months from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
export const subMonths = (date: Date, numMonths: number): Date =>
  addMonths(date, -numMonths)

/**
 * Add years to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
export const addYears = (date: Date, numYears: number): Date =>
  addMonths(date, numYears * 12)

/**
 * Subtract years from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
export const subYears = (date: Date, numYears: number): Date =>
  addYears(date, -numYears)

/**
 * Set months of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} month zero-indexed month to set
 * @returns {Date} the adjusted date
 */
export const setMonth = (date: Date, month: number): Date => {
  const newDate = new Date(date.getTime())
  newDate.setMonth(month)
  keepDateWithinMonth(newDate, month)
  return newDate
}

/**
 * Set year of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} year the year to set
 * @returns {Date} the adjusted date
 */
export const setYear = (date: Date, year: number): Date => {
  const newDate = new Date(date.getTime())
  const month = newDate.getMonth()
  newDate.setFullYear(year)
  keepDateWithinMonth(newDate, month)
  return newDate
}

/**
 * Return the earliest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the earliest date
 */
export const min = (dateA: Date, dateB: Date): Date => {
  let newDate = dateA
  if (dateB < dateA) {
    newDate = dateB
  }
  return new Date(newDate.getTime())
}

/**
 * Return the latest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the latest date
 */
export const max = (dateA: Date, dateB: Date): Date => {
  let newDate = dateA
  if (dateB > dateA) {
    newDate = dateB
  }
  return new Date(newDate.getTime())
}

/**
 * Check if dates are the in the same year
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same year
 */
export const isSameYear = (dateA: Date, dateB: Date): boolean => {
  return dateA && dateB && dateA.getFullYear() === dateB.getFullYear()
}

/**
 * Check if dates are the in the same month
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same month
 */
export const isSameMonth = (dateA: Date, dateB: Date): boolean => {
  return isSameYear(dateA, dateB) && dateA.getMonth() === dateB.getMonth()
}

/**
 * Check if dates are the same date
 *
 * @param {Date} dateA the date to compare
 * @param {Date} dateA the date to compare
 * @returns {boolean} are dates the same date
 */
export const isSameDay = (dateA: Date, dateB: Date): boolean => {
  return isSameMonth(dateA, dateB) && dateA.getDate() === dateB.getDate()
}

/**
 * return a new date within minimum and maximum date
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @returns {Date} the date between min and max
 */
export const keepDateBetweenMinAndMax = (
  date: Date,
  minDate: Date,
  maxDate?: Date
): Date => {
  let newDate = date

  if (date < minDate) {
    newDate = minDate
  } else if (maxDate && date > maxDate) {
    newDate = maxDate
  }

  return new Date(newDate.getTime())
}

/**
 * Check if dates is valid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is there a day within the month within min and max dates
 */
export const isDateWithinMinAndMax = (
  date: Date,
  minDate: Date,
  maxDate?: Date
): boolean => date >= minDate && (!maxDate || date <= maxDate)

/**
 * Check if dates month is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
export const isDatesMonthOutsideMinOrMax = (
  date: Date,
  minDate: Date,
  maxDate?: Date
): boolean => {
  return (
    lastDayOfMonth(date) < minDate ||
    (!!maxDate && startOfMonth(date) > maxDate)
  )
}

/**
 * Check if dates year is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
export const isDatesYearOutsideMinOrMax = (
  date: Date,
  minDate: Date,
  maxDate?: Date
): boolean => {
  return (
    lastDayOfMonth(setMonth(date, 11)) < minDate ||
    (!!maxDate && startOfMonth(setMonth(date, 0)) > maxDate)
  )
}

/**
 * Parse a date with format M-D-YY
 *
 * @param {string} dateString the date string to parse
 * @param {string} dateFormat the format of the date string
 * @param {boolean} adjustDate should the date be adjusted
 * @returns {Date} the parsed date
 */
export const parseDateString = (
  dateString: string,
  dateFormat: string = INTERNAL_DATE_FORMAT,
  adjustDate = false
): Date | undefined => {
  let date
  let month
  let day
  let year
  let parsed

  if (dateString) {
    let monthStr, dayStr, yearStr

    if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
      ;[monthStr, dayStr, yearStr] = dateString.split('/')
    } else {
      ;[yearStr, monthStr, dayStr] = dateString.split('-')
    }

    if (yearStr) {
      parsed = parseInt(yearStr, 10)
      if (!Number.isNaN(parsed)) {
        year = parsed
        if (adjustDate) {
          year = Math.max(0, year)
          if (yearStr.length < 3) {
            const currentYear = today().getFullYear()
            const currentYearStub =
              currentYear - (currentYear % 10 ** yearStr.length)
            year = currentYearStub + parsed
          }
        }
      }
    }

    if (monthStr) {
      parsed = parseInt(monthStr, 10)
      if (!Number.isNaN(parsed)) {
        month = parsed
        if (adjustDate) {
          month = Math.max(1, month)
          month = Math.min(12, month)
        }
      }
    }

    if (month && dayStr && year != null) {
      parsed = parseInt(dayStr, 10)
      if (!Number.isNaN(parsed)) {
        day = parsed
        if (adjustDate) {
          const lastDayOfMonth = setDate(year, month, 0).getDate()
          day = Math.max(1, day)
          day = Math.min(lastDayOfMonth, day)
        }
      }
    }

    if (month && day && year != null) {
      date = setDate(year, month - 1, day)
    }
  }

  return date
}

/**
 * Format a date to format YYYY-MM-DD
 *
 * @param {Date} date the date to format
 * @param {string} dateFormat the format of the date string
 * @returns {string} the formatted date string
 */
export const formatDate = (
  date: Date,
  dateFormat: string = INTERNAL_DATE_FORMAT
): string => {
  const padZeros = (value: number, length: number): string => {
    return `0000${value}`.slice(-length)
  }

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
    return [padZeros(month, 2), padZeros(day, 2), padZeros(year, 4)].join('/')
  }

  return [padZeros(year, 4), padZeros(month, 2), padZeros(day, 2)].join('-')
}

// VALIDATION

export const isDateInvalid = (
  dateString: string,
  minDate: Date,
  maxDate?: Date
): boolean => {
  let isInvalid = false

  if (dateString) {
    isInvalid = true

    const dateStringParts = dateString.split('/')
    const [month, day, year] = dateStringParts.map((str) => {
      let value
      const parsed = parseInt(str, 10)
      if (!Number.isNaN(parsed)) value = parsed
      return value
    })

    if (month && day && year != null) {
      const checkDate = setDate(year, month - 1, day)

      if (
        checkDate.getMonth() === month - 1 &&
        checkDate.getDate() === day &&
        checkDate.getFullYear() === year &&
        dateStringParts[2].length === 4 &&
        isDateWithinMinAndMax(checkDate, minDate, maxDate)
      ) {
        isInvalid = false
      }
    }
  }

  return isInvalid
}

// RENDERING TABLES

export const listToTable = (
  list: React.ReactNode[],
  rowSize: number
): React.ReactFragment => {
  const rows = []
  let i = 0

  while (i < list.length) {
    const row = []
    while (i < list.length && row.length < rowSize) {
      row.push(list[parseInt(`${i}`)])
      i += 1
    }
    rows.push(row)
  }

  return (
    <>
      {rows.map((r, rIndex) => (
        <tr key={`row_${rIndex}`}>
          {r.map((cell, cIndex) => (
            <td key={`row_${rIndex}_cell_${cIndex}`}>{cell}</td>
          ))}
        </tr>
      ))}
    </>
  )
}

export const handleTabKey = (
  event: KeyboardEvent,
  focusableEl: Array<HTMLButtonElement | null>
): void => {
  if (event.key === 'Tab') {
    const focusable = focusableEl.filter((el) => el && !el.disabled)
    const activeElement = document?.activeElement

    const firstTabIndex = 0
    const lastTabIndex = focusable.length - 1
    const firstTabStop = focusable[parseInt(`${firstTabIndex}`)]
    const lastTabStop = focusable[parseInt(`${lastTabIndex}`)]
    const focusIndex =
      activeElement instanceof HTMLButtonElement
        ? focusable.indexOf(activeElement)
        : -1

    const isLastTab = focusIndex === lastTabIndex
    const isFirstTab = focusIndex === firstTabIndex
    const isNotFound = focusIndex === -1

    if (event.shiftKey) {
      // Tab backwards
      if (isFirstTab || isNotFound) {
        event.preventDefault()
        lastTabStop?.focus()
      }
    } else {
      // Tab forwards
      if (isLastTab || isNotFound) {
        event.preventDefault()
        firstTabStop?.focus()
      }
    }
  }
}

// iOS detection from: http://stackoverflow.com/a/9039885/177710
export const isIosDevice = (): boolean =>
  typeof navigator !== 'undefined' &&
  (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
  !window.MSStream
