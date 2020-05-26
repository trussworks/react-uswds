import React from 'react'
import { render } from '@testing-library/react'

import { CardGroup } from './CardGroup'

describe('CardGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<CardGroup />)
    expect(queryByTestId('CardGroup')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<CardGroup>My Content</CardGroup>)
    expect(queryByText('My Content')).toBeInTheDocument()
  })
})
