import { Alert } from './Alert'

import { Button } from '../Button/Button'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Alert component

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

export const Success = (): React.ReactElement => (
  <Alert type="success" heading="Success status" headingLevel="h4">
    {testText}
  </Alert>
)

export const Warning = (): React.ReactElement => (
  <Alert type="warning" heading="Warning status" headingLevel="h4">
    {testText}
  </Alert>
)

export const Error = (): React.ReactElement => (
  <Alert type="error" heading="Error status" headingLevel="h4">
    {testText}
  </Alert>
)

export const Info = (): React.ReactElement => (
  <Alert type="info" heading="Informative status" headingLevel="h4">
    {testText}
  </Alert>
)

export const Slim = (): React.ReactElement => (
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

export const NoIcon = (): React.ReactElement => (
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

export const SlimNoIcon = (): React.ReactElement => (
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

export const HeadingLevels = (): React.ReactElement => (
  <>
    <h1>Heading Level 1</h1>
    <Alert type="info" heading="Heading level 2" headingLevel="h2">
      {testText}
    </Alert>
  </>
)
export const WithCTA = (): React.ReactElement => (
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

export const WithValidation = (): React.ReactElement => (
  <Alert type="info" heading="Code requirements" headingLevel="h4" validation>
    <ul>
      <li>Use at least one uppercase character</li>
      <li>Use at least one number</li>
    </ul>
  </Alert>
)
