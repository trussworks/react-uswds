import {
  DEFAULT_MAX_TIME_MINUTES,
  DEFAULT_MIN_TIME,
  DEFAULT_MIN_TIME_MINUTES,
  DEFAULT_STEP,
} from './constants'
import { getTimeOptions } from './utils'

describe('getTimeOptions', () => {
  it('returns the expected list of default times options', () => {
    const timeOptions = getTimeOptions(
      DEFAULT_MIN_TIME_MINUTES,
      DEFAULT_MAX_TIME_MINUTES,
      DEFAULT_STEP
    )

    expect(timeOptions).toEqual([
      {
        value: '00:00',
        label: '12:00am',
      },
      {
        value: '00:30',
        label: '12:30am',
      },
      {
        value: '01:00',
        label: '1:00am',
      },
      {
        value: '01:30',
        label: '1:30am',
      },
      {
        value: '02:00',
        label: '2:00am',
      },
      {
        value: '02:30',
        label: '2:30am',
      },
      {
        value: '03:00',
        label: '3:00am',
      },
      {
        value: '03:30',
        label: '3:30am',
      },
      {
        value: '04:00',
        label: '4:00am',
      },
      {
        value: '04:30',
        label: '4:30am',
      },
      {
        value: '05:00',
        label: '5:00am',
      },
      {
        value: '05:30',
        label: '5:30am',
      },
      {
        value: '06:00',
        label: '6:00am',
      },
      {
        value: '06:30',
        label: '6:30am',
      },
      {
        value: '07:00',
        label: '7:00am',
      },
      {
        value: '07:30',
        label: '7:30am',
      },
      {
        value: '08:00',
        label: '8:00am',
      },
      {
        value: '08:30',
        label: '8:30am',
      },
      {
        value: '09:00',
        label: '9:00am',
      },
      {
        value: '09:30',
        label: '9:30am',
      },
      {
        value: '10:00',
        label: '10:00am',
      },
      {
        value: '10:30',
        label: '10:30am',
      },
      {
        value: '11:00',
        label: '11:00am',
      },
      {
        value: '11:30',
        label: '11:30am',
      },
      {
        value: '12:00',
        label: '12:00pm',
      },
      {
        value: '12:30',
        label: '12:30pm',
      },
      {
        value: '13:00',
        label: '1:00pm',
      },
      {
        value: '13:30',
        label: '1:30pm',
      },
      {
        value: '14:00',
        label: '2:00pm',
      },
      {
        value: '14:30',
        label: '2:30pm',
      },
      {
        value: '15:00',
        label: '3:00pm',
      },
      {
        value: '15:30',
        label: '3:30pm',
      },
      {
        value: '16:00',
        label: '4:00pm',
      },
      {
        value: '16:30',
        label: '4:30pm',
      },
      {
        value: '17:00',
        label: '5:00pm',
      },
      {
        value: '17:30',
        label: '5:30pm',
      },
      {
        value: '18:00',
        label: '6:00pm',
      },
      {
        value: '18:30',
        label: '6:30pm',
      },
      {
        value: '19:00',
        label: '7:00pm',
      },
      {
        value: '19:30',
        label: '7:30pm',
      },
      {
        value: '20:00',
        label: '8:00pm',
      },
      {
        value: '20:30',
        label: '8:30pm',
      },
      {
        value: '21:00',
        label: '9:00pm',
      },
      {
        value: '21:30',
        label: '9:30pm',
      },
      {
        value: '22:00',
        label: '10:00pm',
      },
      {
        value: '22:30',
        label: '10:30pm',
      },
      {
        value: '23:00',
        label: '11:00pm',
      },
      {
        value: '23:30',
        label: '11:30pm',
      },
    ])
  })
})
