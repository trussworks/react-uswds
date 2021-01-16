import React from 'react'

import { Calendar } from './Calendar'

export default {
  title: 'Forms/Date picker/Calendar',
  component: Calendar,
}

export const defaultCalendar = (): React.ReactElement => <Calendar />

export const givenDate = (): React.ReactElement => (
  <Calendar date={new Date('July 4, 2019')} />
)

export const selectedDate = (): React.ReactElement => (
  <Calendar selectedDate={new Date('January 20, 2021')} />
)
