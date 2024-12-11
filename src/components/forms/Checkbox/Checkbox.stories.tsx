import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Checkbox component

Source: https://designsystem.digital.gov/components/checkbox
`,
      },
    },
  },
}

export const DefaultCheckbox = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" />
)

export const Checked = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" defaultChecked />
)

export const Disabled = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" disabled />
)

export const WithRichLabel = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label={<strong>My Checkbox</strong>}
  />
)

export const WithLabelDescription = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
  />
)

export const Tile = (): React.ReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" tile />
)

export const TileWithLabelDescription = (): React.ReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
    tile
  />
)
