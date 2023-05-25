import React from 'react'
import { render } from '@testing-library/react'

import { Select } from './Select'

describe('Select component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Select id="input-type-text" name="input-type-text">
        <option>- Select - </option>
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Select>
    )
    expect(queryByTestId('Select')).toBeInTheDocument()
  })
})
