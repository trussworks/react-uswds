import React from 'react'

import { ComboBox } from './ComboBox'
import { Form } from '../Form/Form'

export default {
  title: 'Forms/ComboBox',
  component: ComboBox,
  parameters: {
    info: `
USWDS 2.0 ComboBox component

Source: https://designsystem.digital.gov/components/form-controls/#ComboBox
`,
  },
}

const noop = (): void => {
  return
}

const fruits = {
  apple: 'Apple',
  apricot: 'Apricot',
  avocado: 'Avocado',
  banana: 'Banana',
  blackberry: 'Blackberry',
  'blood orange': 'Blood orange',
  blueberry: 'Blueberry',
  boysenberry: 'Boysenberry',
  breadfruit: 'Breadfruit',
  'buddhas hand citron': "Buddha's hand citron",
  cantaloupe: 'Cantaloupe',
  clementine: 'Clementine',
  'crab apple': 'Crab apple',
  currant: 'Currant',
  cherry: 'Cherry',
  'custard apple': 'Custard apple',
  coconut: 'Coconut',
  cranberry: 'Cranberry',
  date: 'Date',
  dragonfruit: 'Dragonfruit',
  durian: 'Durian',
  elderberry: 'Elderberry',
  fig: 'Fig',
  gooseberry: 'Gooseberry',
  grape: 'Grape',
  grapefruit: 'Grapefruit',
  guava: 'Guava',
  'honeydew melon': 'Honeydew melon',
  jackfruit: 'Jackfruit',
  kiwifruit: 'Kiwifruit',
  kumquat: 'Kumquat',
  lemon: 'Lemon',
  lime: 'Lime',
  lychee: 'Lychee',
  mandarine: 'Mandarine',
  mango: 'Mango',
  mangosteen: 'Mangosteen',
  marionberry: 'Marionberry',
  nectarine: 'Nectarine',
  orange: 'Orange',
  papaya: 'Papaya',
  passionfruit: 'Passionfruit',
  peach: 'Peach',
  pear: 'Pear',
  persimmon: 'Persimmon',
  plantain: 'Plantain',
  plum: 'Plum',
  pineapple: 'Pineapple',
  pluot: 'Pluot',
  pomegranate: 'Pomegranate',
  pomelo: 'Pomelo',
  quince: 'Quince',
  raspberry: 'Raspberry',
  rambutan: 'Rambutan',
  soursop: 'Soursop',
  starfruit: 'Starfruit',
  strawberry: 'Strawberry',
  tamarind: 'Tamarind',
  tangelo: 'Tangelo',
  tangerine: 'Tangerine',
  'ugli fruit': 'Ugli fruit',
  watermelon: 'Watermelon',
  'white currant': 'White currant',
  yuzu: 'Yuzu',
}

export const defaultComboBoxWithPropOptions = (): React.ReactElement => {
  const opts = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <ComboBox id="input-ComboBox" name="input-ComboBox" options={opts} />
    </Form>
  )
}

// export const withDefaultValue = (): React.ReactElement => (
//   <ComboBox id="input-ComboBox" name="input-ComboBox" defaultValue="value2">
//   </ComboBox>
// )

// export const withLabel = (): React.ReactElement => (
//   <>
//     <Label htmlFor="options">ComboBox label</Label>
//     <ComboBox id="input-ComboBox" name="input-ComboBox">
//     </ComboBox>
//   </>
// )

// export const disabled = (): React.ReactElement => (
//   <ComboBox id="input-ComboBox" name="input-ComboBox" disabled>
//   </ComboBox>
// )
