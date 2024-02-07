import React from 'react'

import { DatePicker } from './DatePicker'
import { sampleLocalization } from './i18n'
import { Form } from '../Form/Form'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { ValidationStatus } from '../../../types/validationStatus'
import {
  DEFAULT_EXTERNAL_DATE_FORMAT,
  DateFormat,
  INTERNAL_DATE_FORMAT,
} from './constants'

export default {
  title: 'Components/Date picker',
  component: DatePicker,
  argTypes: {
    dateFormat: {
      control: 'radio',
      options: [
        DEFAULT_EXTERNAL_DATE_FORMAT as DateFormat,
        INTERNAL_DATE_FORMAT as DateFormat,
      ],
    },
    onSubmit: { action: 'submitted' },
    disabled: { control: { type: 'boolean' } },
    validationStatus: {
      control: {
        type: 'select',
        options: [undefined, 'success', 'error'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 DatePicker component

Source: https://designsystem.digital.gov/components/date-picker

**Note:** There is one small difference in functionality between this component and the USWDS implementation, related to validating the input. The USWDS implementation validates when:
- setting the initial value based on the default value passed in
- clicking on a date in the calendar UI
- typing the Enter key in the external text input
- on focusout (blur) of the external text input

Because this component uses the useEffect hook to trigger validation whenever the date value changes (regardless of how), the React DatePicker will validate when:
- setting the initial value based on the default value passed in (same as above)
- clicking on a date in the calendar UI (same as above)
- on input (change) of the external text input

It's also worth mentioning that validation in this case is just calling [setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity) on the external text input, and library users should be able to determine how & when they want invalid UI to display by inspecting the [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) of the external input.

We may find that we want to expose props for custom event handlers or even a ref to the component for better integration with 3rd party form libraries. If you are running into this, please [file an issue](https://github.com/trussworks/react-uswds/issues/new/choose) describing your use case.
`,
      },
    },
  },
}

type StorybookArguments = {
  dateFormat: DateFormat
  onSubmit: React.FormEventHandler<HTMLFormElement>
  disabled?: boolean
  validationStatus?: ValidationStatus
}

export const CompleteDatePicker = {
  render: (argTypes: StorybookArguments): React.ReactElement => (
    <Form onSubmit={argTypes.onSubmit}>
      <FormGroup error={argTypes.validationStatus === 'error'}>
        <Label
          id="appointment-date-label"
          htmlFor="appointment-date"
          error={argTypes.validationStatus === 'error'}>
          Appointment date
        </Label>
        <div className="usa-hint" id="appointment-date-hint">
          {argTypes.dateFormat ?? DEFAULT_EXTERNAL_DATE_FORMAT}
        </div>
        <DatePicker
          id="appointment-date"
          name="appointment-date"
          aria-describedby="appointment-date-hint"
          aria-labelledby="appointment-date-label"
          disabled={argTypes.disabled}
          validationStatus={argTypes.validationStatus}
          dateFormat={argTypes.dateFormat}
        />
      </FormGroup>
      <Label htmlFor="otherInput">Another unrelated input</Label>
      <TextInput id="otherInput" name="otherInput" type="tel" />
    </Form>
  ),
}

export const DefaultDatePicker = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" />
)

export const Disabled = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" disabled />
)

export const WithDefaultValue = {
  render: (): React.ReactElement => (
    <DatePicker id="birthdate" name="birthdate" defaultValue="1988-05-16" />
  ),

  parameters: {
    happo: {
      waitForContent: '05/16/1988',
    },
  },
}

const withDefaultInvalidValue = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    defaultValue="1988-05-16"
    minDate="2020-01-01"
  />
)
export { withDefaultInvalidValue }

export const WithMinMaxInSameMonth = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    minDate="2021-01-10"
    maxDate="2021-01-20"
  />
)

export const WithMinMax = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    minDate="2020-01-01"
    maxDate="2021-5-31"
  />
)

const withRangeDate = (): React.ReactElement => (
  <DatePicker
    id="birthdate"
    name="birthdate"
    defaultValue="2021-01-20"
    rangeDate="2021-01-08"
  />
)
withRangeDate.parameters = {
  happo: {
    waitForContent: '01/20/2021',
  },
}
export { withRangeDate }

export const WithLocalizations = (): React.ReactElement => (
  <DatePicker id="birthdate" name="birthdate" i18n={sampleLocalization} />
)
