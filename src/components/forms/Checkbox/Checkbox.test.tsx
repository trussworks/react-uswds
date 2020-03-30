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
