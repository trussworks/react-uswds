/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { MonthPicker } from './MonthPicker'
import { parseDateString } from './utils'

export default {
  title: 'Forms/Date picker/Month picker',
  component: MonthPicker,
}

const testProps = {
  date: new Date('January 20 2021'),
  minDate: parseDateString('0000-01-01') as Date,
  handleSelectMonth: (): void => {},
}

export const monthPicker = (): React.ReactElement => (
  <MonthPicker {...testProps} />
)

export const withMinAndMax = (): React.ReactElement => (
  <MonthPicker
    {...testProps}
    minDate={parseDateString('2021-04-01')}
    maxDate={parseDateString('2021-08-01')}
  />
)
