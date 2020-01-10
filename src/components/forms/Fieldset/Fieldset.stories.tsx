import React from 'react'
import { Fieldset } from './Fieldset'

import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'

export default {
  title: 'Fieldset',
  parameters: {
    info: `
USWDS 2.0 Fieldset component

Source: https://designsystem.digital.gov/components/form-controls/
`,
  },
}

export const nameFieldset = (): React.ReactElement => (
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
)
