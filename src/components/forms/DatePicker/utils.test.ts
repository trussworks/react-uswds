import { DEFAULT_EXTERNAL_DATE_FORMAT } from './constants'
import {
  keepDateWithinMonth,
  setDate,
  parseDateString,
  formatDate,
} from './utils'

describe('keepDateWithinMonth', () => {
  it('returns the original date if the month matches', () => {
    const testDate = new Date('January 15, 2020')
    expect(keepDateWithinMonth(testDate, 0)).toEqual(testDate)
  })

  it('returns the last day of the previous month if the month does not match', () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
    const testDate = new Date('January 15, 2020')
    expect(keepDateWithinMonth(testDate, 1)).toEqual(
      new Date('December 31, 2019')
    )
  })
})

describe('setDate', () => {
  it('returns a Date object with the given year, month, and date in UTC', () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
    expect(setDate(2020, 3, 15)).toEqual(new Date('2020-04-15T23:00:00.000Z'))
  })
})

describe('parseDateString', () => {
  it('parses a date string using - syntax and returns a Date object', () => {
    expect(parseDateString('1988-05-16')).toEqual(
      new Date('May 16, 1988 23:00:00Z')
    )
  })

  it('parses a date string using / syntax and returns a Date object', () => {
    expect(parseDateString('5/16/1988', DEFAULT_EXTERNAL_DATE_FORMAT)).toEqual(
      new Date('May 16, 1988 23:00:00Z')
    )
  })

  // TODO
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  it.skip('adjusts the date', () => {})
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
