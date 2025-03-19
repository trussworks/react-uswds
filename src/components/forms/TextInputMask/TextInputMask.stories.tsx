import React, { type JSX } from 'react'
import { TextInputMask } from './TextInputMask'
import { Label } from '../Label/Label'
import { Form } from '../../..'

export default {
  title: 'Components/Text input mask',
  component: TextInputMask,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 TextInputMask component

Source: https://designsystem.digital.gov/components/input-mask/
`,
      },
    },
  },
}

export const Default = (): JSX.Element => (
  <Form
    onSubmit={(): void => {
      return
    }}>
    <Label id="first-name" htmlFor="first-name">
      Social Security Number
    </Label>
    <span id="hint-ssn" className="usa-hint">
      For example, 123 45 6789
    </span>
    <TextInputMask
      id="input-type-ssn"
      name="input-type-ssn"
      type="text"
      aria-labelledby="first-name"
      aria-describedby="hint-ssn"
      mask="___ __ ____"
      pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$"
    />

    <Label id="tel" htmlFor="first-name">
      US Telephone Number
    </Label>
    <span id="hint-tel" className="usa-hint">
      For example, 123-456-7890
    </span>
    <TextInputMask
      id="input-type-tel"
      name="input-type-tel"
      type="tel"
      aria-labelledby="tel"
      aria-describedby="hint-tel"
      mask="___-___-____"
      pattern="\d{3}-\d{3}-\d{4}"
    />

    <Label id="zip" htmlFor="first-name">
      ZIP Code
    </Label>
    <span id="hint-zip" className="usa-hint">
      For example, 12345-6789
    </span>
    <TextInputMask
      id="input-type-zip"
      name="input-type-zip"
      type="text"
      aria-labelledby="zip"
      aria-describedby="hint-zip"
      mask="_____-____"
      pattern="^[0-9]{5}(?:-[0-9]{4})?$"
    />

    <Label id="alphanumeric" htmlFor="first-name">
      Alphanumeric
    </Label>
    <span id="hint-alphanumeric" className="usa-hint">
      For example, A1B 2C3
    </span>
    <TextInputMask
      id="input-type-alphanumeric"
      name="input-type-alphanumeric"
      type="text"
      aria-labelledby="alphanumeric"
      aria-describedby="hint-alphanumeric"
      mask="___ ___"
      pattern="\w\d\w \d\w\d"
      charset="A#A #A#"
    />
  </Form>
)
