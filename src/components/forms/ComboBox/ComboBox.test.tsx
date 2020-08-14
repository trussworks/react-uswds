import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComboBox } from './ComboBox'

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

const fruitOptions = Object.entries(fruits).map(([value, key]) => ({
  value: value,
  label: key,
}))

describe('ComboBox component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
      />
    )
    expect(queryByTestId('combo-box')).toBeInTheDocument()
  })

  it('display options list when input is clicked', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
      />
    )

    fireEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })

  it('display options list when input is clicked twice', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
      />
    )

    fireEvent.click(getByTestId('combo-box-input'))
    fireEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })
})
