import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Radio } from './Radio'

describe('Radio component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Radio id="input-radio" name="input-radio" label="My radio button" />
    )
    expect(queryByTestId('radio')).toBeInTheDocument()
  })
})
