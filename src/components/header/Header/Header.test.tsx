import React from 'react'
import { render } from '@testing-library/react'

import { Header } from './Header'

describe('Header component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Header>My Header</Header>)
    expect(queryByTestId('header')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(<Header>My Header</Header>)
    expect(getByText('My Header')).toBeInTheDocument()
  })
})
