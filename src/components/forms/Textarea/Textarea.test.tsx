import React from 'react'
import { render } from '@testing-library/react'

import { Textarea } from './Textarea'

describe('Textarea component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Textarea id="input-type-text" name="input-type-text" />
    )
    expect(queryByTestId('textarea')).toBeInTheDocument()
  })
})
