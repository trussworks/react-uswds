import { InputPrefix } from './InputPrefix'
import { Icon } from '../../Icon/Icons'
import { TextInput } from '../TextInput/TextInput'
import { InputGroup } from '../InputGroup/InputGroup'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'

export default {
  title: 'Components/Input prefix or suffix/InputPrefix',
  component: InputPrefix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
}

const Template = ({ ...args }) => (
  <FormGroup>
    <Label htmlFor="cvc">Input label</Label>
    <InputGroup>
      <InputPrefix>{args.prefix}</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </InputGroup>
  </FormGroup>
)

export const AsText = {
  render: Template,
  args: { prefix: 'cvc' },
}

export const AsIcon = {
  render: Template,
  args: { prefix: <Icon.CreditCard /> },
}
