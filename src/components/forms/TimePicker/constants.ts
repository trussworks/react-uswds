import { CustomizableFilter } from '../ComboBox/ComboBox'

export type TimePickerFormat = '12h' | '24h'

export const DEFAULT_TIME_FORMAT: TimePickerFormat = '12h'
export const DEFAULT_MAX_TIME = '23:59'
export const DEFAULT_MAX_TIME_MINUTES = 24 * 60 - 1
export const DEFAULT_MIN_TIME = '00:00'
export const DEFAULT_MIN_TIME_MINUTES = 0
export const DEFAULT_STEP = 30
export const MIN_STEP = 1

export const TIME_PICKER_CUSTOM_FILTER: CustomizableFilter = {
  filter:
    '0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?',
  extras: {
    apQueryFilter: '([ap])',
    hourQueryFilter: '([1-9][0-2]?)',
    minuteQueryFilter: '[\\d]+:([0-9]{0,2})',
  },
}

export const TIME_PICKER_CUSTOM_FILTER_24H: CustomizableFilter = {
  filter: '0?{{ hourQueryFilter }}:{{ minuteQueryFilter }}.*',
  extras: {
    hourQueryFilter: '([0-9]{1,2})',
    minuteQueryFilter: '[\\d]+:([0-9]{0,2})',
  },
}
