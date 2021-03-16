import React from 'react'
import { Alert } from './Alert'

import { Button } from '../Button/Button'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Alert component

Source: https://designsystem.digital.gov/components/alert/
`,
      },
    },
  },
}

const testText = (
  <>
    Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a> elit,
    sed do eiusmod.
  </>
)

export const success = (): React.ReactElement => (
  <Alert type="success" heading="Success status">
    {testText}
  </Alert>
)

export const warning = (): React.ReactElement => (
  <Alert type="warning" heading="Warning status">
    {testText}
  </Alert>
)

export const error = (): React.ReactElement => (
  <Alert type="error" heading="Error status">
    {testText}
  </Alert>
)

export const info = (): React.ReactElement => (
  <Alert type="info" heading="Informative status">
    {testText}
  </Alert>
)

export const slim = (): React.ReactElement => (
  <>
    <Alert type="success" slim>
      {testText}
    </Alert>
    <Alert type="warning" slim>
      {testText}
    </Alert>
    <Alert type="error" slim>
      {testText}
    </Alert>
    <Alert type="info" slim>
      {testText}
    </Alert>
  </>
)

export const noIcon = (): React.ReactElement => (
  <>
    <Alert type="success" noIcon>
      {testText}
    </Alert>
    <Alert type="warning" noIcon>
      {testText}
    </Alert>
    <Alert type="error" noIcon>
      {testText}
    </Alert>
    <Alert type="info" noIcon>
      {testText}
    </Alert>
  </>
)

export const slimNoIcon = (): React.ReactElement => (
  <>
    <Alert type="success" slim noIcon>
      {testText}
    </Alert>
    <Alert type="warning" slim noIcon>
      {testText}
    </Alert>
    <Alert type="error" slim noIcon>
      {testText}
    </Alert>
    <Alert type="info" slim noIcon>
      {testText}
    </Alert>
  </>
)

export const withCTA = (): React.ReactElement => (
  <Alert
    type="warning"
    heading="Warning status"
    cta={
      <Button type="button" outline>
        Click here
      </Button>
    }>
    {testText}
  </Alert>
)
