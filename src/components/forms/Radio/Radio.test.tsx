import React from 'react'
import { render } from '@testing-library/react'

import { Radio } from './Radio'

describe('Radio component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Radio id="input-radio" name="input-radio" label="My radio button" />
    )
    expect(queryByTestId('radio')).toBeInTheDocument()
  })

  it('renders tiled radio buttons', () => {
    const { queryByLabelText } = render(
      <Radio id="input-radio" name="input-radio" label="My radio button" tile />
    )
    expect(queryByLabelText('My radio button')).toHaveClass(
      'usa-radio__input usa-radio__input--tile'
    )
  })

  it('renders label description', () => {
    const { queryByText } = render(
      <Radio
        id="input-radio"
        name="input-radio"
        label="My radio button"
        labelDescription="Label description"
        tile
      />
    )
    expect(queryByText('Label description')).toHaveClass(
      'usa-checkbox__label-description'
    )
  })
})
