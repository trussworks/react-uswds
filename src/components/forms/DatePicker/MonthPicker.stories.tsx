import React from 'react'

import { MonthPicker } from './MonthPicker'
import { parseDateString } from './utils'

export default {
  title: 'Components/Form controls/Date picker/Month picker',
  component: MonthPicker,
  argTypes: { handleSelectMonth: { action: 'handle select month' } },
}

const testProps = {
  date: new Date('January 20 2021'),
  minDate: parseDateString('0000-01-01') as Date,
}

export const monthPicker = (argTypes): React.ReactElement => (
  <MonthPicker {...testProps} handleSelectMonth={argTypes.handleSelectMonth} />
)

export const withMinAndMax = (argTypes): React.ReactElement => (
  <MonthPicker
    {...testProps}
    handleSelectMonth={argTypes.handleSelectMonth}
    minDate={parseDateString('2021-04-01')}
    maxDate={parseDateString('2021-08-01')}
  />
)
