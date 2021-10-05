import React, { useState, ChangeEvent } from 'react'
import { Alert } from '../../Alert/Alert'
import { Button } from '../../Button/Button'
import { Fieldset } from '../Fieldset/Fieldset'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { ValidationChecklist } from './ValidationChecklist'
import { ValidationItem } from './ValidationItem'

export default {
  title: 'Components/Validation',
  component: ValidationChecklist,
  subcomponents: { ValidationItem },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Validation component

Source: https://designsystem.digital.gov/components/validation
`,
      },
    },
  },
}

//This could be a third party util or any function that returns boolean for a specific validation
const validate = (type, value): boolean => {
  switch (type) {
    case 'uppercase':
      return /[A-Z]/.test(value)
    case 'numerical':
      return /\d/.test(value)
    default:
      console.warn(`No validation item found for: "${type}"`)
      return false
  }
}

export const Default = (): React.ReactElement => {
  const [validations, setValidations] = useState({
    uppercase: false,
    numerical: false,
  })

  const validateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event
    const updatedValidations = {}

    Object.keys(validations).forEach((validator) => {
      // eslint-disable-next-line security/detect-object-injection
      updatedValidations[validator] = validate(validator, value)
    })

    setValidations({ ...validations, ...updatedValidations })
  }
  return (
    <Form
      onSubmit={(): void => {
        console.log('submit')
      }}>
      <Fieldset legend="Enter a code" legendStyle="large">
        <Alert type="info" validation heading="Code Requirements">
          <ValidationChecklist id="validate-code">
            <ValidationItem id="uppercase" isValid={validations.uppercase}>
              Use at least one uppercase character
            </ValidationItem>
            <ValidationItem id="numerical" isValid={validations.numerical}>
              Use at least one number
            </ValidationItem>
          </ValidationChecklist>
        </Alert>
        <Label htmlFor="code">Code</Label>
        <TextInput
          id="code"
          name="code"
          type="text"
          aria-describedby="validate-code"
          onChange={validateInput}
        />
        <Button type="submit">Submit code</Button>
      </Fieldset>
    </Form>
  )
}
