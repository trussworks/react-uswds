import React from 'react'
import { Form } from './Form'

import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { Textarea } from '../Textarea/Textarea'
import { FormGroup } from '../FormGroup/FormGroup'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Fieldset } from '../Fieldset/Fieldset'

export default {
  title: 'Form',
  parameters: {
    info: `
USWDS 2.0 Form component

Source: https://designsystem.digital.gov/components/form-templates/
`,
  },
}

const mockSubmit = () => {}

export const textInputForm = (): React.ReactElement => (
  <div style={{ marginLeft: '4rem' }}>
    <Form onSubmit={mockSubmit}>
      <Label htmlFor="input-type-text">Text input label</Label>
      <TextInput id="input-type-text" name="input-type-text" type="text" />

      <Label htmlFor="input-focus">Text input focused</Label>
      <TextInput
        id="input-focus"
        name="input-focus"
        className="usa-focus"
        type="text"
      />

      <FormGroup error>
        <Label htmlFor="input-error" error>
          Text input error
        </Label>
        <ErrorMessage id="input-error-message">
          Helpful error message
        </ErrorMessage>
        <TextInput
          id="input-error"
          name="input-error"
          type="text"
          error
          aria-describedby="input-error-message"
        />
      </FormGroup>

      <Label htmlFor="input-success">Text input success</Label>
      <TextInput id="input-success" name="input-success" type="text" success />

      <Label htmlFor="input-type-textarea">Text area label</Label>
      <Textarea id="input-type-textarea" name="input-type-textarea"></Textarea>
    </Form>
  </div>
)

export const nameForm = (): React.ReactElement => (
  <Form onSubmit={mockSubmit}>
    <Fieldset legend="Name">
      <Label htmlFor="title" hint=" (optional)">
        Title
      </Label>
      <TextInput id="title" name="title" type="text" small />
      <Label htmlFor="first-name">First name</Label>
      <TextInput id="first-name" name="first-name" type="text" />
      <Label htmlFor="middle-name" hint=" (optional)">
        Middle name
      </Label>
      <TextInput id="middle-name" name="middle-name" type="text" />
      <Label htmlFor="last-name">Last name</Label>
      <TextInput id="last-name" name="last-name" type="text" />
    </Fieldset>
  </Form>
)
