import { DEFAULT_EXTERNAL_DATE_FORMAT, INTERNAL_DATE_FORMAT } from './constants'
import {
  keepDateWithinMonth,
  setDate,
  today,
  parseDateString,
  formatDate,
  isDateInvalid,
  isDateWithinMinAndMax,
} from './utils'

describe('keepDateWithinMonth', () => {
  it('returns the original date if the month matches', () => {
    const testDate = new Date('January 20, 2021')
    expect(keepDateWithinMonth(testDate, 0)).toEqual(testDate)
  })

  it('returns the last day of the previous month if the month does not match', () => {
    const testDate = new Date('January 20, 2021')
    expect(keepDateWithinMonth(testDate, 1)).toEqual(
      new Date('December 31, 2020')
    )
  })
})

describe('setDate', () => {
  it('returns a Date object with the given year, month, and date', () => {
    const expectedDate = new Date(0)
    expectedDate.setFullYear(2020, 0, 20)
    expect(setDate(2020, 0, 20)).toEqual(expectedDate)
  })
})

describe('today', () => {
  it('returns a Date object with today’s date', () => {
    const todaysDate = new Date()
    const expectedDate = new Date(0)
    expectedDate.setFullYear(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      todaysDate.getDate()
    )
    expect(today()).toEqual(expectedDate)
  })
})

describe('parseDateString', () => {
  it('parses a date string using - syntax and returns a Date object', () => {
    const expectedDate = new Date(0)
    expectedDate.setFullYear(2021, 0, 20)
    expect(parseDateString('2021-01-20')).toEqual(expectedDate)
  })

  it('parses a date string using / syntax and returns a Date object', () => {
    const expectedDate = new Date(0)
    expectedDate.setFullYear(2021, 0, 20)
    expect(parseDateString('1/20/2021', DEFAULT_EXTERNAL_DATE_FORMAT)).toEqual(
      expectedDate
    )
  })

  it('coerces the date if the string is invalid', () => {
    const expectedDate = new Date(0)
    expectedDate.setFullYear(2021, 11, 31)
    expect(parseDateString('2021-14-38', INTERNAL_DATE_FORMAT, true)).toEqual(
      expectedDate
    )
  })
})

describe('formatDate', () => {
  it('formats a date object to a string using - syntax', () => {
    expect(formatDate(new Date('May 16, 1988'))).toEqual('1988-05-16')
  })

  it('formats a date object to a string using / syntax', () => {
    expect(
      formatDate(new Date('May 16, 1988'), DEFAULT_EXTERNAL_DATE_FORMAT)
    ).toEqual('05/16/1988')
  })
})

describe('isDateInvalid', () => {
  it('returns false if the date is within the min & max', () => {
    const testMin = new Date('May 1, 1988')
    const testMax = new Date('June 1, 1988')
    expect(isDateInvalid('05/16/1988', testMin, testMax)).toEqual(false)
  })

  it('returns true if the date is not within the min & max', () => {
    const testMin = new Date('May 1, 1988')
    const testMax = new Date('June 1, 1988')
    expect(isDateInvalid('08/16/1988', testMin, testMax)).toEqual(true)
  })

  it('returns true if the date is not valid', () => {
    const testMin = new Date('May 1, 1988')
    const testMax = new Date('June 1, 1988')
    expect(isDateInvalid('not a date', testMin, testMax)).toEqual(true)
  })

  describe('with no max date', () => {
    it('returns false if the date is after the min', () => {
      const testMin = new Date('May 1, 1988')
      expect(isDateInvalid('05/16/1988', testMin)).toEqual(false)
    })

    it('returns true if the date is not after the min', () => {
      const testMin = new Date('May 1, 1988')
      expect(isDateInvalid('02/16/1988', testMin)).toEqual(true)
    })
  })
})

describe('isDateWithinMinAndMax', () => {
  it('returns true if the date is within the min & max', () => {
    const testDate = new Date('January 12, 2021')
    const testMin = new Date('January 10, 2021')
    const testMax = new Date('January 30, 2021')
    expect(isDateWithinMinAndMax(testDate, testMin, testMax)).toEqual(true)
  })

  it('returns false if the date is not within the min & max', () => {
    const testDate = new Date('August 16, 1988')
    const testMin = new Date('May 1, 1988')
    const testMax = new Date('June 1, 1988')
    expect(isDateWithinMinAndMax(testDate, testMin, testMax)).toEqual(false)
  })

  describe('with no max date', () => {
    it('returns true if the date is after the min', () => {
      const testDate = new Date('May 16, 1988')
      const testMin = new Date('May 1, 1988')
      expect(isDateWithinMinAndMax(testDate, testMin)).toEqual(true)
    })

    it('returns false if the date is before the min', () => {
      const testDate = new Date('February 16, 1988')
      const testMin = new Date('May 1, 1988')
      expect(isDateWithinMinAndMax(testDate, testMin)).toEqual(false)
    })
  })
})
