import { ErrorMessage } from './ErrorMessage'

export default {
  title: 'Components/Form elements/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 ErrorMessage component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
}

export const DefaultErrorMessage = (): React.ReactElement => (
  <ErrorMessage>Helpful error message</ErrorMessage>
)
