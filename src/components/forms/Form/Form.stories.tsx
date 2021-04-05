/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Form } from './Form'

import { Alert } from '../../Alert/Alert'
import { Button } from '../../Button/Button'
import { Dropdown } from '../Dropdown/Dropdown'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Fieldset } from '../Fieldset/Fieldset'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { Textarea } from '../Textarea/Textarea'

export default {
  title: 'Components/Form templates',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Form component

Source: https://designsystem.digital.gov/components/form-templates/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

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
      <TextInput
        id="input-success"
        name="input-success"
        type="text"
        validationStatus="success"
      />

      <Label htmlFor="input-type-textarea">Text area label</Label>
      <Textarea id="input-type-textarea" name="input-type-textarea"></Textarea>
    </Form>
  </div>
)

export const nameForm = (): React.ReactElement => (
  <Form onSubmit={mockSubmit}>
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
  </Form>
)

export const addressForm = (): React.ReactElement => (
  <Form onSubmit={mockSubmit} large>
    <Fieldset legend="Mailing address" legendStyle="large">
      <Label htmlFor="mailing-address-1">Street address 1</Label>
      <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

      <Label htmlFor="mailing-address-2" hint=" (optional)">
        Street address 2
      </Label>
      <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

      <div className="grid-row grid-gap">
        <div className="mobile-lg:grid-col-8">
          <Label htmlFor="city">City</Label>
          <TextInput id="city" name="city" type="text" />
        </div>
        <div className="mobile-lg:grid-col-4">
          <Label htmlFor="state">State</Label>
          <Dropdown id="state" name="state">
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
          </Dropdown>
        </div>
      </div>

      <Label htmlFor="zip">ZIP</Label>
      <TextInput
        id="zip"
        name="zip"
        type="text"
        inputSize="medium"
        pattern="[\d]{5}(-[\d]{4})?"
      />
    </Fieldset>
  </Form>
)

export const signInForm = (): React.ReactElement => {
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
        <p className="usa-form__note">
          <a
            title="Show password"
            href="javascript:void(0);"
            className="usa-show-password"
            aria-controls="password-sign-in"
            onClick={(): void =>
              setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? 'Hide password' : 'Show password'}
          </a>
        </p>

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
export const passwordResetForm = (): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Form onSubmit={mockSubmit} large>
      <Fieldset legend="Reset password" legendStyle="large">
        <span>Please enter your new password</span>
        <Alert type="info" heading="Password information">
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
        <p className="usa-form__note">
          <a
            href="javascript:void(0);"
            className="usa-show-multipassword"
            aria-controls="newPassword confirmPassword"
            onClick={(): void =>
              setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? 'Hide my typing' : 'Show my typing'}
          </a>
        </p>

        <Button type="submit">Reset password</Button>
      </Fieldset>
    </Form>
  )
}
