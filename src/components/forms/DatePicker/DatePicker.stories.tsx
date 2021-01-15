import React from 'react'

import { DatePicker } from './DatePicker'

export default {
  title: 'Forms/Date picker',
  component: DatePicker,
}

export const defaultDatePicker = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" />
)

export const disabled = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" disabled />
)

export const withDefaultValue = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" defaultValue="1988-05-16" />
)
