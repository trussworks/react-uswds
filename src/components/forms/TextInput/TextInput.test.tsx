import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { TextInput } from './TextInput'

describe('TextInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <TextInput id="input-type-text" name="input-type-text" type="text" />
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })
})
