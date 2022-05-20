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
  <Alert type="success" heading="Success status" headingLevel="h4">
    {testText}
  </Alert>
)

export const warning = (): React.ReactElement => (
  <Alert type="warning" heading="Warning status" headingLevel="h4">
    {testText}
  </Alert>
)

export const error = (): React.ReactElement => (
  <Alert type="error" heading="Error status" headingLevel="h4">
    {testText}
  </Alert>
)

export const info = (): React.ReactElement => (
  <Alert type="info" heading="Informative status" headingLevel="h4">
    {testText}
  </Alert>
)

export const slim = (): React.ReactElement => (
  <>
    <Alert type="success" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" slim>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" slim>
      {testText}
    </Alert>
  </>
)

export const noIcon = (): React.ReactElement => (
  <>
    <Alert type="success" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" noIcon>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" noIcon>
      {testText}
    </Alert>
  </>
)

export const slimNoIcon = (): React.ReactElement => (
  <>
    <Alert type="success" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="warning" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="error" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
    <Alert type="info" headingLevel="h4" slim noIcon>
      {testText}
    </Alert>
  </>
)

export const headingLevels = (): React.ReactElement => (
  <>
    <h1>Heading Level 1</h1>
    <Alert type="info" heading="Heading level 2" headingLevel="h2">
      {testText}
    </Alert>
  </>
)
export const withCTA = (): React.ReactElement => (
  <Alert
    type="warning"
    heading="Warning status"
    headingLevel="h4"
    cta={
      <Button type="button" outline>
        Click here
      </Button>
    }>
    {testText}
  </Alert>
)
