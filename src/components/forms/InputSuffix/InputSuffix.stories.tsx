import { InputSuffix } from './InputSuffix'
import { InputGroup } from '../InputGroup/InputGroup'
import { FormGroup } from '../FormGroup/FormGroup'
import { TextInput } from '../TextInput/TextInput'
import { Icon } from '../../Icon/Icons'
import { Label } from '../Label/Label'

export default {
  title: 'Components/Input prefix or suffix/InputSuffix',
  component: InputSuffix,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 InputSuffix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`,
      },
    },
  },
}

const Template = ({ ...args }) => (
  <FormGroup>
    <Label htmlFor="search">Input label</Label>
    <InputGroup>
      <TextInput id="search" name="search" type="search" />
      <InputSuffix>{args.suffix}</InputSuffix>
    </InputGroup>
  </FormGroup>
)

export const AsText = {
  render: Template,
  args: { suffix: 'lbs.' },
}

export const AsIcon = {
  render: Template,
  args: { suffix: <Icon.Search /> },
}
