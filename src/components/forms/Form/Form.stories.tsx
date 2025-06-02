/*  eslint-disable jsx-a11y/anchor-is-valid */
import React, { type JSX } from 'react'
import { Form } from './Form'

import { Alert } from '../../Alert/Alert'
import { Button } from '../../Button/Button'
import { Fieldset } from '../Fieldset/Fieldset'
import { Label } from '../Label/Label'
import { RequiredMarker } from '../Label/RequiredMarker'
import { TextInput } from '../TextInput/TextInput'
import { Select } from '../Select/Select'

export default {
  title: 'Page Templates/Forms',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Form component

Source: https://designsystem.digital.gov/components/form-templates/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const NameForm = (): JSX.Element => (
  <Form onSubmit={mockSubmit}>
    <Fieldset legend="Name" legendStyle="large">
      <Label htmlFor="first-name">First or given name</Label>
      <span className="usa-hint">For example, Jose, Darren, or Mai</span>
      <TextInput id="first-name" name="first-name" type="text" />
      <Label htmlFor="middle-name">Middle name</Label>
      <TextInput id="middle-name" name="middle-name" type="text" />
      <Label htmlFor="last-name">Last or family name</Label>
      <span className="usa-hint">
        For example, Martinez Gonzalez, Gu, or Smith
      </span>
      <TextInput id="last-name" name="last-name" type="text" />
    </Fieldset>
    <Fieldset legend="Full name" legendStyle="large">
      <Label htmlFor="full-name">Full name</Label>
      <span className="usa-hint">
        For example, Prof. Madeline Martinez Hernandez
      </span>
      <TextInput id="full-name" name="full-name" type="text" />
    </Fieldset>
    <Fieldset legend="Preferred name" legendStyle="large">
      <Label htmlFor="preferred-name">I prefer to be addressed as</Label>
      <span className="usa-hint">
        For example, Dr. Gu, Mrs. Schmidt, Alix Martinez
      </span>
      <TextInput id="preferred-name" name="preferred-name" type="text" />
    </Fieldset>
  </Form>
)

export const AddressForm = (): JSX.Element => (
  <Form onSubmit={mockSubmit} large>
    <Fieldset legend="Mailing address" legendStyle="large">
      <p>
        Required fields are marked with an asterisk (<RequiredMarker />
        ).
      </p>
      <Label htmlFor="mailing-address-1">Street address</Label>
      <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

      <Label htmlFor="mailing-address-2">Street address line 2</Label>
      <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

      <Label htmlFor="city" requiredMarker>
        City
      </Label>
      <TextInput id="city" name="city" type="text" required />

      <Label htmlFor="state" requiredMarker>
        State, territory, or military post
      </Label>
      <Select id="state" name="state" required>
        <option>- Select -</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
        <option value="AA">AA - Armed Forces Americas</option>
        <option value="AE">AE - Armed Forces Africa</option>
        <option value="AE">AE - Armed Forces Canada</option>
        <option value="AE">AE - Armed Forces Europe</option>
        <option value="AE">AE - Armed Forces Middle East</option>
        <option value="AP">AP - Armed Forces Pacific</option>
      </Select>

      <Label htmlFor="zip">ZIP Code</Label>
      <TextInput
        id="zip"
        name="zip"
        type="text"
        inputSize="medium"
        pattern="[\d]{5}(-[\d]{4})?"
      />

      <Label htmlFor="urbanization">Urbanization (Puerto Rico only)</Label>
      <TextInput id="urbanization" name="urbanization" type="text" />
    </Fieldset>
  </Form>
)

export const SignInForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Form onSubmit={mockSubmit} large>
      <Fieldset legend="Sign In" legendStyle="large">
        <span>
          or <a href="javascript:void(0);">create an account</a>
        </span>
        <Label htmlFor="username">Username or email address</Label>
        <TextInput
          id="username"
          name="username"
          type="text"
          autoCapitalize="off"
          autoCorrect="off"
        />
        <Label htmlFor="password-sign-in">Password</Label>
        <TextInput
          id="password-sign-in"
          name="password-sign-in"
          type={showPassword ? 'text' : 'password'}
        />
        <button
          title="Show password"
          type="button"
          className="usa-show-password"
          aria-controls="password-sign-in"
          onClick={(): void =>
            setShowPassword((showPassword) => !showPassword)
          }>
          {showPassword ? 'Hide password' : 'Show password'}
        </button>

        <Button type="submit">Sign in</Button>
        <p>
          <a href="javascript:void(0);" title="Forgot username">
            Forgot username?
          </a>
        </p>
        <p>
          <a href="javascript:void(0);" title="Forgot password">
            Forgot password?
          </a>
        </p>
      </Fieldset>
    </Form>
  )
}

export const PasswordResetForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Form onSubmit={mockSubmit} large>
      <Fieldset legend="Reset password" legendStyle="large">
        <span>Please enter your new password</span>
        <Alert type="info" heading="Password information" headingLevel="h4">
          Length requirements
          <br />
          Character constraints, if any
        </Alert>

        <Label htmlFor="newPassword">New password</Label>
        <TextInput
          id="newPassword"
          name="newPassword"
          type={showPassword ? 'text' : 'password'}
        />

        <Label htmlFor="confirmPassword">Confirm password</Label>
        <TextInput
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
        />
        <button
          type="button"
          className="usa-show-password"
          aria-controls="newPassword confirmPassword"
          onClick={(): void =>
            setShowPassword((showPassword) => !showPassword)
          }>
          {showPassword ? 'Hide my typing' : 'Show my typing'}
        </button>

        <Button type="submit">Reset password</Button>
      </Fieldset>
    </Form>
  )
}
