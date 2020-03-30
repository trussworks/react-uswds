import React from 'react'
import { render } from '@testing-library/react'

import { Label } from './Label'

describe('Label component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Label htmlFor="testInput">My Text Input</Label>
    )
    expect(queryByTestId('label')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <Label htmlFor="testInput">My Text Input</Label>
    )
    expect(queryByText('My Text Input')).toBeInTheDocument()
  })
})
