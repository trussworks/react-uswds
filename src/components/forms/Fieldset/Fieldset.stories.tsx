import React, { type JSX } from 'react'
import { Fieldset } from './Fieldset'

import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { Checkbox } from '../Checkbox/Checkbox'
import { Radio } from '../Radio/Radio'
import { RequiredMarker } from '../Label/RequiredMarker'

export default {
  title: 'Components/Form elements/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Fieldset component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
}

export const NameFieldset = (): JSX.Element => (
  <Fieldset legend="Name" legendStyle="large">
    <Label htmlFor="title" hint=" (optional)">
      Title
    </Label>
    <TextInput id="title" name="title" type="text" inputSize="small" />
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

export const CheckboxFieldset = (): JSX.Element => (
  <Fieldset legend="Historical figures 1" legendStyle="srOnly">
    <Checkbox
      id="truth"
      name="historical-figures-1"
      value="truth"
      defaultChecked
      label="Sojourner Truth"
    />
    <Checkbox
      id="douglass"
      name="historical-figures-1"
      value="douglass"
      label="Frederick Douglass"
    />
    <Checkbox
      id="washington"
      name="historical-figures-1"
      value="washington"
      label="Booker T. Washington"
    />
    <Checkbox
      id="carver"
      name="historical-figures-1"
      label="George Washington Carver"
      disabled
    />
  </Fieldset>
)

export const CheckboxFieldsetWithDefaultLegend = (): JSX.Element => (
  <>
    <p>
      Required fields are marked with an asterisk (<RequiredMarker />
      ).
    </p>
    <Fieldset legend="Historical figures 1" requiredMarker>
      <Checkbox
        required
        id="truth"
        name="historical-figures-1"
        value="truth"
        defaultChecked
        label="Sojourner Truth"
      />
      <Checkbox
        id="douglass"
        name="historical-figures-1"
        value="douglass"
        label="Frederick Douglass"
      />
      <Checkbox
        id="washington"
        name="historical-figures-1"
        value="washington"
        label="Booker T. Washington"
      />
      <Checkbox
        id="carver"
        name="historical-figures-1"
        label="George Washington Carver"
        disabled
      />
    </Fieldset>
  </>
)

export const RadioFieldset = (): JSX.Element => (
  <Fieldset legend="Historical figures 2" legendStyle="srOnly">
    <Radio
      id="stanton"
      name="historical-figures-2"
      defaultChecked
      label="Elizabeth Cady Stanton"
      value="stanton"
    />
    <Radio
      id="anthony"
      name="historical-figures-2"
      label="Susan B. Anthony"
      value="anthony"
    />
    <Radio
      id="tubman"
      name="historical-figures-2"
      label="Harriet Tubman"
      value="tubman"
    />
    <Radio
      id="invalid"
      name="historical-figures-2"
      label="Invalid option"
      value="invalid"
      disabled
    />
  </Fieldset>
)

export const RadioFieldsetWithDefaultLegend = (): JSX.Element => (
  <Fieldset legend="Historical figures 2">
    <Radio
      id="stanton"
      name="historical-figures-2"
      defaultChecked
      label="Elizabeth Cady Stanton"
      value="stanton"
    />
    <Radio
      id="anthony"
      name="historical-figures-2"
      label="Susan B. Anthony"
      value="anthony"
    />
    <Radio
      id="tubman"
      name="historical-figures-2"
      label="Harriet Tubman"
      value="tubman"
    />
    <Radio
      id="invalid"
      name="historical-figures-2"
      label="Invalid option"
      value="invalid"
      disabled
    />
  </Fieldset>
)
