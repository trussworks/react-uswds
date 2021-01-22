/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { YearPicker } from './YearPicker'
import { parseDateString } from './utils'

export default {
  title: 'Forms/Date picker/Year picker',
  component: YearPicker,
}

const testProps = {
  date: new Date('January 20 2021'),
  minDate: parseDateString('0000-01-01') as Date,
  handleSelectYear: (): void => {},
  setStatuses: (): void => {},
}

export const yearPicker = (): React.ReactElement => (
  <YearPicker {...testProps} />
)

export const withMinAndMax = (): React.ReactElement => (
  <YearPicker
    {...testProps}
    minDate={parseDateString('2021-01-01') as Date}
    maxDate={parseDateString('2025-01-01') as Date}
  />
)
