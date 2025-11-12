import React, { ChangeEvent, type JSX, useState } from 'react'
import { Alert } from '../../Alert/Alert'
import { Button } from '../../Button/Button'
import { Fieldset } from '../Fieldset/Fieldset'
import { Form } from '../Form/Form'
import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { Textarea as TextArea } from '../Textarea/Textarea'
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
### USWDS 3.0 Validation component

Source: https://designsystem.digital.gov/components/validation
`,
      },
    },
  },
}

//This could be a third party util or any function that returns boolean for a specific validation
const validateCode = (type: string, value: string): boolean => {
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

export const Default = (): JSX.Element => {
  const [validations, setValidations] = useState({
    uppercase: false,
    numerical: false,
  })

  const validateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event
    const updatedValidations: Record<string, boolean> = {}

    Object.keys(validations).forEach((validator) => {
      // eslint-disable-next-line security/detect-object-injection
      updatedValidations[validator] = validateCode(validator, value)
    })

    setValidations({ ...validations, ...updatedValidations })
  }
  return (
    <Form
      onSubmit={(): void => {
        console.log('submit')
      }}>
      <Fieldset legend="Enter a code" legendStyle="large">
        <Alert
          type="info"
          validation
          heading="Code Requirements"
          headingLevel="h4">
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

//This could be a third party util or any function that returns boolean for a specific validation
const validateStory = (type: string, value: string): boolean => {
  switch (type) {
    case 'paragraphs':
      return value.split(/\n+/).filter((p) => p.trim()).length >= 2
    case 'words':
      return value.split(/\s+/).filter((w) => w.trim()).length >= 10
    default:
      console.warn(`No validation item found for: "${type}"`)
      return false
  }
}

export const Textarea = (): JSX.Element => {
  const [validations, setValidations] = useState({
    paragraphs: false,
    words: false,
  })

  const validateInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const {
      target: { value },
    } = event
    const updatedValidations: Record<string, boolean> = {}

    Object.keys(validations).forEach((validator) => {
      // eslint-disable-next-line security/detect-object-injection
      updatedValidations[validator] = validateStory(validator, value)
    })

    setValidations({ ...validations, ...updatedValidations })
  }
  return (
    <Form
      onSubmit={(): void => {
        console.log('submit')
      }}>
      <Fieldset legend="Enter a story" legendStyle="large">
        <Alert
          type="info"
          validation
          heading="Story Requirements"
          headingLevel="h4">
          <ValidationChecklist id="validate-story">
            <ValidationItem id="paragraphs" isValid={validations.paragraphs}>
              Write at least two paragraphs
            </ValidationItem>
            <ValidationItem id="words" isValid={validations.words}>
              Write at least ten words
            </ValidationItem>
          </ValidationChecklist>
        </Alert>
        <Label htmlFor="story">Story</Label>
        <TextArea
          id="story"
          name="story"
          aria-describedby="validate-story"
          onChange={validateInput}
        />
        <Button type="submit">Submit story</Button>
      </Fieldset>
    </Form>
  )
}
