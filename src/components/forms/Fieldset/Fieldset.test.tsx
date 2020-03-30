import React from 'react'
import { render } from '@testing-library/react'

import { Fieldset } from './Fieldset'

describe('Fieldset component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Fieldset>My Fieldset</Fieldset>)
    expect(queryByTestId('fieldset')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<Fieldset>My Fieldset</Fieldset>)
    expect(queryByText('My Fieldset')).toBeInTheDocument()
  })
})
