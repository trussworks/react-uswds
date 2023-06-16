import React from 'react'
import { render } from '@testing-library/react'
jest.mock('../../../deprecation')
import { deprecationWarning } from '../../../deprecation'

import { Dropdown } from './Dropdown'

describe('Dropdown component', () => {
  it('renders without errors, displaying a deprecation warning', () => {
    const { queryByTestId } = render(
      <Dropdown id="input-type-text" name="input-type-text">
        <option>- Select - </option>
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Dropdown>
    )
    expect(queryByTestId('Select')).toBeInTheDocument()
    expect(deprecationWarning).toHaveBeenCalledTimes(1)
    expect(deprecationWarning).toHaveBeenCalledWith(
      'Dropdown is deprecated and will be removed in the future. Please use the Select component instead.'
    )
  })
})
