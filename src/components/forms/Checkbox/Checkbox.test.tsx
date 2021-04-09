import React from 'react'
import { render } from '@testing-library/react'

import { Checkbox } from './Checkbox'

describe('Checkbox component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Checkbox id="input-checkbox" name="input-checkbox" label="My checkbox" />
    )
    expect(queryByTestId('checkbox')).toBeInTheDocument()
  })
})

it('renders tiled checkbox', () => {
  const { queryByLabelText } = render(
    <Checkbox
      id="input-checkbox"
      name="input-checkbox"
      label="My checkbox"
      tile
    />
  )
  expect(queryByLabelText('My checkbox')).toHaveClass(
    'usa-checkbox__input usa-checkbox__input--tile'
  )
})

it('renders label description', () => {
  const { queryByText } = render(
    <Checkbox
      id="input-checkbox"
      name="input-checkbox"
      label="My checkbox"
      labelDescription="Label description"
      tile
    />
  )
  expect(queryByText('Label description')).toHaveClass(
    'usa-checkbox__label-description'
  )
})
