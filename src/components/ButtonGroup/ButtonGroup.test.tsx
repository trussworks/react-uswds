import React from 'react'
import { render } from '@testing-library/react'

import { ButtonGroup } from './ButtonGroup'

describe('ButtonGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ButtonGroup>
        <button>This is a button</button>
      </ButtonGroup>
    )
    expect(queryByTestId('buttonGroup')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<ButtonGroup>My Text Input</ButtonGroup>)
    expect(queryByText('My Text Input')).toBeInTheDocument()
  })
})
